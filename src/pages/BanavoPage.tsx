import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Menu, X } from 'lucide-react'
import logoImg from '../assets/logo.png'
import banavoHeroLaptop from '../assets/banavo-hero-laptop.png'
import step1 from '../assets/banavo-step-1.png'
import step2 from '../assets/banavo-step-2.png'
import step3 from '../assets/banavo-step-3.png'
import step4 from '../assets/banavo-step-4.png'
import step5 from '../assets/banavo-step-5.png'
import wfLoyal from '../assets/banavo-wf-loyal.png'
import wfRfm from '../assets/banavo-wf-rfm.png'
import wfGrid from '../assets/banavo-wf-grid.png'
import uiLoyal from '../assets/banavo-ui-loyal.png'
import uiRfm from '../assets/banavo-ui-rfm.png'
import uiGrid from '../assets/banavo-ui-grid.png'
import './BanavoPage.css'

export function BanavoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const designSteps = [
    {
      num: 1,
      title: 'Discover',
      desc: 'Researched users, workflows, and business goals.',
      icon: step1,
    },
    {
      num: 2,
      title: 'Define',
      desc: 'Clarified problems and set design objectives.',
      icon: step2,
    },
    {
      num: 3,
      title: 'Ideate',
      desc: 'Explored concepts, user flows, and layouts.',
      icon: step3,
    },
    {
      num: 4,
      title: 'Design',
      desc: 'Created polished and scalable UI screens.',
      icon: step4,
    },
    {
      num: 5,
      title: 'Test',
      desc: 'Gathered feedback and iterated on the design.',
      icon: step5,
    },
  ]

  const keyFindings = [
    'Users prefer clean and minimal dashboards.',
    'Important metrics should be visible instantly.',
    'Too much data creates confusion.',
    'Visual hierarchy improves readability.',
  ]

  const outcomePoints = [
    {
      title: 'IMPROVED DASHBOARD READABILITY',
      desc: 'The redesigned interface introduced a clear visual hierarchy, better spacing, and modular card layouts to organize large volumes of analytics data. This made key metrics, trends, and insights easier to scan and understand, allowing users to quickly focus on the most important information.',
    },
    {
      title: 'SIMPLIFIED ANALYTICS WORKFLOWS',
      desc: 'The experience was restructured to help marketing teams move seamlessly from reviewing performance metrics to exploring customer segments and generating actionable insights. By reducing unnecessary complexity and improving navigation, the design enabled faster decision-making and a more efficient workflow.',
    },
    {
      title: 'ENHANCED USER EXPERIENCE',
      desc: 'The final solution delivered a clean and intuitive dashboard experience that reduced cognitive load and made complex data feel approachable. Consistent components, thoughtful interactions, and responsive layouts created a more user-friendly and scalable product for day-to-day use.',
    },
  ]

  return (
    <div className="banavo-page-wrapper">
      {/* ==================== Navigation Bar ==================== */}
      <header className="banavo-navbar">
        <div className="banavo-container banavo-nav-container">
          <Link to="/" className="nav-logo" aria-label="Summaiya Fatima Portfolio Home">
            <img src={logoImg} alt="Summaiya Fatima Logo" className="logo-img" />
          </Link>

          <nav>
            <ul className={`banavo-nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <li>
                <Link to="/" className="banavo-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/#work" className="banavo-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  WORK
                </Link>
              </li>
              <li>
                <Link to="/#about" className="banavo-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  ABOUT ME
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="banavo-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="banavo-mobile-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main className="banavo-main">
        {/* ==================== Hero Section ==================== */}
        <section className="banavo-hero-section">
          <div className="banavo-container banavo-hero-grid">
            <div className="banavo-hero-content">
              <h1 className="banavo-hero-title">Banavo.ai</h1>
              <h2 className="banavo-hero-subtitle">AI MARKETING ASSISTANT</h2>
              <p className="banavo-hero-desc">
                An AI-powered marketing assistant designed for e-commerce businesses to simplify analytics, customer
                insights, and campaign performance tracking through a clean and intuitive dashboard experience.
              </p>
            </div>

            <div className="banavo-hero-image-wrapper">
              <img
                src={banavoHeroLaptop}
                alt="Banavo.ai Web Dashboard Mockup on Laptop"
                className="banavo-hero-laptop-img"
              />
            </div>
          </div>
        </section>

        {/* ==================== Metadata Strip ==================== */}
        <div className="banavo-container">
          <div className="banavo-meta-strip">
            <div className="banavo-meta-col">
              <span className="banavo-meta-label">Role</span>
              <span className="banavo-meta-val">Product Designer</span>
            </div>
            <div className="banavo-meta-col">
              <span className="banavo-meta-label">Timeline</span>
              <span className="banavo-meta-val">Feb 2023 - Dec 2024</span>
            </div>
            <div className="banavo-meta-col">
              <span className="banavo-meta-label">Platform</span>
              <span className="banavo-meta-val">Web Dashboard</span>
            </div>
          </div>
        </div>

        {/* ==================== Project Overview Content ==================== */}
        <section className="banavo-container banavo-overview-section">
          <div className="banavo-text-block">
            <h3 className="banavo-section-heading">PROJECT OVERVIEW</h3>
            <p className="banavo-body-text">
              Banavo.ai is an AI-powered marketing platform built for e-commerce businesses to help teams analyze
              customer behavior, track campaign performance, and make smarter business decisions using data-driven
              insights.
            </p>
            <p className="banavo-body-text">
              The goal was to simplify complex analytics and create a dashboard experience that feels clean, organized,
              and easy to understand.
            </p>
          </div>

          <div className="banavo-text-block">
            <h3 className="banavo-section-heading">MY ROLE</h3>
            <p className="banavo-body-text">
              As the Product Designer, I was responsible for designing the user interface and improving the overall
              dashboard experience. My work included wireframing, layout planning, maintaining design system consistency,
              creating responsive UI solutions, and building interactive prototypes for better usability and user flow.
            </p>
          </div>

          <div className="banavo-text-block">
            <h3 className="banavo-section-heading">PROBLEM STATEMENT</h3>
            <p className="banavo-body-text">
              Marketing teams often struggle to understand large amounts of customer and campaign data spread across
              multiple tools and dashboards. The existing workflow lacked clarity, making decision-making slow and
              overwhelming.
            </p>
          </div>

          <div className="banavo-text-block">
            <h3 className="banavo-section-heading">GOAL</h3>
            <p className="banavo-body-text">
              The main goal of the project was to simplify complex analytics and improve dashboard readability through a
              clean and structured interface. The design focused on creating better visual hierarchy, helping teams make
              faster decisions, and building a scalable design system for a more consistent user experience.
            </p>
          </div>

          {/* ==================== Design Process ==================== */}
          <div className="banavo-text-block banavo-process-block">
            <h3 className="banavo-section-heading">DESIGN PROCESS</h3>
            <div className="banavo-process-grid">
              {designSteps.map((step) => (
                <div key={step.num} className="banavo-process-card">
                  <div className="banavo-process-icon-wrap">
                    <img src={step.icon} alt={step.title} className="banavo-step-icon" />
                  </div>
                  <h4 className="banavo-process-title">{step.title}</h4>
                  <p className="banavo-process-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== Research & Understanding ==================== */}
          <div className="banavo-text-block">
            <h3 className="banavo-section-heading">RESEARCH &amp; UNDERSTANDING</h3>
            <p className="banavo-body-text">
              Before starting the design process, I researched modern SaaS and analytics dashboards to understand how
              users interact with large amounts of data.
            </p>
          </div>

          {/* ==================== Key Findings ==================== */}
          <div className="banavo-text-block">
            <h3 className="banavo-section-heading">KEY FINDINGS</h3>
            <ul className="banavo-findings-list">
              {keyFindings.map((point, index) => (
                <li key={index} className="banavo-finding-item">
                  <span className="banavo-bullet" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==================== Wireframes Section ==================== */}
        <section className="banavo-container">
          <div className="banavo-dark-card banavo-wireframes-card">
            <div className="banavo-card-header">
              <h3 className="banavo-dark-title">WIREFRAMES</h3>
              <p className="banavo-dark-desc">
                Initial wireframes were created to organize dashboard data and improve information hierarchy before
                moving into high-fidelity UI design.
              </p>
              <h4 className="banavo-dark-subtitle">DASHBOARDS</h4>
            </div>

            <div className="banavo-screens-stack">
              <div className="banavo-screen-frame">
                <img
                  src={wfLoyal}
                  alt="Loyal Segment Analysis Wireframe"
                  className="banavo-screen-img"
                  loading="lazy"
                />
              </div>
              <div className="banavo-screen-frame">
                <img
                  src={wfRfm}
                  alt="RFM AI Chat Wireframe"
                  className="banavo-screen-img"
                  loading="lazy"
                />
              </div>
              <div className="banavo-screen-frame">
                <img
                  src={wfGrid}
                  alt="Customer ID & Order View Wireframes"
                  className="banavo-screen-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Final UI Screens Section ==================== */}
        <section className="banavo-container banavo-ui-section">
          {/* Section Heading above card */}
          <div className="banavo-ui-intro">
            <h3 className="banavo-section-heading">FINAL UI SCREENS</h3>
            <p className="banavo-body-text">
              The final interface focuses on simplicity, readability, and efficient data visualization to help
              marketing teams quickly understand important insights.
            </p>
          </div>

          {/* Lavender Card Container */}
          <div className="banavo-lavender-card banavo-ui-card">
            <div className="banavo-card-header">
              <h3 className="banavo-light-title">FINAL UI SCREENS</h3>
              <p className="banavo-light-desc">
                The final interface focuses on simplicity, readability, and efficient data visualization to help
                marketing teams quickly understand important insights.
              </p>
              <h4 className="banavo-light-subtitle">DASHBOARDS</h4>
            </div>

            <div className="banavo-screens-stack">
              <div className="banavo-screen-frame">
                <img
                  src={uiLoyal}
                  alt="Loyal Segment Analysis Final UI Screen"
                  className="banavo-screen-img"
                  loading="lazy"
                />
              </div>
              <div className="banavo-screen-frame">
                <img
                  src={uiRfm}
                  alt="RFM AI Chat Final UI Screen"
                  className="banavo-screen-img"
                  loading="lazy"
                />
              </div>
              <div className="banavo-screen-frame">
                <img
                  src={uiGrid}
                  alt="Customer ID & Order View Final UI Screens"
                  className="banavo-screen-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Outcome Section ==================== */}
        <section className="banavo-container banavo-outcome-section">
          <div className="banavo-lavender-card banavo-outcome-card">
            <h3 className="banavo-outcome-title">OUTCOME</h3>

            <div className="banavo-outcome-list">
              {outcomePoints.map((item, idx) => (
                <div key={idx} className="banavo-outcome-item">
                  <div className="banavo-outcome-heading-wrap">
                    <span className="banavo-outcome-dot" />
                    <h4 className="banavo-outcome-heading">{item.title}</h4>
                  </div>
                  <p className="banavo-outcome-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== Bottom Navigation Buttons ==================== */}
        <section className="banavo-container banavo-bottom-nav">
          <button
            type="button"
            className="banavo-btn-back"
            onClick={() => navigate('/#work')}
            aria-label="Back to projects"
          >
            <ArrowLeft size={16} /> BACK
          </button>

          <button
            type="button"
            className="banavo-btn-next"
            onClick={() => navigate('/projects/chemflow')}
            aria-label="Next project: ChemFlow"
          >
            NEXT <ArrowRight size={16} />
          </button>
        </section>
      </main>

      {/* ==================== Footer ==================== */}
      <footer className="banavo-footer">
        <div className="banavo-container banavo-footer-content">
          <p>© {new Date().getFullYear()} Summaiya Fatima. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default BanavoPage
