function toggleTheme() {
    document.body.classList.toggle("light");
}

/* Typing Animation */
const roles = [
    "Java Developer",
    "Web Developer",
    "Junior Software Engineer",
    "Problem Solver"
];

let i = 0, j = 0;
const text = document.getElementById("typing-text");

function type() {
    if (j < roles[i].length) {
        text.textContent += roles[i][j++];
        setTimeout(type, 80);
    } else {
        setTimeout(erase, 1200);
    }
}

function erase() {
    if (j > 0) {
        text.textContent = roles[i].substring(0, --j);
        setTimeout(erase, 50);
    } else {
        i = (i + 1) % roles.length;
        setTimeout(type, 300);
    }
}

type();
