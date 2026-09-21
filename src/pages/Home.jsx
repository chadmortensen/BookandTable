import HomeContent from '../content/home.mdx'
import Footer from '../components/Footer'
import LogoMark from '../components/LogoMark'
import SiteNav from '../components/SiteNav'

export default function Home() {
  return (
    <div>
      <header className="hero">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <LogoMark />
          <h1>Book <span>&amp;</span> Table</h1>
          <p className="hero-kicker">Read deeply. Gather warmly.</p>
        </div>
      </header>
      <SiteNav />
      <main>
        <section className="welcome-section">
          <div className="section-label">You’re invited</div>
          <article className="prose home-prose"><HomeContent /></article>
          <div className="flourish" aria-hidden="true">✦</div>
        </section>
        <section className="feature-strip" aria-label="Book and Table experiences">
          <div className="feature-card feature-card--blue">
            <span>01</span><h2>Read</h2><p>Slow down with stories that stay with you.</p>
          </div>
          <div className="feature-card feature-card--yellow">
            <span>02</span><h2>Gather</h2><p>Share a table, a meal and a thoughtful conversation.</p>
          </div>
          <div className="feature-card feature-card--pink">
            <span>03</span><h2>Wander</h2><p>Step away from the everyday and return renewed.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
