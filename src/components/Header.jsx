import { useState } from 'react'

const navItems = [
  { label: 'Sobre mim', href: '#s-about' },
  { label: 'Projetos', href: '#s-projects' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => setMenuOpen((prev) => !prev)
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header>
      <div className="grid-layout">
        <nav>
          <button
            className={`mobile-menu${menuOpen ? ' active' : ''}`}
            aria-label="Abrir menu"
            onClick={handleMenuToggle}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </button>

          <a href="#s-home" className="nav-logo">
            Auzanio Guedes Code
          </a>

          <ul className={`nav-list${menuOpen ? ' active' : ''}`}>
            {navItems.map((item, index) => (
              <li
                key={item.href}
                style={{
                  animation: menuOpen
                    ? `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
                    : '',
                }}
              >
                <a href={item.href} onClick={handleLinkClick}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
