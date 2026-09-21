import { NavLink } from 'react-router-dom'

const internalLinks = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Events', '/events'],
]

export default function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <div className="nav-links">
          {internalLinks.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>
          ))}
          <a href="#substack" title="Add your Substack URL in SiteNav.jsx">Substack</a>
          <a href="#instagram" title="Add your Instagram URL in SiteNav.jsx">Instagram</a>
          <NavLink className="nav-cta" to="/join">Join Us</NavLink>
        </div>
      </div>
    </nav>
  )
}
