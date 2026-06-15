export default function About({ strings }) {
  return (
    <section id="about" style={{ padding: "100px 64px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.65fr", gap: 72, alignItems: "start" }}>
          <div className="srl">
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: ".54rem",
                fontWeight: 600,
                letterSpacing: ".3em",
                textTransform: "uppercase",
                color: "var(--acc)",
                marginBottom: 20,
              }}
            >
              {strings?.about?.section ?? "01 — About"}
            </p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.4rem,5vw,4rem)",
                fontWeight: 400,
                lineHeight: 1.08,
                marginBottom: 40,
              }}
            >
              {strings?.about?.title?.split(" ").slice(0, 1).join(" ")}
              <br />
              <em>{strings?.about?.title?.split(" ").slice(1).join(" ")}</em>
            </h2>
            <div className="neo" style={{ width: 100, height: 100, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--serif)", fontSize: "2.2rem", fontStyle: "italic", color: "var(--mut)" }}>A</span>
            </div>
          </div>

          <div style={{ paddingTop: 36 }}>
            <div className="neo srb d1" style={{ padding: "40px 44px", marginBottom: 28 }}>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.22rem",
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: "var(--text)",
                  opacity: 0.8,
                }}
              >
                {strings?.about?.quote ?? "The most powerful tech is the one that solves real problems — with elegance."}
              </p>
            </div>
            <p
              className="sr d2"
              style={{
                fontFamily: "var(--sans)",
                fontSize: ".82rem",
                fontWeight: 300,
                lineHeight: 2,
                color: "var(--mut)",
                marginBottom: 20,
              }}
            >
              {strings?.about?.description1 ?? "I'm Ali Ouadi, a BTSS SIO 2025-2027 student at Ingetis CFA Paris 5th. My ambition is to become an outstanding developer specialized in high-value business applications."}
            </p>
            <p
              className="sr d3"
              style={{
                fontFamily: "var(--sans)",
                fontSize: ".82rem",
                fontWeight: 300,
                lineHeight: 2,
                color: "var(--mut)",
                marginBottom: 36,
              }}
            >
              {strings?.about?.description2 ?? "Self-taught at heart, I build my skills through practice and active learning. This portfolio is the living archive of my journey."}
            </p>
            <div className="sr d4" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {(strings?.about?.tags ?? []).map((t) => (
                <span key={t} className="ta">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
