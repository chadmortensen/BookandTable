import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const internalLinks = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Events', '/events'],
]

export default function SiteNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <nav className={`site-nav${isOpen ? ' site-nav--open' : ''}`} aria-label="Primary navigation">
      <div className="nav-inner">
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="nav-links" id="primary-menu">
          {internalLinks.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setIsOpen(false)}>{label}</NavLink>
          ))}
          <a href="#substack" title="Add your Substack URL in SiteNav.jsx" onClick={() => setIsOpen(false)}>Substack</a>
          <a href="#instagram" title="Add your Instagram URL in SiteNav.jsx" onClick={() => setIsOpen(false)}>Instagram</a>
          <NavLink className="nav-cta" to="/join" onClick={() => setIsOpen(false)}>Join Us</NavLink>
        </div>
      </div>
    </nav>
  )
}
