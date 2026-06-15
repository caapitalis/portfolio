import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { NAV_LINKS } from "../../data/navigation.js";
import { scrollToSection } from "../../utils/scrollTo.js";

export default function Nav({ scrollY, strings, identity, lang, setLang, experiences }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const experienceLinks = useMemo(
    () => experiences?.map((item) => ({ slug: item.slug, title: lang === "fr" ? item.title : item.titleEn ?? item.title })),
    [experiences, lang]
  );

  useEffect(() => {
    const handleClick = () => {
      setIsOpen(false);
      setMobileMenuOpen(false);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const handleSection = (id) => {
    if (isHome) {
      scrollToSection(id);
      setMobileMenuOpen(false);
      return;
    }

    navigate("/");
    setMobileMenuOpen(false);
    setTimeout(() => scrollToSection(id), 300);
  };

  const handleMobileToggle = (event) => {
    event.stopPropagation();
    setMobileMenuOpen((current) => !current);
  };

  const handleExperienceToggle = (event) => {
    event.stopPropagation();
    setIsOpen((current) => !current);
  };

  return (
    <nav
      className="nav-root"
      style={{
        boxShadow:
          scrollY > 50
            ? "0 16px 32px rgba(0,0,0,.12)"
            : "0 10px 24px rgba(0,0,0,.08)",
      }}
    >
      <div className="nav-inner">
        <div className="nav-left">
          <button className="nav-brand identity-fade" onClick={() => (isHome ? scrollToSection("hero") : navigate("/"))}>
            {identity?.title ?? strings?.hero?.title ?? "@caapitalis"}
          </button>
          <div className="nav-links-wrapper">
            {NAV_LINKS.map(([_, id], index) => (
              <button key={id} className="nav-link" onClick={() => handleSection(id)}>
                {strings?.navLinks?.[index] ?? id}
              </button>
            ))}
            <div className="nav-dropdown-wrapper">
              <button className="nav-link nav-dropdown-toggle" onClick={handleExperienceToggle}>
                {strings?.nav?.experiences ?? "Experiences"}
              </button>
              {isOpen && (
                <div className="nav-dropdown" onClick={(event) => event.stopPropagation()}>
                  {experienceLinks?.map((item) => (
                    <Link key={item.slug} to={`/experience/${item.slug}`} className="nav-dropdown-item" onClick={() => setIsOpen(false)}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="nav-right">
          <button className="nav-toggle" onClick={() => setLang(lang === "fr" ? "en" : "fr")}>{strings?.language?.label ?? "EN"}</button>
          <button className="nav-cta" onClick={() => handleSection("contact")}>{strings?.cta?.contact ?? "Internship"}</button>
        </div>

        <button
          className={`nav-burger${mobileMenuOpen ? " open" : ""}`}
          onClick={handleMobileToggle}
          type="button"
          aria-label="Menu mobile"
          aria-expanded={mobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={`nav-mobile-panel${mobileMenuOpen ? " open" : ""}`} onClick={(event) => event.stopPropagation()}>
          <div className="nav-mobile-links">
            {NAV_LINKS.map(([_, id], index) => (
              <button key={id} className="nav-link nav-mobile-item" onClick={() => handleSection(id)}>
                {strings?.navLinks?.[index] ?? id}
              </button>
            ))}
            <div className="nav-mobile-divider" />
            {experienceLinks?.map((item) => (
              <Link key={item.slug} to={`/experience/${item.slug}`} className="nav-dropdown-item nav-mobile-item" onClick={() => setMobileMenuOpen(false)}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="nav-mobile-actions">
            <button className="nav-toggle nav-mobile-item" onClick={() => { setLang(lang === "fr" ? "en" : "fr"); setMobileMenuOpen(false); }}>
              {strings?.language?.label ?? "EN"}
            </button>
            <button className="nav-cta nav-mobile-item" onClick={() => handleSection("contact")}>
              {strings?.cta?.contact ?? "Internship"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
