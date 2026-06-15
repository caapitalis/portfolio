import { SKILLS } from "../../data/skills.js";

export default function Stack({ strings }) {
  return (
    <section id="stack" style={{ padding: "80px 64px 110px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="sr section-panel" style={{ marginBottom: 60 }}>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: ".54rem",
              fontWeight: 600,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "var(--acc)",
              marginBottom: 18,
            }}
          >
            {strings?.stack?.section ?? "03 — Stack & Skills"}
          </p>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.4rem,5vw,4rem)",
              fontWeight: 400,
              lineHeight: 1.08,
              marginBottom: 10,
            }}
          >
            {strings?.stack?.title?.split(" ").slice(0, 2).join(" ")}
            <br />
            <em>{strings?.stack?.title?.split(" ").slice(2).join(" ")}</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: ".86rem",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "var(--mut)",
              maxWidth: 620,
            }}
          >
            {strings?.stack?.description ?? "A curated selection of technical and product skills designed for impact-driven projects and business challenges."}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 22 }}>
          {SKILLS.map((s, i) => (
            <div key={s.n} className={`sk sr d${i + 1}`}>
              <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: ".78rem", color: "var(--acc)", opacity: 0.6, marginBottom: 20 }}>
                {s.n}
              </p>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", fontWeight: 400, lineHeight: 1.08, marginBottom: 2 }}>{s.h}</h3>
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                  lineHeight: 1.08,
                  marginBottom: 22,
                  color: "var(--mut)",
                }}
              >
                {s.sub}
              </h3>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: ".76rem",
                  fontWeight: 300,
                  lineHeight: 1.95,
                  color: "var(--mut)",
                  marginBottom: 26,
                }}
              >
                {s.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.tags.map((t) => (
                  <span key={t} className="tb">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
