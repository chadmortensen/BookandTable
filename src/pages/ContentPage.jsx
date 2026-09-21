import Footer from '../components/Footer'
import LogoMark from '../components/LogoMark'
import SiteNav from '../components/SiteNav'

export default function ContentPage({ eyebrow, title, children }) {
  return (
    <div>
      <header className="page-header">
        <LogoMark compact />
        <p>{eyebrow}</p>
        <h1>{title}</h1>
      </header>
      <SiteNav />
      <main className="inner-main">
        <article className="prose inner-prose">{children}</article>
      </main>
      <Footer />
    </div>
  )
}
