import Header from './components/Header.jsx'
import Projects from './components/Projects.jsx'

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="s-home">
          <div className="grid-layout">
            <div id="home">
              <div id="home-container-text">
                <h1>Auzânio Guedes da Silva</h1>
                <h2>
                  Estudante do Curso Superior de Desenvolvimento de Sistemas
                  para Internet pela UESPI.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section id="s-about">
          <div className="grid-layout">
            <div>
              <h2>Como te ajudo</h2>
              <h3>Quem sou</h3>
            </div>

            <div>
              <h4>Transformo ideias em experiências digitais</h4>

              <p>
                Acredito que{' '}
                <b>
                  tecnologia e design caminham juntos para impulsionar negócios
                </b>{' '}
                e conectar marcas ao seu público de forma autêntica.
              </p>

              <p>
                Minha missão é{' '}
                <b>
                  simplificar processos complexos e entregar soluções digitais
                </b>{' '}
                que unem estética, performance e usabilidade. Cada detalhe é
                pensado para valorizar sua marca e criar interfaces que encantam.
              </p>
            </div>
          </div>
        </section>

        <Projects />

        <a
          href="https://api.whatsapp.com/send?phone=558999937292"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="whatsapp-floating-button">
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
              alt="WhatsApp"
            />
          </div>
        </a>

        <footer>
          <article>
            <div className="footer-content">
              <p className="footer-name">Auzânio Guedes</p>
              <p className="footer-copy">© 2025 · auzanioguedes.com</p>
              <div className="footer-links">
                <a
                  href="https://www.instagram.com/auzanioguedes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </article>
        </footer>
      </main>
    </>
  )
}

export default App
