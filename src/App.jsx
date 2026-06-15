import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useScrollY } from "./hooks/useScrollY.js";
import { useScrollReveal } from "./hooks/useScrollReveal.js";
import Nav from "./components/layout/Nav.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import ExperiencePage from "./components/pages/ExperiencePage.jsx";
import LoadingOverlay from "./components/ui/LoadingOverlay.jsx";
import { usePageLoading } from "./hooks/usePageLoading.js";
import { TRANSLATIONS } from "./data/translations.js";
import { MARQUEE_DISCIPLINES, MARQUEE_TECH } from "./data/content.js";
import { EXPERIENCE_PAGES } from "./data/experienceData.js";
import aliProImage from "../ali pro.jpg";
import caapitalisImage from "../W1zmQl_q_400x400.jpg";

const identityProfiles = [
  {
    title: "@caapitalis",
    badge: "@caapitalis",
    image: caapitalisImage,
    alt: "Photo de @caapitalis",
  },
  {
    title: "Ali Ouadi",
    badge: "Ali Ouadi",
    image: aliProImage,
    alt: "Photo d'Ali Ouadi",
  },
];

export default function App() {
  const [lang, setLang] = useState("fr");
  const [waiting, setWaiting] = useState(false);
  const [identityIndex, setIdentityIndex] = useState(0);
  const scrollY = useScrollY();
  const loading = usePageLoading();
  const strings = TRANSLATIONS[lang];
  const identity = identityProfiles[identityIndex];

  useScrollReveal();

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) setLang(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdentityIndex((current) => (current + 1) % identityProfiles.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const startHandler = () => setWaiting(true);
    const endHandler = () => setWaiting(false);

    window.addEventListener("nav-wait-start", startHandler);
    window.addEventListener("nav-wait-end", endHandler);

    return () => {
      window.removeEventListener("nav-wait-start", startHandler);
      window.removeEventListener("nav-wait-end", endHandler);
    };
  }, []);

  return (
    <>
      <LoadingOverlay visible={loading || waiting} />
      <Nav scrollY={scrollY} strings={strings} identity={identity} lang={lang} setLang={setLang} experiences={EXPERIENCE_PAGES} />
      <Routes>
        <Route path="/" element={<HomePage strings={strings} identity={identity} experiences={EXPERIENCE_PAGES} scrollY={scrollY} />} />
        <Route path="/experience/:slug" element={<ExperiencePage lang={lang} strings={strings} />} />
        <Route path="*" element={<HomePage strings={strings} identity={identity} experiences={EXPERIENCE_PAGES} scrollY={scrollY} />} />
      </Routes>
    </>
  );
}
