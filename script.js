document.querySelectorAll(".doubt").forEach((doubt) => {
    doubt.addEventListener("click", () => {
        doubt.classList.toggle("active");
    });
});

const btnTop = document.getElementById("btnTop");

btnTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

document.addEventListener("scroll", () => {
    if (window.scrollY > 180) {
        btnTop.style.display = "flex";
    } else {
        btnTop.style.display = "none";
    }
});