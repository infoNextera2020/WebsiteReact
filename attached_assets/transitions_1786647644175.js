document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

window.addEventListener("beforeunload", () => {
    document.body.classList.remove("fade-in");
});