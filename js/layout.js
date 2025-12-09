document.addEventListener("DOMContentLoaded", () => {

    // Navbar laden
    fetch("navbar.html")
        .then(res => {
            if (!res.ok) throw new Error("Navbar nicht gefunden");
            return res.text();
        })
        .then(html => {
            const nav = document.getElementById("navbar");
            if (nav) nav.innerHTML = html;
        })
        .catch(err => console.error(err));

    // Footer laden
    fetch("footer.html")
        .then(res => {
            if (!res.ok) throw new Error("Footer nicht gefunden");
            return res.text();
        })
        .then(html => {
            const footer = document.getElementById("footer");
            if (footer) footer.innerHTML = html;
        })
        .catch(err => console.error(err));
});
