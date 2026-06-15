import { useEffect, useState } from "react";
import { scrollToSection } from "../../utils/scrollTo.js";

export default function Hero({ scrollY, strings, identity }) {
  const bullets = strings?.hero?.bullets ?? ["Produit", "Impact", "Agilité", "Valeur"];
  const activeImage = identity ?? {
    title: strings?.hero?.title ?? "@caapitalis",
    badge: strings?.hero?.badge ?? "Entrepreneur · Tech",
    image: "/ali-pro.jpg",
    alt: "Ali Ouadi",
  };

  return (
    <section id="hero" className="hero-root">
      <div className="hero-inner">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="ha1" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 42 }}>
              <div style={{ width: 22, height: 2.5, background: "var(--acc)", borderRadius: 2, opacity: 0.7 }} />
              <span
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: ".56rem",
                  fontWeight: 600,
                  letterSpacing: ".3em",
                  textTransform: "uppercase",
                  color: "var(--acc)",
                }}
              >
                {strings?.hero?.tagline ?? "Portfolio · 2025"}
              </span>
            </div>

            <div style={{ transform: `translateY(${scrollY * -0.1}px)`, willChange: "transform" }}>
              <div className="ha2">
                <h1
                  key={activeImage.title}
                  className="identity-fade"
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(3.8rem, 8vw, 6.6rem)",
                    fontWeight: 400,
                    lineHeight: 0.92,
                    letterSpacing: "-.03em",
                    color: "var(--text)",
                    maxWidth: 760,
                    transition: "color .35s ease",
                  }}
                >
                  {activeImage.title}
                </h1>
              </div>
            </div>

            <div className="hero-favicons">
              <a href="https://github.com/caapitalis" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://x.com/caapitalis" target="_blank" rel="noreferrer">X</a>
              <a href="https://www.linkedin.com/in/ali-ouadi-314a3b3a4/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>

            <div className="hero-divider">
              <div />
            </div>

            <div className="neo glass" style={{ padding: 24, borderRadius: 28, maxWidth: 520, marginBottom: 24 }}>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: ".95rem",
                  fontWeight: 400,
                  letterSpacing: ".02em",
                  color: "var(--text)",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                {strings?.hero?.subtitle ?? "I build digital products oriented toward business & finance with a data-driven, AI, web3 approach."}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {bullets.map((item) => (
                  <span
                    key={item}
                    className="neo-p"
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: ".68rem",
                      fontWeight: 700,
                      letterSpacing: ".14em",
                      textTransform: "uppercase",
                      color: "var(--mut)",
                      padding: "10px 16px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="ha4">
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: ".82rem",
                  fontWeight: 300,
                  letterSpacing: ".03em",
                  color: "var(--mut)",
                  maxWidth: 420,
                  lineHeight: 2,
                }}
              >
                {strings?.hero?.details1 ?? "BTSS SIO 2025-2027 student at Ingetis CFA Paris 5th, France."}
                <br />
                {strings?.hero?.details2 ?? "Passionate about data, AI and Web3."}
              </p>
            </div>

            <div className="hero-actions">
              <button className="bp" onClick={() => scrollToSection("projects")}>{strings?.hero?.viewProjects ?? "View projects"}</button>
              <button className="bg2" onClick={() => scrollToSection("newsletter")}>{strings?.hero?.newsletter ?? "Newsletter"} <em style={{ fontFamily: "var(--serif)", fontSize: "1.1rem" }}>→</em></button>
            </div>
          </div>

          <div className="hero-media-wrapper">
            <div key={activeImage.title} className="hero-photo neo glass identity-fade" style={{ width: "100%", aspectRatio: "1 / 1", overflow: "hidden", position: "relative", border: "1px solid rgba(255,255,255,.9)" }}>
              <img
                className="hero-image"
                src={activeImage.image}
                alt={activeImage.alt}
                loading="eager"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div className="hero-badge identity-fade" style={{ animationDelay: "0.1s" }}>
                <span>{activeImage.badge}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span
            style={{
              fontFamily: "var(--sans)",
              fontSize: ".48rem",
              fontWeight: 500,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--mut)",
              opacity: 0.7,
            }}
          >
            {strings?.hero?.scroll ?? "Scroll"}
          </span>
          <div
            style={{
              width: 1,
              height: 48,
              background: "linear-gradient(to bottom, var(--acc), transparent)",
              opacity: 0.5,
              animation: "glow 2.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
