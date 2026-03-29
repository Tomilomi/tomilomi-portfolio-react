import { useState } from "react";

export function useLang() {
    const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
    const [fading, setFading] = useState(false);

    const toggleLang = () => {
        setFading(true);
        setTimeout(() => {
            setLang(l => {
                const next = l === "en" ? "es" : "en";
                localStorage.setItem("lang", next);
                return next;
            });
            setFading(false);
        }, 200);
    };

    return { lang, fading, toggleLang };
}