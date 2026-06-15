import { SOCIAL_LINKS } from "../../data/content.js";

export default function Footer({ strings }) {
  return (
    <footer
      id="contact"
      style={{
        padding: "80px 64px 52px",
        borderTop: "1px solid rgba(28,25,20,.09)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 56, marginBottom: 64 }}>
          <div className="sr">
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
              {strings?.footer?.section ?? "05 — Contact"}
            </p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.4rem,5.5vw,4.2rem)",
                fontWeight: 400,
                lineHeight: 1.06,
                marginBottom: 32,
              }}
            >
              {strings?.footer?.title?.split(" ").slice(0, 1).join(" ")}
              <br />
              <em>{strings?.footer?.title?.split(" ").slice(1).join(" ")}</em>
            </h2>
            <a
              href={`mailto:${strings?.footer?.emailCta ?? "contact@aliouadi.dev"}`}
              className="neo-p"
              style={{
                fontFamily: "var(--sans)",
                fontSize: ".64rem",
                fontWeight: 500,
                letterSpacing: ".1em",
                color: "var(--acc)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 26px",
                transition: "box-shadow .35s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "8px 8px 22px var(--shd),-8px -8px 22px var(--shl)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "5px 5px 14px var(--shd),-5px -5px 14px var(--shl)";
              }}
            >
              {strings?.footer?.emailCta ?? "contact@aliouadi.dev"} ↗
            </a>
          </div>

          <div className="sr d2" style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 14 }}>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: ".52rem",
                fontWeight: 600,
                letterSpacing: ".28em",
                textTransform: "uppercase",
                color: "var(--mut)",
                marginBottom: 4,
              }}
            >
              {strings?.footer?.social ?? "Réseaux"}
            </p>
            {SOCIAL_LINKS.map(([label, href]) => (
              <a key={label} href={href} className="sa" target="_blank" rel="noopener noreferrer">
                <span style={{ width: 14, height: 1.5, background: "currentColor", opacity: 0.45, flexShrink: 0 }} />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ height: 1, background: "rgba(28,25,20,.09)", marginBottom: 28 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: ".56rem", fontWeight: 300, letterSpacing: ".15em", color: "var(--mut)" }}>
            {strings?.footer?.copyright ?? "© 2025 Ali Ouadi — @caapitalis"}
          </p>
          <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: ".84rem", color: "var(--mut)" }}>
            {strings?.footer?.signature ?? "Fait avec soin & ambition."}
          </p>
        </div>
      </div>
    </footer>
  );
}
