import { useEffect } from "react";
import sakanaImg from "../assets/saber.webp";

export function useSakana(rootId) {
    useEffect(() => {
        const cssId = "sakana-css";
        if (!document.getElementById(cssId)) {
            const link = document.createElement("link");
            link.id = cssId;
            link.rel = "stylesheet";
            link.href = "https://cdn.jsdelivr.net/npm/sakana-widget@2.7.0/lib/sakana.min.css";
            document.head.appendChild(link);
        }

        const init = () => {
            const root = document.getElementById(rootId);
            if (!root || !window.SakanaWidget) return;
            root.innerHTML = "";
            const char = window.SakanaWidget.getCharacter("takina");
            char.image = sakanaImg;
            window.SakanaWidget.registerCharacter("custom", char);
            new window.SakanaWidget({ character: "custom", draggable: true, controls: false }).mount(`#${rootId}`);
        };

        const scriptId = "sakana-js";
        if (window.SakanaWidget) {
            init();
        } else if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://cdn.jsdelivr.net/npm/sakana-widget@2.7.0/lib/sakana.min.js";
            script.onload = init;
            document.body.appendChild(script);
        }
    }, [rootId]);
}