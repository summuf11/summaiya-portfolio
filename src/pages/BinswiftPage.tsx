import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react'
import './BinswiftPage.css'

// Cropped visual assets from Figma
import binswiftHeroBanner from '../assets/binswift-hero-banner.png'
import binswiftOverviewPhone from '../assets/binswift-overview-phone.png'
import binswiftCitizenLightDark from '../assets/binswift-citizen-light-dark.png'
import binswiftColorsTypography from '../assets/binswift-colors-typography.png'
import binswiftWfShowcase from '../assets/binswift-wf-showcase.png'
import binswiftUiLightShowcase from '../assets/binswift-ui-light-showcase.png'
import binswiftUiDarkShowcase from '../assets/binswift-ui-dark-showcase.png'

// Reused step icons
import stepIcon1 from '../assets/banavo-step-1.png'
import stepIcon2 from '../assets/banavo-step-2.png'
import stepIcon3 from '../assets/banavo-step-3.png'
import stepIcon4 from '../assets/banavo-step-4.png'
import stepIcon5 from '../assets/banavo-step-5.png'

const designProcessSteps = [
  {
    num: 1,
    title: 'Discover',
    desc: 'Researched users, workflows, and business goals.',
    icon: stepIcon1,
  },
  {
    num: 2,
    title: 'Define',
    desc: 'Clarified problems and set design objectives.',
    icon: stepIcon2,
  },
  {
    num: 3,
    title: 'Ideate',
    desc: 'Explored concepts, user flows, and layouts.',
    icon: stepIcon3,
  },
  {
    num: 4,
    title: 'Design',
    desc: 'Created polished and scalable UI screens.',
    icon: stepIcon4,
  },
  {
    num: 5,
    title: 'Test',
    desc: 'Gathered feedback and iterated on the design.',
    icon: stepIcon5,
  },
]

