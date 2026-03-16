const sections = document.querySelectorAll("[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", () => {

    boxes.forEach(box => {

        const boxTop = box.getBoundingClientRect().top;

        const trigger = window.innerHeight * 0.85;

        if (boxTop < trigger) {
            box.classList.add("show");
        }

    });

});

function animateValue(id, start, end, duration) {

    let obj = document.getElementById(id);
    let range = end - start;
    let stepTime = Math.abs(Math.floor(duration / range));
    let current = start;

    let timer = setInterval(function () {

        current += 1;
        obj.textContent = current;

        if (current == end) {
            clearInterval(timer);
        }

    }, stepTime);

}

animateValue("level", 0, 6, 1000);
animateValue("playersCount", 0, 40, 1500);
animateValue("glory", 0, 1000, 2000);

window.addEventListener("DOMContentLoaded", function () {

    const boxes = document.querySelectorAll(".box");

    window.addEventListener("scroll", function () {

        boxes.forEach(function (box) {

            let top = box.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {
                box.classList.add("show");
            }

        });

    });

});
function toggleMenu() {

    let menu = document.getElementById("navLinks");

    menu.classList.toggle("show");

}