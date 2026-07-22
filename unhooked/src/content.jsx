import { createRoot } from "react-dom/client";
import App from "./App";
import "./content.css";

function removeApp() {
    const root = document.getElementById("my-react-root");
    if (root) {
        root.remove();
    }
}

function inject() {

    // Home/Search/Shorts -> remove app
    if (!window.location.pathname.startsWith("/watch")) {
        removeApp();
        return;
    }

    const secondary = document.querySelector(
    "ytd-watch-flexy #secondary"
);

    if (!secondary) {
        setTimeout(inject, 300);
        return;
    }

    if (document.getElementById("my-react-root")) return;

    const root = document.createElement("div");
    root.id = "my-react-root";

    root.style.width = "100%";
root.style.height = "100vh";

secondary.replaceChildren(root);

    createRoot(root).render(<App />);
}

inject();

document.addEventListener("yt-navigate-finish", () => {
    removeApp();
    inject();
});