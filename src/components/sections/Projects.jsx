import { PROJECT_PLACEHOLDER_COUNT } from "../../data/content.js";

export default function Projects({ strings }) {
  return (
    <section id="projects" style={{ padding: "80px 64px 110px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="section-panel sr" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 24 }}>
          <div>
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
              {strings?.projects?.section ?? "03 — Projects"}
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
              {strings?.projects?.title?.split(" ").slice(0, 1).join(" ")}
              <br />
              <em>{strings?.projects?.title?.split(" ").slice(1).join(" ")}</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: ".86rem",
                fontWeight: 300,
                lineHeight: 1.9,
                color: "var(--mut)",
                maxWidth: 560,
              }}
            >
              {strings?.projects?.description ?? "Practical cases, prototypes and solutions designed for real business needs."}
            </p>
          </div>
          <p
            className="srr"
            style={{
              fontFamily: "var(--sans)",
              fontSize: ".76rem",
              fontWeight: 300,
              color: "var(--mut)",
              maxWidth: 260,
              lineHeight: 1.9,
              textAlign: "right",
            }}
          >
            {strings?.projects?.subtitle ?? "Projects will be published as the journey progresses."}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22 }}>
          {Array.from({ length: PROJECT_PLACEHOLDER_COUNT }, (_, idx) => {
            const i = idx + 1;
            return (
              <div key={i} className={`pk sr d${i}`}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
                    <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: ".76rem", color: "var(--mut)" }}>
                      0{i}
                    </span>
                    <span className="ta" style={{ fontSize: ".48rem", opacity: 0.8 }}>
                      {strings?.projects?.comingSoon ?? "Coming soon"}
                    </span>
                  </div>
                  <div style={{ height: 1, background: "rgba(28,25,20,.08)", marginBottom: 28 }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                    <div style={{ height: 9, background: "rgba(28,25,20,.07)", width: "55%", borderRadius: 100 }} />
                    <div style={{ height: 9, background: "rgba(28,25,20,.07)", width: "36%", borderRadius: 100 }} />
                    <div style={{ height: 9, background: "rgba(28,25,20,.05)", width: "44%", borderRadius: 100 }} />
                  </div>
                </div>
                <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: ".72rem", color: "var(--mut)", textAlign: "right" }}>
                  {strings?.projects?.soonText ?? "Available soon"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
