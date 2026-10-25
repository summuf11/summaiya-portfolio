import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Menu, X, Users, Dna, LineChart, TrendingUp } from 'lucide-react'
import logoImg from '../assets/logo.png'
import heroMockup from '../assets/vidhilikhit-hero.png'
import personaPriya from '../assets/vidhilikhit-persona-priya.png'
import personaRajesh from '../assets/vidhilikhit-persona-rajesh.png'
import step1 from '../assets/vidhilikhit-step-1.png'
import step2 from '../assets/vidhilikhit-step-2.png'
import step3 from '../assets/vidhilikhit-step-3.png'
import step4 from '../assets/vidhilikhit-step-4.png'
import step5 from '../assets/vidhilikhit-step-5.png'
import step6 from '../assets/vidhilikhit-step-6.png'
import userFlowImg from '../assets/vidhilikhit-user-flow.png'
import colorsTypographyImg from '../assets/vidhilikhit-colors-typography.png'
import landingFullImg from '../assets/vidhilikhit-landing-full.png'
import dashOverviewImg from '../assets/vidhilikhit-dash-overview.png'
import dashPaymentsImg from '../assets/vidhilikhit-dash-payments.png'
import dashProfilesImg from '../assets/vidhilikhit-dash-profiles.png'
import dashTokensImg from '../assets/vidhilikhit-dash-tokens.png'
import mobileMockupsImg from '../assets/vidhilikhit-mobile-mockups.png'
import './VidhilikhitPage.css'

