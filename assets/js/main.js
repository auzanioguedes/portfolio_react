import { menu } from "./menu.js";

menu();

// Array de projetos
const projects = [
  {
    image: "./assets/image/1.png",
    title: "Portfólio HTML, CSS e JS",
    description: "Portfólio profissional desenvolvido com HTML5, CSS3 e JavaScript puro.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "./assets/image/2.png",
    title: "Portfólio React",
    description: "Portfólio profissional desenvolvido com React.",
    tags: ["React"],
  },
];

// Renderiza projetos dinamicamente
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
    <div class="project">
      <img src="${project.image}" alt="${project.title}" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">
        ${project.tags
          .map(
            (tag) =>
              `<span class="tag ${tag.toLowerCase().replace("ã", "a").replace("ç", "c")}">${tag}</span>`
          )
          .join("")}
      </div>
    </div>
  `
    )
    .join("");
}

renderProjects();
