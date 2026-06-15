import { Link } from "react-router-dom";

export default function Parcours({ strings, experiences }) {
  const items = experiences ?? [];

  return (
    <section id="parcours" style={{ padding: "100px 64px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 32, alignItems: "flex-end", flexWrap: "wrap", marginBottom: 36 }}>
          <div>
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
              {strings?.parcours?.section ?? "02 — Parcours"}
            </p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.4rem,5vw,4rem)",
                fontWeight: 400,
                lineHeight: 1.08,
                maxWidth: 620,
              }}
            >
              {strings?.parcours?.title ?? "Mon parcours."}
            </h2>
          </div>
          <p
            style={{
              maxWidth: 500,
              fontFamily: "var(--sans)",
              fontSize: ".92rem",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "var(--mut)",
            }}
          >
            {strings?.parcours?.description ?? "Education, internships and first projects at the intersection of digital, finance and data."}
          </p>
        </div>

        <div className="parcours-timeline">
          {items.map((item, index) => (
            <Link
              key={item.slug}
              to={`/experience/${item.slug}`}
              className="parcours-item sr"
              style={{ animationDelay: `${index * 0.12}s`, textDecoration: "none", color: "inherit" }}
            >
              <div className="parcours-mark">
                <span>{item.period}</span>
              </div>
              <div className="parcours-content">
                <h3>{item.title}</h3>
                <p className="parcours-company">{item.company}</p>
                <p className="parcours-location">{item.location}</p>
                <p className="parcours-detail">{item.preview}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
