import img1 from '../../assets/image/1.png'
import img2 from '../../assets/image/2.png'

const projects = [
  {
    image: img1,
    title: 'Portfólio HTML, CSS e JS',
    description:
      'Portfólio profissional desenvolvido com HTML5, CSS3 e JavaScript puro.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    image: img2,
    title: 'Portfólio React',
    description: 'Portfólio profissional desenvolvido com React.',
    tags: ['React'],
  },
]

function ProjectCard({ image, title, description, tags }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`tag ${tag
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/\s+/g, '-')}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="s-projects">
      <div className="grid-layout">
        <div>
          <h3>Projetos</h3>
        </div>

        <section className="projects">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>
      </div>
    </section>
  )
}

export default Projects
