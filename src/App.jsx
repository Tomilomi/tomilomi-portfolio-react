import { useTheme } from "./hooks/useTheme";
import { useLang } from "./hooks/useLang";
import { useSakana } from "./hooks/useSakana";
import { translations } from "./data/translations";

import Controls from "./components/Controls";
import Header from "./components/Header";
import Summary from "./components/sections/Summary";
import Contact from "./components/sections/Contact";
import Toolset from "./components/sections/Toolset";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Languages from "./components/sections/Languages";

import "./styles/global.css";

export default function App() {
  const { dark, toggleTheme } = useTheme();
  const { lang, fading, toggleLang } = useLang();
  const t = translations[lang];

  useSakana("sakana-root");

  return (
    <div style={{ opacity: fading ? 0 : 1, transition: "opacity 0.2s ease" }}>
      <div id="sakana-root" />

      <Controls
        dark={dark}
        toggleTheme={toggleTheme}
        toggleLang={toggleLang}
        t={t}
      />

      <main style={{ maxWidth: 900, margin: "auto", padding: "84px 24px 60px" }}>
        <Header subtitle={t.subtitle} />
        <Summary t={t} />
        <Contact t={t} />
        <Toolset t={t} />
        <Projects t={t} />
        <Education t={t} />
        <Languages t={t} />
      </main>
    </div>
  );
}
