/* Theme Toggle */
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

let roleIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function type() {
    if (charIndex < roles[roleIndex].length) {
        typingText.textContent += roles[roleIndex][charIndex++];
        setTimeout(type, 80);
    } else {
        setTimeout(erase, 1200);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = roles[roleIndex].substring(0, --charIndex);
        setTimeout(erase, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 300);
    }
}

type();

/* GitHub Projects Auto Load */
fetch("https://api.github.com/users/venkateshsirivella/repos")
.then(res => res.json())
.then(data => {
    const container = document.getElementById("projects-container");
    data.slice(0,6).forEach(repo => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description available"}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;
        container.appendChild(card);
    });
});
