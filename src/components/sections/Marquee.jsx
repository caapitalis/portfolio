export default function Marquee({ items, animation = "mq", variant = "serif" }) {
  const isSerif = variant === "serif";

  return (
    <div style={{ padding: isSerif ? "44px 0" : "24px 0", overflow: "hidden", position: "relative", zIndex: 1 }}>
      <div style={{ display: "flex", width: "max-content", animation: `${animation} ${isSerif ? 28 : 38}s linear infinite` }}>
        {[0, 1].map((k) => (
          <div key={k} style={{ display: "flex" }}>
            {items.map((t, j) => (
              <span
                key={j}
                style={{
                  fontFamily: isSerif ? "var(--serif)" : "var(--sans)",
                  fontStyle: isSerif ? "italic" : "normal",
                  fontSize: isSerif ? "clamp(1rem,2vw,1.4rem)" : ".55rem",
                  fontWeight: isSerif ? 400 : 600,
                  letterSpacing: isSerif ? undefined : ".2em",
                  textTransform: isSerif ? undefined : "uppercase",
                  color: "var(--mut)",
                  whiteSpace: "nowrap",
                  padding: isSerif ? "0 36px" : "0 26px",
                  opacity: isSerif ? 0.55 : 0.45,
                }}
              >
                {t} ·
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
