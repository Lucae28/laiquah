document.addEventListener("DOMContentLoaded", () => {
    // Navbar laden
    const navbarContainer = document.getElementById("navbar");
    if (navbarContainer) {
        fetch("navbar.html")
            .then(response => response.text())
            .then(html => {
                navbarContainer.innerHTML = html;
            })
            .catch(err => console.error("Navbar konnte nicht geladen werden:", err));
    }

    // Footer laden
    const footerContainer = document.getElementById("footer");
    if (footerContainer) {
        fetch("footer.html")
            .then(response => response.text())
            .then(html => {
                footerContainer.innerHTML = html;
            })
            .catch(err => console.error("Footer konnte nicht geladen werden:", err));
    }
});
