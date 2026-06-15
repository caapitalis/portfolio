import { useState } from "react";

export default function Newsletter({ strings }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubscribe = () => {
    if (email) setSent(true);
  };

  return (
    <section id="newsletter" style={{ padding: "80px 64px 110px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="section-panel newsletter-panel">
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
              {strings?.newsletter?.section ?? "05 — Newsletter"}
            </p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem,4.5vw,3.6rem)",
                fontWeight: 400,
                lineHeight: 1.08,
                marginBottom: 26,
              }}
            >
              {strings?.newsletter?.title?.split(" ")?.slice(0, 2).join(" ")}
              <br />
              <em>{strings?.newsletter?.title?.split(" ")?.slice(2).join(" ")}</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: ".8rem",
                fontWeight: 300,
                lineHeight: 2,
                color: "var(--mut)",
                marginBottom: 36,
              }}
            >
              {strings?.newsletter?.description ?? "Articles, tech watch, data, AI and Web3. Regular updates without spam — only what deserves your time."}
            </p>
            {(strings?.newsletter?.topics ?? []).map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 13 }}>
                <div style={{ width: 16, height: 2.5, background: "var(--acc)", borderRadius: 2, opacity: 0.5, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--sans)", fontSize: ".72rem", fontWeight: 300, color: "var(--mut)" }}>{t}</span>
              </div>
            ))}
          </div>

          <div className="srr">
            <div className="neo glass" style={{ padding: 48 }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "44px 0" }}>
                  <div
                    className="neo"
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 28px",
                    }}
                  >
                    <span style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", color: "var(--acc)" }}>✓</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "2.2rem", marginBottom: 14 }}>{strings?.newsletter?.thanksTitle ?? "Welcome."}</h3>
                  <p style={{ fontFamily: "var(--sans)", fontSize: ".76rem", fontWeight: 300, color: "var(--mut)", lineHeight: 1.9 }}>
                    {strings?.newsletter?.thanksText ?? "You're now on the list. See you soon."}
                  </p>
                </div>
              ) : (
                <>
                  <p
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: ".54rem",
                      fontWeight: 600,
                      letterSpacing: ".24em",
                      textTransform: "uppercase",
                      color: "var(--mut)",
                      marginBottom: 32,
                    }}
                  >
                    {strings?.newsletter?.cta ?? "Join the newsletter"}
                  </p>
                  <div className="nw">
                    <input
                      className="ni"
                      type="text"
                      placeholder={strings?.newsletter?.namePlaceholder ?? "Your first name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="nw">
                    <input
                      className="ni"
                      type="email"
                      placeholder={strings?.newsletter?.emailPlaceholder ?? "Your email address"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button className="bp" style={{ width: "100%", borderRadius: 14, padding: 16, marginTop: 6 }} onClick={handleSubscribe}>
                    {strings?.newsletter?.subscribe ?? "Subscribe"}
                  </button>
                  <p
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: ".56rem",
                      fontWeight: 300,
                      color: "var(--mut)",
                      marginTop: 18,
                      textAlign: "center",
                      lineHeight: 1.8,
                    }}
                  >
                    {strings?.newsletter?.privacy ?? "No spam. Unsubscribe with one click."}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