export function BinswiftPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="binswift-page-wrapper">
      {/* ==================== Navigation Bar ==================== */}
      <header className="binswift-navbar">
        <div className="binswift-container binswift-nav-container">
          <Link to="/" className="binswift-nav-brand">
            <span className="binswift-logo-title">SUMMAIYA FATIMA</span>
            <span className="binswift-logo-subtitle">PRODUCT DESIGNER</span>
          </Link>

          <nav>
            <ul className={`binswift-nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <li>
                <Link to="/" className="binswift-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#work" className="binswift-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  Work
                </Link>
              </li>
              <li>
                <Link to="/#about" className="binswift-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="binswift-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <a href="mailto:summaiyafatima.design@gmail.com" className="binswift-nav-cta">
            LET'S TALK <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            className="binswift-mobile-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ==================== Main Content ==================== */}
      <main>
        {/* ==================== Hero Banner & Title ==================== */}
        <section className="binswift-hero-section">
          <div className="binswift-container">
            {/* Vibrant Hero Banner Card with Tilted Phones */}
            <div className="binswift-hero-banner-wrap">
              <img
                src={binswiftHeroBanner}
                alt="BinSwift Smart Recycling & Scrap Collection Platform Banner"
                className="binswift-hero-banner-img"
              />
            </div>

            {/* Title & Introduction */}
            <div className="binswift-title-block">
              <h1 className="binswift-main-title">
                BinSwift — Smart Recycling &amp; Scrap Collection Platform
              </h1>
              <div className="binswift-purple-subtitle">DUAL MOBILE APP EXPERIENCE</div>
              <p className="binswift-body-intro">
                BinSwift is a smart scrap collection platform designed to simplify doorstep recycling through two mobile
                applications: the Citizen App and the Agent App. The project includes intuitive pickup booking,
                collection management, request tracking, and Light and Dark theme experiences..
              </p>
            </div>

            {/* Primary Metadata Strip */}
            <div className="binswift-meta-strip">
              <div className="binswift-meta-col">
                <span className="binswift-meta-label">Role</span>
                <span className="binswift-meta-value">Product Designer</span>
              </div>
              <div className="binswift-meta-col">
                <span className="binswift-meta-label">Timeline</span>
                <span className="binswift-meta-value">May 2026 – Present</span>
              </div>
              <div className="binswift-meta-col">
                <span className="binswift-meta-label">Platform</span>
                <span className="binswift-meta-value">Mobile Applications — Citizen App &amp; Agent App</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Project Overview ==================== */}
        <section className="binswift-split-section">
          <div className="binswift-container">
            <div className="binswift-split-grid">
              <div className="binswift-split-content">
                <h2 className="binswift-section-title">PROJECT OVERVIEW</h2>

                <div>
                  <h3 className="binswift-app-subhead">BINSWIFT — CITIZEN APP</h3>
                  <p className="binswift-text-desc" style={{ marginTop: '8px' }}>
                    <strong>Doorstep Recycling Experience :</strong> An intuitive mobile experience that helps
                    citizens schedule scrap pickups, select recyclable materials, manage pickup requests, track
                    collection status, and monitor their environmental impact.
                  </p>
                  <p className="binswift-feature-tags" style={{ marginTop: '6px' }}>
                    Key features: Pickup scheduling · Scrap categories · Request tracking · My Impact · Digital receipts
                  </p>
                </div>

                <div>
                  <h3 className="binswift-app-subhead">BINSWIFT — AGENT APP</h3>
                  <p className="binswift-text-desc" style={{ marginTop: '8px' }}>
                    <strong>Collection &amp; Operations Experience :</strong> A mobile experience for collection
                    agents to manage assigned pickups, follow collection workflows, update request statuses, and support
                    the doorstep scrap collection process..
                  </p>
                  <p className="binswift-feature-tags" style={{ marginTop: '6px' }}>
                    Key features: Assigned pickups · Collection workflow · Request status updates · Operational task
                    management
                  </p>
                </div>
              </div>

              {/* Overview Phone Mockup */}
              <div className="binswift-side-card">
                <img
                  src={binswiftOverviewPhone}
                  alt="BinSwift Citizen & Agent Doorstep Recycling Experience"
                  className="binswift-side-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Secondary Metadata Strip */}
            <div className="binswift-meta-strip" style={{ marginTop: '48px', marginBottom: '32px' }}>
              <div className="binswift-meta-col">
                <span className="binswift-meta-label">Project</span>
                <span className="binswift-meta-value">BinSwift</span>
              </div>
              <div className="binswift-meta-col">
                <span className="binswift-meta-label">Applications</span>
                <span className="binswift-meta-value">Citizen &amp; Agent</span>
              </div>
              <div className="binswift-meta-col">
                <span className="binswift-meta-label">Design modes</span>
                <span className="binswift-meta-value">Light &amp; Dark</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Problem Statement & Goal ==================== */}
        <section className="binswift-narrative-section">
          <div className="binswift-container">
            <div className="binswift-narrative-block">
              <h2 className="binswift-section-title">PROBLEM STATEMENT</h2>
              <p className="binswift-text-desc" style={{ marginTop: '12px' }}>
                Scrap collection can be inconvenient when users struggle to schedule pickups, track requests, and
                understand collection statuses. Collection agents also need a clear interface to manage pickups, verify
                scrap materials, and update actual collected weights. Additionally, both applications require consistent
                and readable interfaces across Light and Dark themes.
              </p>
            </div>

            <div className="binswift-narrative-block">
              <h2 className="binswift-section-title">GOAL</h2>
              <p className="binswift-text-desc" style={{ marginTop: '12px' }}>
                The goal was to simplify scrap pickup scheduling, improve request tracking, and streamline collection
                workflows for citizens and agents. Another objective was to create a consistent, user-friendly design
                across Light and Dark modes, making the BinSwift experience clear, accessible, and efficient.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== Citizen App — Light & Dark Mode ==================== */}
        <section className="binswift-split-section">
          <div className="binswift-container">
            <div className="binswift-split-grid">
              <div className="binswift-split-content">
                <h2 className="binswift-section-title">CITIZEN APP — LIGHT &amp; DARK MODE</h2>
                <p className="binswift-text-desc">
                  The Citizen App is designed to provide a seamless recycling experience, allowing users to create
                  profiles, explore the home dashboard, select scrap materials, schedule pickups, and confirm requests.
                  It also enables citizens to view request history, track pickups in real time, access pickup
                  completion details and digital receipts, manage profiles and saved addresses, and monitor their
                  environmental impact. Both Light and Dark modes maintain a consistent, intuitive, and visually clear
                  experience across all screens.
                </p>
              </div>

              {/* Citizen Light & Dark Phone Card */}
              <div className="binswift-side-card">
                <img
                  src={binswiftCitizenLightDark}
                  alt="BinSwift Citizen App Light and Dark Mode Side-by-Side"
                  className="binswift-side-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Design System & Interactions ==================== */}
        <section className="binswift-narrative-section">
          <div className="binswift-container">
            <div className="binswift-narrative-block">
              <h2 className="binswift-section-title">DESIGN SYSTEM &amp; INTERACTIONS</h2>
              <p className="binswift-text-desc" style={{ marginTop: '12px' }}>
                The BinSwift design system ensures a consistent experience across Light and Dark modes through carefully
                selected color tokens, typography, spacing, icons, and reusable UI components. Consistent navigation
                and interaction patterns help users move seamlessly through the applications, while form validation,
                feedback states, and request-status indicators provide clear guidance at every step. Interactive
                prototypes demonstrate the complete user journeys for both citizens and collection agents.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== Design Process ==================== */}
        <section className="binswift-process-section">
          <div className="binswift-container">
            <h2 className="binswift-section-title">DESIGN PROCESS</h2>

            <div className="binswift-process-grid">
              {designProcessSteps.map((step) => (
                <div key={step.num} className="binswift-process-card">
                  <div className="binswift-process-icon-wrap">
                    <img src={step.icon} alt={step.title} className="binswift-process-icon-img" />
                  </div>
                  <h3 className="binswift-process-step-title">{step.title}</h3>
                  <p className="binswift-process-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== Wireframes (Black Container) ==================== */}
        <section className="binswift-container">
          <div className="binswift-dark-container">
            <div className="binswift-dark-header">
              <h2 className="binswift-dark-title">WIREFRAMES</h2>
              <p className="binswift-dark-desc">
                Wireframing helped define the layout, structure, and navigation of the BinSwift Citizen and Agent Apps.
                Low-fidelity wireframes were created to organize key features, simplify user flows, and ensure a
                seamless experience before moving to high-fidelity UI design.
              </p>
              <h3 className="binswift-dark-subtitle">SCREENS</h3>
            </div>

            <div className="binswift-showcase-frame">
              <img
                src={binswiftWfShowcase}
                alt="BinSwift Low-Fidelity Mobile App Wireframes"
                className="binswift-showcase-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ==================== Colors & Typography ==================== */}
        <section className="binswift-colors-section">
          <div className="binswift-container">
            <div className="binswift-colors-card">
              <img
                src={binswiftColorsTypography}
                alt="BinSwift Design System: Colors & Typography"
                className="binswift-colors-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ==================== Application Design (Lavender Container) ==================== */}
        <section className="binswift-container">
          <div className="binswift-lavender-container">
            <div className="binswift-lavender-header">
              <h2 className="binswift-lavender-title">APPLICATION DESIGN</h2>
              <p className="binswift-lavender-desc">
                The application design focused on creating intuitive, user-friendly interfaces for both the BinSwift
                Citizen App and Agent App. High-fidelity screens were designed with consistent typography, colors,
                reusable components, and Light and Dark themes to ensure a seamless user experience.
              </p>
              <h3 className="binswift-lavender-subtitle">SCREENS</h3>
            </div>

            <div className="binswift-ui-stack">
              {/* Light Mode Screens Showcase */}
              <div className="binswift-showcase-frame">
                <img
                  src={binswiftUiLightShowcase}
                  alt="BinSwift High-Fidelity Mobile UI Screens - Light Mode"
                  className="binswift-showcase-img"
                  loading="lazy"
                />
              </div>

              {/* Dark Mode Screens Showcase */}
              <div className="binswift-showcase-frame">
                <img
                  src={binswiftUiDarkShowcase}
                  alt="BinSwift High-Fidelity Mobile UI Screens - Dark Mode"
                  className="binswift-showcase-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Outcome Section ==================== */}
        <section className="binswift-outcome-section">
          <div className="binswift-container">
            <div className="binswift-outcome-card">
              <h2 className="binswift-outcome-title">OUTCOME</h2>
              <p className="binswift-outcome-text">
                The BinSwift project delivers a consistent and user-friendly experience for citizens and collection
                agents through intuitive workflows and Light and Dark themes. The design simplifies scrap pickup
                booking, improves request tracking, and streamlines collection activities, supporting a smoother and
                more accessible recycling experience.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== Bottom Navigation ==================== */}
        <section className="binswift-container binswift-bottom-nav">
          <button
            type="button"
            className="binswift-btn-pre"
            onClick={() => navigate('/projects/vidhilikhit')}
            aria-label="Previous project: Vidhilikhit"
          >
            <ArrowLeft size={16} /> PRE
          </button>
        </section>
      </main>

      {/* ==================== Footer ==================== */}
      <footer className="binswift-footer">
        <div className="binswift-container binswift-footer-content">
          <p>© {new Date().getFullYear()} Summaiya Fatima. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default BinswiftPage
