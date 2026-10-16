import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, Menu, X, Mail } from 'lucide-react'
import logoImg from './assets/logo.png'
import projectBanavo from './assets/project-banavo.png'
import projectChemflow from './assets/project-chemflow.png'
import projectVidhilikhit from './assets/project-vidhilikhit.png'
import projectBinswitch from './assets/project-binswitch.png'
import galleryCharminar from './assets/gallery-charminar.png'
import galleryDesk from './assets/gallery-desk.png'
import gallerySunset from './assets/gallery-sunset.png'
import galleryCity from './assets/gallery-city.png'
import galleryHeadphones from './assets/gallery-headphones.png'
import galleryFashion from './assets/gallery-fashion.png'
import galleryMountains from './assets/gallery-mountains.png'

export function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('home')

  const handleNavClick = (sectionId: string) => {
    setActiveNav(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="portfolio-app">
      {/* ==================== Navigation Bar ==================== */}
      <header className="navbar">
        <div className="portfolio-container nav-container">
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('home')
            }}
          >
            <img src={logoImg} alt="Summaiya Fatima Logo" className="logo-img" />
          </a>

          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <li>
                <a
                  href="#home"
                  className={`nav-item ${activeNav === 'home' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('home')
                  }}
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className={`nav-item ${activeNav === 'work' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('work')
                  }}
                >
                  WORK
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`nav-item ${activeNav === 'about' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('about')
                  }}
                >
                  ABOUT ME
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`nav-item ${activeNav === 'contact' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('contact')
                  }}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main>
        {/* ==================== Hero Section ==================== */}
        <section id="home" className="hero-section">
          <div className="portfolio-container">
            <h1 className="hero-title">Hey, I’m Summaiya Fatima</h1>
            <p className="hero-subtitle">
              Product <span className="highlight-pink">Designer</span> crafting clean &amp; intuitive experiences
            </p>
            <div>
              <a
                href="#contact"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('contact')
                }}
              >
                GET IN TOUCH
              </a>
            </div>
          </div>

          <a
            href="#about-work"
            className="scroll-indicator"
            aria-label="Scroll down"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('about-work')
            }}
          >
            <ChevronDown size={28} />
          </a>
        </section>

        {/* ==================== About My Work Section ==================== */}
        <section id="about-work" className="about-work-section">
          <div className="portfolio-container">
            <h3 className="section-tag">ABOUT MY WORK</h3>
            <h2 className="about-work-headline">
              <span className="highlight-pink">Product Designer</span> based in India. Currently at{' '}
              <span className="bold-white">Appinventiv.</span>
            </h2>
            <p className="about-work-desc">
              With more than 3+ years of experience in designing, I have got a great exposure in{' '}
              <span className="bold-white">B2B, B2C &amp; SaaS</span> products. I have developed my skills in problem
              solving, visual designing and a bit of motion designing too.
            </p>

            {/* 3 Metric Stat Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number-top">1</span>
                <div className="stat-bottom-row">
                  <span className="stat-value">3+</span>
                  <span className="stat-label">Years Of Experience</span>
                </div>
              </div>

              <div className="stat-card">
                <span className="stat-number-top">2</span>
                <div className="stat-bottom-row">
                  <span className="stat-value">100%</span>
                  <span className="stat-label">Dedication</span>
                </div>
              </div>

              <div className="stat-card">
                <span className="stat-number-top">3</span>
                <div className="stat-bottom-row">
                  <span className="stat-value">99</span>
                  <span className="stat-label">Cups Of coffee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Work / Projects Section ==================== */}
        <section id="work" className="work-section">
          <div className="portfolio-container">
            <h2 className="work-section-title">Work</h2>

            <div className="projects-list">
              {/* Project 1: Banavo.ai */}
              <article className="project-item">
                <div className="project-image-wrapper">
                  <Link to="/projects/banavo-ai" aria-label="View Banavo.ai project details">
                    <img
                      src={projectBanavo}
                      alt="Banavo.ai - Marketing Assistant Interface Preview"
                      className="project-card-img"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="project-content">
                  <h3 className="project-title">
                    <Link to="/projects/banavo-ai" style={{ color: 'inherit' }}>
                      BANAVO.AI – MARKETING ASSIST
                    </Link>
                  </h3>
                  <p className="project-desc">
                    An AI-powered marketing assistant designed to help mid-cap e-commerce teams optimize strategy, track
                    performance, and drive smarter campaigns with data-driven insights — all in one intuitive dashboard.
                  </p>
                  <Link to="/projects/banavo-ai" className="btn-view-work">
                    VIEW WORK <ChevronRight size={16} />
                  </Link>
                </div>
              </article>

              {/* Project 2: ChemFlow */}
              <article className="project-item reverse">
                <div className="project-content">
                  <h3 className="project-title">
                    <Link to="/projects/chemflow" style={{ color: 'inherit' }}>
                      CHEMFLOW – AI-POWERED DRUG DISCOVERY PLATFORM
                    </Link>
                  </h3>
                  <p className="project-desc">
                    Designed both the ChemFlow web application and marketing website for an AI-driven drug discovery
                    platform. The product helps researchers explore, predict, and optimize drug candidates through
                    predictive modeling, molecular visualization, and an intuitive user experience.
                  </p>
                  <Link to="/projects/chemflow" className="btn-view-work">
                    VIEW WORK <ChevronRight size={16} />
                  </Link>
                </div>
                <div className="project-image-wrapper">
                  <Link to="/projects/chemflow" aria-label="View ChemFlow project details">
                    <img
                      src={projectChemflow}
                      alt="ChemFlow Drug Discovery Platform Interface Preview"
                      className="project-card-img"
                      loading="lazy"
                    />
                  </Link>
                </div>
              </article>

              {/* Project 3: Vidhilikhit */}
              <article className="project-item">
                <div className="project-image-wrapper">
                  <Link to="/projects/vidhilikhit" aria-label="View Vidhilikhit project details">
                    <img
                      src={projectVidhilikhit}
                      alt="Vidhilikhit Matrimony Platform Interface Preview"
                      className="project-card-img"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="project-content">
                  <h3 className="project-title">
                    <Link to="/projects/vidhilikhit" style={{ color: 'inherit' }}>
                      VIDHILIKHIT MATRIMONY – COMMUNITY-FOCUSED MATCHMAKING PLATFORM
                    </Link>
                  </h3>
                  <p className="project-desc">
                    Designed a trusted matrimonial platform for Brahmin and Lingayat families to discover compatible life
                    partners through verified profiles, advanced filters, and secure membership-based access. The
                    experience simplifies the matchmaking journey while preserving the values of trust, privacy, and
                    tradition.
                  </p>
                  <Link to="/projects/vidhilikhit" className="btn-view-work">
                    VIEW WORK <ChevronRight size={16} />
                  </Link>
                </div>
              </article>

              {/* Project 4: BinSwift */}
              <article className="project-item reverse">
                <div className="project-content">
                  <h3 className="project-title">
                    <Link to="/projects/binswift" style={{ color: 'inherit' }}>
                      BINSWIFT — SMART RECYCLING &amp; SCRAP COLLECTION
                    </Link>
                  </h3>
                  <p className="project-desc">
                    A user-friendly recycling platform featuring Citizen and Agent mobile apps to simplify doorstep scrap
                    pickups, manage collection requests, and track pickup status. Designed with intuitive workflows and
                    Light &amp; Dark themes to deliver a seamless experience for citizens and collection agents.
                  </p>
                  <Link to="/projects/binswift" className="btn-view-work">
                    VIEW WORK <ChevronRight size={16} />
                  </Link>
                </div>
                <div className="project-image-wrapper">
                  <Link to="/projects/binswift" aria-label="View BinSwift project details">
                    <img
                      src={projectBinswitch}
                      alt="BinSwift Recycling & Scrap Collection Mobile Apps Preview"
                      className="project-card-img"
                      loading="lazy"
                    />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ==================== About Me Section ==================== */}
        <section id="about" className="about-me-section">
          <div className="portfolio-container">
            <h3 className="section-tag">ABOUT ME</h3>
            <h2 className="about-me-heading">
              NICE TO MEET YOU, I'M SUMMAIYA. A PRODUCT DESIGNER WITH CLOSE TO 3 YEARS OF EXPERIENCE
            </h2>

            {/* Top 4 Photo Strip */}
            <div className="gallery-row-1">
              <div className="gallery-item">
                <img
                  src={galleryCharminar}
                  alt="Historic illuminated monument at night"
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
              <div className="gallery-item">
                <img
                  src={galleryDesk}
                  alt="Work desk with laptop and stickers"
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
              <div className="gallery-item">
                <img
                  src={gallerySunset}
                  alt="Sunset sky view from rooftop terrace"
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
              <div className="gallery-item">
                <img
                  src={galleryCity}
                  alt="Narrow city architecture street view"
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Lower Split: Bio on Left, Mosaic on Right */}
            <div className="about-split">
              <div className="about-text-content">
                <h3 className="section-tag">A BIT ABOUT ME</h3>
                <p className="about-bio">
                  I am a Product designer who is passionate about creating beautiful and joyful digital experiences.
                  Besides design, I love music, fashion and travelling.
                </p>
              </div>

              <div className="about-photos-mosaic">
                <div className="gallery-item">
                  <img
                    src={galleryHeadphones}
                    alt="Wearing silver headphones"
                    className="gallery-img"
                    loading="lazy"
                  />
                </div>
                <div className="mosaic-col-stacked">
                  <div className="gallery-item">
                    <img
                      src={galleryFashion}
                      alt="Fashion and style aesthetic"
                      className="gallery-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-item">
                    <img
                      src={galleryMountains}
                      alt="Scenic mountain landscape"
                      className="gallery-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Footer / Contact Section ==================== */}
        <footer id="contact" className="footer-section">
          <div className="portfolio-container">
            <h2 className="footer-title">
              <span className="serif-italic">Get</span> in Touch.
            </h2>
            <p className="footer-subtitle">So that we can talk more about...</p>

            <div className="social-links">
              {/* Email */}
              <a
                href="mailto:summaiyafatima@example.com"
                className="social-btn"
                aria-label="Send an email"
                title="Email"
              >
                <Mail size={22} />
              </a>

              {/* Behance */}
              <a
                href="https://www.behance.net"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="Behance Profile"
                title="Behance"
              >
                <svg className="social-icon-svg" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.13 0-5.508-2.14-5.508-5.471 0-3.411 2.502-5.529 5.374-5.529 3.054 0 4.958 2.115 4.958 5.482 0 .324-.038.718-.078.966h-7.69c.125 1.559 1.488 2.459 2.925 2.459 1.411 0 2.29-.691 2.745-1.907h2zm-2.404-3.486c-.156-1.314-1.127-2.072-2.383-2.072-1.373 0-2.327.877-2.529 2.072h4.912zm-13.322-8.514h-8v14h8.043c3.084 0 4.957-1.636 4.957-4.148 0-1.531-.795-2.825-2.228-3.376 1.09-.497 1.838-1.553 1.838-2.842 0-2.247-1.748-3.634-4.61-3.634zm-5.441 2.378h4.922c1.474 0 2.348.647 2.348 1.834 0 1.233-.941 1.884-2.388 1.884h-4.882v-3.718zm0 5.86h5.279c1.696 0 2.658.747 2.658 2.108 0 1.341-.989 2.154-2.658 2.154h-5.279v-4.262z" />
                </svg>
              </a>

              {/* Dribbble */}
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="Dribbble Profile"
                title="Dribbble"
              >
                <svg className="social-icon-svg" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.163 11.025c-.237-.023-2.652-.257-5.184.778-.135-.306-.279-.613-.432-.919 3.011-1.393 4.225-3.086 4.316-3.218 1.029 1.002 1.583 2.115 1.3 3.359zm-2.476-4.697c-.126.155-1.353 1.62-4.186 2.946-1.344-2.463-2.839-4.57-3.003-4.798 1.83-.585 3.829-.441 5.496.486-.307 1.366 1.693 1.366 1.693 1.366zm-9.083-3.774c.164.225 1.678 2.347 3.024 4.823-3.906 1.155-7.464 1.144-7.79 1.143 1.077-2.673 2.99-4.839 4.766-5.966zm-7.986 7.446c.35.002 3.526-.007 7.275-1.077.245.503.475 1.011.688 1.523-4.707 1.488-8.887 4.908-9.043 5.039-1.045-1.542-1.229-3.499-.548-5.485.494-.001 1.628 0 1.628 0zm3.327 7.027c.189-.148 3.844-3.056 8.358-4.484 1.15 2.981 1.62 5.564 1.706 6.096-2.583 1.802-5.834 2.164-8.887 1.196-1.177-.808-1.177-2.808-1.177-2.808zm11.397.987c-.104-.619-.571-2.993-1.664-5.852 2.327-1.048 4.34-.863 4.545-.841-.301 2.825-1.351 5.253-2.881 6.693z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <svg className="social-icon-svg" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            <p className="footer-bottom">© {new Date().getFullYear()} Summaiya Fatima. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Home
