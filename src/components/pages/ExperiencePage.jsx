import { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { EXPERIENCE_PAGES } from "../../data/experienceData.js";

export default function ExperiencePage({ lang, strings }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const page = useMemo(() => EXPERIENCE_PAGES.find((item) => item.slug === slug), [slug]);
  const experienceStrings = strings?.experience ?? {};

  const translated = useMemo(() => {
    if (!page) return null;

    if (lang === "fr") {
      return page;
    }

    return {
      ...page,
      title: page.titleEn ?? page.title,
      hero: page.heroEn ?? page.hero,
      preview: page.previewEn ?? page.preview,
      actions: page.actionsEn ?? page.actions,
      learnings: page.learningsEn ?? page.learnings,
      evolution: page.evolutionEn ?? page.evolution,
    };
  }, [lang, page]);

  if (!page || !translated) {
    return (
      <main className="experience-page-shell">
        <p>{experienceStrings?.loading ?? (lang === "fr" ? "Chargement de la page..." : "Loading page...")}</p>
      </main>
    );
  }

  const displayTitle = lang === "en" ? translated.titleEn ?? translated.title : translated.title;

  return (
    <main className="experience-page-shell">
      <div className="experience-page-container">
        <div className="experience-header">
          <div>
            <p style={{ fontFamily: "var(--sans)", textTransform: "uppercase", letterSpacing: ".24em", fontSize: ".7rem", color: "var(--acc)", marginBottom: 16 }}>
              {experienceStrings?.sectionTitle ?? (lang === "fr" ? "Expérience détaillée" : "Detailed experience")}
            </p>
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 400, lineHeight: 1.02 }}>
              {displayTitle}
            </h1>
            <p style={{ fontFamily: "var(--sans)", fontSize: ".95rem", color: "var(--mut)", marginTop: 14, maxWidth: 760, lineHeight: 1.9 }}>
              {translated.hero}
            </p>
          </div>
          <Link to="/" className="bp" style={{ alignSelf: "start" }}>
            {experienceStrings?.backToPortfolio ?? (lang === "fr" ? "Retour au portfolio" : "Back to portfolio")}
          </Link>
        </div>

        <section className="neo" style={{ padding: 32, display: "grid", gap: 24, borderRadius: 28 }}>
          <div style={{ display: "grid", gap: 14 }}>
            <span style={{ fontFamily: "var(--sans)", textTransform: "uppercase", letterSpacing: ".22em", fontSize: ".72rem", color: "var(--mut)" }}>
              {translated.company} · {translated.location}
            </span>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.9rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.05 }}>
              {translated.period}
            </h2>
          </div>
          <div className="experience-grid">
            <div className="glass experience-panel">
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: 14 }}>{experienceStrings?.sections?.actions ?? "Key actions"}</h3>
              <ul style={{ listStyleType: "disc", paddingLeft: 20, color: "var(--text)", lineHeight: 1.85, fontFamily: "var(--sans)", fontSize: ".92rem" }}>
                {translated.actions.map((item) => (
                  <li key={item} style={{ marginBottom: 12 }}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="glass" style={{ padding: 24 }}>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", marginBottom: 14 }}>{experienceStrings?.sections?.learnings ?? "What I learned"}</h3>
              <ul style={{ listStyleType: "disc", paddingLeft: 20, color: "var(--text)", lineHeight: 1.85, fontFamily: "var(--sans)", fontSize: ".92rem" }}>
                {translated.learnings.map((item) => (
                  <li key={item} style={{ marginBottom: 12 }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="neo" style={{ padding: 32, borderRadius: 28 }}>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", marginBottom: 18 }}>{experienceStrings?.sections?.evolution ?? "Evolution"}</h3>
          <div style={{ display: "grid", gap: 14 }}>
            {translated.evolution.map((item) => (
              <p key={item} style={{ fontFamily: "var(--sans)", fontSize: ".95rem", lineHeight: 1.85, color: "var(--mut)" }}>
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="neo experience-related">
          <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem" }}>{experienceStrings?.otherExperiences ?? (lang === "fr" ? "Autres expériences" : "Other experiences")}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {EXPERIENCE_PAGES.filter((item) => item.slug !== slug).map((item) => (
              <Link key={item.slug} to={`/experience/${item.slug}`} className="pk" style={{ textDecoration: "none", color: "inherit" }}>
                <span style={{ display: "block", fontFamily: "var(--sans)", fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--mut)", marginBottom: 12 }}>
                  {experienceStrings?.itemLabel ?? (lang === "fr" ? "Expérience" : "Experience")}
                </span>
                <h4 style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", lineHeight: 1.2, marginBottom: 14 }}>{item.title}</h4>
                <p style={{ fontFamily: "var(--sans)", fontSize: ".88rem", lineHeight: 1.8, color: "var(--mut)" }}>{item.preview}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