export function VidhilikhitPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const designSteps = [
    {
      num: '1',
      title: '1. REQUIREMENTS & DESIGN BRIEF',
      desc: 'Defined business goals, target audience, and core platform features. Gathered requirements for profile creation, search, membership, and admin-assisted matchmaking.',
      icon: step1,
      bgClass: 'step-bg-pink',
    },
    {
      num: '2',
      title: '2. UX RESEARCH',
      desc: 'Studied existing matrimonial platforms, analyzed user behavior, and identified key pain points around trust, profile authenticity, and ease of finding suitable matches.',
      icon: step2,
      bgClass: 'step-bg-blue',
    },
    {
      num: '3',
      title: '3. USER FLOW',
      desc: 'Created sitemap, user flow, and content structure to map the journey from registration to profile access, membership purchase, and admin support.',
      icon: step3,
      bgClass: 'step-bg-purple',
    },
    {
      num: '4',
      title: '4. WIREFRAMING & PROTOTYPING',
      desc: 'Designed low-fidelity wireframes and interactive prototypes for onboarding, profile listing, profile details, payment, and dashboard screens.',
      icon: step4,
      bgClass: 'step-bg-peach',
    },
    {
      num: '5',
      title: '5. UI DESIGN & VALIDATION',
      desc: 'Designed clean, responsive interfaces and refined layouts based on usability testing and feedback to improve clarity and trust.',
      icon: step5,
      bgClass: 'step-bg-green',
    },
    {
      num: '6',
      title: '6. FINAL DELIVERY',
      desc: 'Delivered high-fidelity screens, reusable components, and responsive designs for the complete matrimonial website experience.',
      icon: step6,
      bgClass: 'step-bg-lavender',
    },
  ]

  const keyFindings = [
    'Scientific tools often contain dense and highly technical information.',
    'Researchers need strong information hierarchy and contextual navigation.',
    'Data visualizations must be clear and easy to interpret.',
    'Marketing pages should simplify technical concepts for broader audiences.',
  ]

  const outcomePoints = [
    {
      title: 'IMPROVED MATCH DISCOVERY',
      desc: 'The redesigned platform enabled users to quickly find relevant profiles using community-specific filters such as caste, age, education, profession, and location. This significantly reduced the time and effort required to identify compatible matches. Structured search results and concise profile cards made it easier to compare multiple candidates and focus on the most relevant profiles.',
    },
    {
      title: 'INCREASED USER TRUST',
      desc: 'Verified profiles, detailed biodata, and secure membership access helped build confidence in the platform. Users felt more assured about the authenticity and quality of the information provided. Clear verification indicators, privacy-focused design, and admin-assisted support reinforced trust throughout the matchmaking journey.',
    },
    {
      title: 'BETTER USER EXPERIENCE',
      desc: 'Simplified registration, profile browsing, payment, and profile unlocking flows created a smoother and more intuitive experience. The clean interface and logical information hierarchy reduced confusion and improved usability across devices. As a result, both individuals and families could navigate the platform more easily and complete their goals with greater confidence.',
    },
  ]

  return (
    <div className="vidhilikhit-page-wrapper">
      {/* ==================== Navigation Bar ==================== */}
      <header className="vidhilikhit-navbar">
        <div className="vidhilikhit-container vidhilikhit-nav-container">
          <Link to="/" className="nav-logo" aria-label="Summaiya Fatima Portfolio Home">
            <img src={logoImg} alt="Summaiya Fatima Logo" className="logo-img" />
          </Link>

          <nav>
            <ul className={`vidhilikhit-nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <li>
                <Link to="/" className="vidhilikhit-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/#work" className="vidhilikhit-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  WORK
                </Link>
              </li>
              <li>
                <Link to="/#about" className="vidhilikhit-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  ABOUT ME
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="vidhilikhit-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main className="vidhilikhit-main">
        {/* ==================== Hero Section ==================== */}
        <section className="vidhilikhit-hero">
          <div className="vidhilikhit-container vidhilikhit-hero-inner">
            <div className="vidhilikhit-hero-content">
              <h1 className="vidhilikhit-hero-title">Vidhilikhit Matrimony</h1>
              <h2 className="vidhilikhit-hero-subtitle">
                COMMUNITY-FOCUSED MATRIMONIAL PLATFORM FOR BRAHMIN &amp; LINGAYAT FAMILIES
              </h2>
              <p className="vidhilikhit-hero-desc">
                Vidhilikhit is a niche matrimonial platform designed to help individuals and families find compatible life
                partners within Brahmin and Lingayat communities through a secure, trusted, and user-friendly experience.
              </p>
            </div>
            <div className="vidhilikhit-hero-visual">
              <img
                src={heroMockup}
                alt="Vidhilikhit Matrimony Responsive Platform Preview"
                className="vidhilikhit-hero-img"
              />
            </div>
          </div>
        </section>

        {/* ==================== Metadata Strip ==================== */}
        <section className="vidhilikhit-meta-strip">
          <div className="vidhilikhit-container vidhilikhit-meta-grid">
            <div className="vidhilikhit-meta-col">
              <span className="vidhilikhit-meta-label">Role</span>
              <span className="vidhilikhit-meta-value">Product Designer</span>
            </div>
            <div className="vidhilikhit-meta-col">
              <span className="vidhilikhit-meta-label">Timeline</span>
              <span className="vidhilikhit-meta-value">6 weeks</span>
            </div>
            <div className="vidhilikhit-meta-col">
              <span className="vidhilikhit-meta-label">Platform</span>
              <span className="vidhilikhit-meta-value">Responsive Website</span>
            </div>
          </div>
        </section>

        {/* ==================== Narrative Section (Challenge, Goal, Role) ==================== */}
        <section className="vidhilikhit-section vidhilikhit-narrative-section">
          <div className="vidhilikhit-container">
            <div className="vidhilikhit-narrative-block">
              <h3 className="vidhilikhit-subheading">THE CHALLENGE</h3>
              <p className="vidhilikhit-body-text">
                General matrimonial platforms are often overwhelming and lack community-specific filters. Users needed a
                simpler, trustworthy platform with verified profiles and culturally relevant matchmaking.
              </p>
            </div>

            <div className="vidhilikhit-narrative-block">
              <h3 className="vidhilikhit-subheading">OUR GOAL</h3>
              <p className="vidhilikhit-body-text">
                The goal of this project was to simplify the matchmaking journey for Brahmin and Lingayat families by
                building trust through verified profiles, providing community-specific filters, improving profile discovery,
                and increasing user registrations and inquiries.
              </p>
            </div>

            <div className="vidhilikhit-narrative-block">
              <h3 className="vidhilikhit-subheading">MY ROLE</h3>
              <p className="vidhilikhit-body-text">
                As the Product Designer, I was responsible for the end-to-end design process, including user research,
                creating user flows, wireframing, UI design, prototyping, and designing responsive layouts for desktop and
                mobile devices.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== User Personas Section ==================== */}
        <section className="vidhilikhit-section vidhilikhit-personas-section">
          <div className="vidhilikhit-container">
            <h3 className="vidhilikhit-subheading">USER PERSONAS</h3>
            <p className="vidhilikhit-section-lead">
              Understanding the key users to design a meaningful matrimonial experience.
            </p>

            {/* Persona 1: Priya */}
            <div className="persona-card-wrapper">
              <div className="persona-grid">
                {/* Left col: Image & details */}
                <div className="persona-profile-col">
                  <div className="persona-photo-wrapper">
                    <img src={personaPriya} alt="Persona - Priya" className="persona-photo" />
                  </div>
                  <div className="persona-info-table">
                    <div className="info-row">
                      <span className="info-label">AGE:</span>
                      <span className="info-val">27 Years</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Profession:</span>
                      <span className="info-val">Software Engineer</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">LOCATION:</span>
                      <span className="info-val">Bengaluru, India</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Community:</span>
                      <span className="info-val">Brahmin</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Education:</span>
                      <span className="info-val">B.Tech in CSE</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">HOBBIES:</span>
                      <span className="info-val">Reading, Traveling, Classical Music</span>
                    </div>
                  </div>
                </div>

                {/* Right col: Bio, Personality, Pain points, Goals */}
                <div className="persona-details-col">
                  <div className="persona-card-grid">
                    <div className="persona-box bio-box">
                      <h4 className="persona-box-title">Bio</h4>
                      <p className="persona-box-text">
                        Priya is a 27-year-old software engineer who wants to find a compatible life partner within her
                        Brahmin community. She values education, cultural compatibility, and meaningful conversations.
                        She prefers a secure platform where profiles are verified and privacy is respected throughout
                        the matchmaking process.
                      </p>
                    </div>

                    <div className="persona-box personality-box">
                      <h4 className="persona-box-title">Personality</h4>
                      <ul className="persona-bullet-list">
                        <li>Family-Oriented</li>
                        <li>Career-Focused</li>
                        <li>Thoughtful</li>
                        <li>Trust-Conscious</li>
                        <li>Modern Yet Traditional</li>
                      </ul>
                    </div>

                    <div className="persona-box pain-box">
                      <h4 className="persona-box-title">Pain points</h4>
                      <ul className="persona-bullet-list">
                        <li>Too many irrelevant profiles</li>
                        <li>Unverified profile information</li>
                        <li>Privacy concerns</li>
                        <li>Time-consuming search process</li>
                      </ul>
                    </div>

                    <div className="persona-box goals-box">
                      <h4 className="persona-box-title">Goals</h4>
                      <ul className="persona-bullet-list">
                        <li>Find a life partner within her community</li>
                        <li>Connect with verified and genuine profiles</li>
                        <li>Maintain privacy and security</li>
                        <li>Explore meaningful compatibility</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Persona 2: Rajesh */}
            <div className="persona-card-wrapper" style={{ marginTop: '40px' }}>
              <div className="persona-grid">
                {/* Left col: Image & details */}
                <div className="persona-profile-col">
                  <div className="persona-photo-wrapper">
                    <img src={personaRajesh} alt="Persona - Rajesh" className="persona-photo" />
                  </div>
                  <div className="persona-info-table">
                    <div className="info-row">
                      <span className="info-label">AGE:</span>
                      <span className="info-val">55 Years</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Profession:</span>
                      <span className="info-val">Business Owner</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">LOCATION:</span>
                      <span className="info-val">Hyderabad, India</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Community:</span>
                      <span className="info-val">Lingayat</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Role:</span>
                      <span className="info-val">Parent Searching for Daughter</span>
                    </div>
                  </div>
                </div>

                {/* Right col: Bio, Personality, Pain points, Goals */}
                <div className="persona-details-col">
                  <div className="persona-card-grid">
                    <div className="persona-box bio-box">
                      <h4 className="persona-box-title">Bio</h4>
                      <p className="persona-box-text">
                        Rajesh is a 55-year-old business owner searching for a suitable match for his daughter. He wants
                        a trustworthy platform that provides complete profile details, community-specific filters, and
                        easy communication with interested families. His focus is on shared values, family background,
                        and authenticity.
                      </p>
                    </div>

                    <div className="persona-box personality-box">
                      <h4 className="persona-box-title">Personality</h4>
                      <ul className="persona-bullet-list">
                        <li>Responsible</li>
                        <li>Family-Centered</li>
                        <li>Detail-Oriented</li>
                        <li>Practical</li>
                        <li>Trust-Driven</li>
                      </ul>
                    </div>

                    <div className="persona-box pain-box">
                      <h4 className="persona-box-title">Pain points</h4>
                      <ul className="persona-bullet-list">
                        <li>Incomplete profile information</li>
                        <li>Difficult filtering options</li>
                        <li>Concerns about profile authenticity</li>
                        <li>Too many irrelevant matches</li>
                      </ul>
                    </div>

                    <div className="persona-box goals-box">
                      <h4 className="persona-box-title">Goals</h4>
                      <ul className="persona-bullet-list">
                        <li>Find a suitable match for his daughter</li>
                        <li>Access verified and detailed profiles</li>
                        <li>Filter matches based on values and background</li>
                        <li>Communicate with genuine families</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Research & Understanding Section ==================== */}
        <section className="vidhilikhit-section vidhilikhit-research-section">
          <div className="vidhilikhit-container">
            <h3 className="vidhilikhit-subheading">RESEARCH &amp; UNDERSTANDING</h3>
            <p className="vidhilikhit-body-text" style={{ marginBottom: '28px' }}>
              To understand the domain, I studied scientific software interfaces, biotech websites, and molecular
              research workflows.
            </p>

            <h4 className="vidhilikhit-small-heading">KEY FINDINGS</h4>
            <div className="vidhilikhit-findings-grid">
              {keyFindings.map((finding, idx) => (
                <div key={idx} className="vidhilikhit-finding-card">
                  <div className="vidhilikhit-finding-icon">
                    {idx === 0 && <Dna size={22} />}
                    {idx === 1 && <Users size={22} />}
                    {idx === 2 && <LineChart size={22} />}
                    {idx === 3 && <TrendingUp size={22} />}
                  </div>
                  <p className="vidhilikhit-finding-text">{finding}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== Design Process Section ==================== */}
        <section className="vidhilikhit-section vidhilikhit-process-section">
          <div className="vidhilikhit-container">
            <h3 className="vidhilikhit-subheading">DESIGN PROCESS</h3>
            <p className="vidhilikhit-section-lead">
              A structured approach followed to design a user-friendly and trustworthy matrimonial platform.
            </p>

            <div className="vidhilikhit-process-grid">
              {designSteps.map((step) => (
                <div key={step.num} className={`vidhilikhit-process-card ${step.bgClass}`}>
                  <div className="process-card-icon-wrapper">
                    <img src={step.icon} alt="" className="process-icon-img" />
                  </div>
                  <h4 className="process-card-title">{step.title}</h4>
                  <p className="process-card-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== User Flow Section ==================== */}
        <section className="vidhilikhit-section vidhilikhit-userflow-section">
          <div className="vidhilikhit-container">
            <h3 className="vidhilikhit-subheading" style={{ marginBottom: '24px' }}>
              USER FLOW
            </h3>
            <div className="vidhilikhit-flow-wrapper">
              <img
                src={userFlowImg}
                alt="Vidhilikhit Matrimony User Flow Diagram"
                className="vidhilikhit-card-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ==================== Colors & Typography Section ==================== */}
        <section className="vidhilikhit-section vidhilikhit-colors-section">
          <div className="vidhilikhit-container">
            <div className="vidhilikhit-colors-wrapper">
              <img
                src={colorsTypographyImg}
                alt="Vidhilikhit Design System: Colors & Typography"
                className="vidhilikhit-card-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ==================== Final UI Screens Section (Dark Card) ==================== */}
        <section className="vidhilikhit-section vidhilikhit-ui-screens-section">
          <div className="vidhilikhit-container">
            <div className="vidhilikhit-dark-container">
              <div className="vidhilikhit-dark-header">
                <h3 className="vidhilikhit-dark-title">FINAL UI SCREENS</h3>
                <p className="vidhilikhit-dark-desc">
                  The final UI screens were designed to create a clean, intuitive, and trustworthy matrimonial experience.
                  The designs included responsive layouts for the homepage, profile listings, profile details, membership
                  plans, and payment flow, with a strong focus on usability and visual clarity.
                </p>
              </div>

              {/* Screen 1: Full Landing Page */}
              <div className="vidhilikhit-screen-wrapper">
                <img
                  src={landingFullImg}
                  alt="Vidhilikhit Matrimony - Complete Responsive Landing Page UI"
                  className="vidhilikhit-screen-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Outcome Section ==================== */}
        <section className="vidhilikhit-section vidhilikhit-outcome-section">
          <div className="vidhilikhit-container">
            <div className="vidhilikhit-outcome-container">
              <h3 className="vidhilikhit-outcome-title">OUTCOME</h3>

              <div className="vidhilikhit-outcome-list">
                {outcomePoints.map((item, idx) => (
                  <div key={idx} className="vidhilikhit-outcome-item">
                    <div className="vidhilikhit-outcome-header-row">
                      <span className="vidhilikhit-outcome-dot" />
                      <h4 className="vidhilikhit-outcome-heading">{item.title}</h4>
                    </div>
                    <p className="vidhilikhit-outcome-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Bottom Navigation Buttons ==================== */}
        <section className="vidhilikhit-container vidhilikhit-bottom-nav">
          <button
            type="button"
            className="vidhilikhit-btn-pre"
            onClick={() => navigate('/projects/chemflow')}
            aria-label="Previous project: ChemFlow"
          >
            <ArrowLeft size={16} /> PRE
          </button>

          <button
            type="button"
            className="vidhilikhit-btn-next"
            onClick={() => navigate('/projects/binswift')}
            aria-label="Next project: BinSwift"
          >
            NEXT <ArrowRight size={16} />
          </button>
        </section>
      </main>

      {/* ==================== Footer ==================== */}
      <footer className="vidhilikhit-footer">
        <div className="vidhilikhit-container vidhilikhit-footer-content">
          <p>© {new Date().getFullYear()} Summaiya Fatima. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default VidhilikhitPage
