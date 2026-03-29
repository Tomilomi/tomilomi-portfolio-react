import { useState, useEffect } from "react";

function noiseBg(fill, opacity) {
    return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' fill='${encodeURIComponent(fill)}'/%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='${opacity}'/%3E%3C/svg%3E")`;
}

export function useTheme() {
    const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark");
            document.body.style.backgroundImage = noiseBg("#0d0a08", 0.12);
        } else {
            document.body.classList.remove("dark");
            document.body.style.backgroundImage = noiseBg("#e8dcc8", 0.18);
        }
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    const toggleTheme = () => setDark(d => !d);

    return { dark, toggleTheme };
}