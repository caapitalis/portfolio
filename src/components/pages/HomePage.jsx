import FloatingOrbs from "../layout/FloatingOrbs.jsx";
import Hero from "../sections/Hero.jsx";
import Marquee from "../sections/Marquee.jsx";
import About from "../sections/About.jsx";
import Stack from "../sections/Stack.jsx";
import Projects from "../sections/Projects.jsx";
import Newsletter from "../sections/Newsletter.jsx";
import Footer from "../sections/Footer.jsx";
import Parcours from "../sections/Parcours.jsx";
import { MARQUEE_DISCIPLINES, MARQUEE_TECH } from "../../data/content.js";

export default function HomePage({ strings, identity, experiences, scrollY }) {
  return (
    <>
      <FloatingOrbs />
      <Hero scrollY={scrollY} strings={strings} identity={identity} />
      <Marquee items={MARQUEE_DISCIPLINES} animation="mq" variant="serif" />
      <About strings={strings} />
      <Parcours strings={strings} experiences={experiences} />
      <Marquee items={MARQUEE_TECH} animation="mq2" variant="sans" />
      <Stack strings={strings} />
      <Projects strings={strings} />
      <Newsletter strings={strings} />
      <Footer strings={strings} />
    </>
  );
}
