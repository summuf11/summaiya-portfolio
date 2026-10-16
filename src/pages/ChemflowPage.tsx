import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Menu, X, Dna, LineChart, TrendingUp, Users } from 'lucide-react'
import logoImg from '../assets/logo.png'
import chemflowHeroBanner from '../assets/chemflow-hero-banner.png'
import userScientist from '../assets/chemflow-user-scientist.png'
import userBioinformatics from '../assets/chemflow-user-bioinformatics.png'
import userInvestor from '../assets/chemflow-user-investor.png'
import userStakeholders from '../assets/chemflow-user-stakeholders.png'
import step1 from '../assets/banavo-step-1.png'
import step2 from '../assets/banavo-step-2.png'
import step3 from '../assets/banavo-step-3.png'
import step4 from '../assets/banavo-step-4.png'
import step5 from '../assets/banavo-step-5.png'
import chemflowUserFlow from '../assets/chemflow-user-flow.png'
import wfAuth from '../assets/chemflow-wf-auth.png'
import wfSearch from '../assets/chemflow-wf-search.png'
import wfProfile from '../assets/chemflow-wf-profile.png'
import colorsTypography from '../assets/chemflow-colors-typography.png'
import componentsSystem from '../assets/chemflow-components.png'
import mktLanding from '../assets/chemflow-mkt-landing.png'
import uiAuth from '../assets/chemflow-ui-auth.png'
import uiSearch from '../assets/chemflow-ui-search.png'
import uiProfile from '../assets/chemflow-ui-profile.png'
import './ChemflowPage.css'

export function ChemflowPage() {
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
    'Scientific tools often contain dense and highly technical information.',
    'Researchers need strong information hierarchy and contextual navigation.',
    'Data visualizations must be clear and easy to interpret.',
    'Marketing pages should simplify technical concepts for broader audiences.',
  ]

  const outcomePoints = [
    {
      title: 'SIMPLIFIED SCIENTIFIC WORKFLOWS',
      desc: 'The redesigned application made it easier for researchers to search, analyze, and compare compounds through a more intuitive and structured interface. Clear navigation, contextual actions, and streamlined workflows reduced the effort required to perform complex research tasks. This helped users focus more on scientific exploration and less on navigating the product.',
    },
    {
      title: 'IMPROVED DATA CLARITY',
      desc: 'A stronger visual hierarchy and better-organized layouts helped users understand complex scientific information more quickly. Key metrics, molecular visualizations, and predictive results were presented in a clear and digestible format. This improved readability and enabled faster interpretation of research insights.',
    },
    {
      title: 'STRONGER PRODUCT COMMUNICATION',
      desc: 'The landing page was designed to communicate ChemFlow’s value proposition in a simple and engaging way. It highlighted core capabilities, explained the workflow, and used clear calls to action to guide visitors toward sign-up and product exploration. This created a stronger first impression and improved how the platform was presented to potential customers and stakeholders.',
    },
  ]

  return (
    <div className="chemflow-page-wrapper">
      {/* ==================== Navigation Bar ==================== */}
      <header className="chemflow-navbar">
        <div className="chemflow-container chemflow-nav-container">
          <Link to="/" className="nav-logo" aria-label="Summaiya Fatima Portfolio Home">
            <img src={logoImg} alt="Summaiya Fatima Logo" className="logo-img" />
          </Link>

          <nav>
            <ul className={`chemflow-nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <li>
                <Link to="/" className="chemflow-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/#work" className="chemflow-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  WORK
                </Link>
              </li>
              <li>
                <Link to="/#about" className="chemflow-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  ABOUT ME
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="chemflow-nav-item" onClick={() => setMobileMenuOpen(false)}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="chemflow-mobile-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main className="chemflow-main">
        {/* ==================== Hero Banner ==================== */}
        <section className="chemflow-container chemflow-hero-banner-wrap">
          <div className="chemflow-banner-card">
            <img
              src={chemflowHeroBanner}
              alt="ChemFlow - An AI-based drug discovery platform banner"
              className="chemflow-banner-img"
            />
          </div>

          <div className="chemflow-intro-text">
            <h1 className="chemflow-main-title">ChemFlow — AI-Powered Drug Discovery Platform</h1>
            <h2 className="chemflow-tag-subtitle">AI-POWERED DRUG DISCOVERY PLATFORM</h2>
            <p className="chemflow-body-text">
              ChemFlow is an AI-powered drug discovery platform that helps researchers explore, predict, and optimize
              drug candidates. The project included both a web application for scientific analysis and a marketing website
              to communicate the platform’s value and capabilities.
            </p>
          </div>
        </section>

        {/* ==================== Metadata Strip ==================== */}
        <div className="chemflow-container">
          <div className="chemflow-meta-strip">
            <div className="chemflow-meta-col">
              <span className="chemflow-meta-label">Role</span>
              <span className="chemflow-meta-val">Product Designer</span>
            </div>
            <div className="chemflow-meta-col">
              <span className="chemflow-meta-label">Timeline</span>
              <span className="chemflow-meta-val">Jan 2025 – Nov 2025</span>
            </div>
            <div className="chemflow-meta-col">
              <span className="chemflow-meta-label">Platform</span>
              <span className="chemflow-meta-val">Web Application &amp; Marketing Website</span>
            </div>
          </div>
        </div>

        {/* ==================== Overview & Role & Problem ==================== */}
        <section className="chemflow-container chemflow-narrative-section">
          <div className="chemflow-text-block">
            <h3 className="chemflow-section-heading">PROJECT OVERVIEW</h3>
            <p className="chemflow-body-text">
              ChemFlow is a comprehensive platform that combines predictive modeling, molecular visualization, and
              advanced search to accelerate drug discovery. The application helps researchers analyze complex biological
              data, while the marketing website clearly communicates the product’s capabilities to biotech professionals
              and potential customers.
            </p>
          </div>

          <div className="chemflow-text-block">
            <h3 className="chemflow-section-heading">MY ROLE</h3>
            <p className="chemflow-body-text">
              As the Product Designer, I was responsible for designing both the product application and the marketing
              website. My work included research, user flows, wireframing, UI design, prototyping, and maintaining a
              consistent design system across all touchpoints.
            </p>
          </div>

          <div className="chemflow-text-block">
            <h3 className="chemflow-section-heading">PROBLEM STATEMENT</h3>
            <p className="chemflow-body-text">
              Drug discovery involves highly complex scientific workflows and dense technical data. Researchers need
              intuitive tools that present compounds, proteins, and predictive results clearly. Additionally, the product
              required a marketing website that could explain sophisticated scientific capabilities in a simple and
              compelling way.
            </p>
          </div>

          <div className="chemflow-text-block">
            <h3 className="chemflow-section-heading">GOAL</h3>
            <p className="chemflow-body-text">
              The goal was to simplify complex scientific workflows, improve data clarity, and make advanced research
              tools more accessible. Another objective was to create a marketing website that effectively communicated the
              platform's value proposition and guided users toward requesting a demo.
            </p>
          </div>
        </section>

        {/* ==================== Users Section ==================== */}
        <section className="chemflow-container chemflow-users-section">
          <h3 className="chemflow-users-main-heading">USERS</h3>

          {/* Primary Users Row */}
          <div className="chemflow-user-row">
            <div className="chemflow-user-text-col">
              <h4 className="chemflow-user-subheading">PRIMARY USERS</h4>
              <p className="chemflow-body-text">
                ChemFlow is designed for professionals working at the intersection of drug discovery, computational
                chemistry, and biotechnology research. These users rely on the platform to analyze complex scientific
                data, explore molecular interactions, and generate predictive insights. By combining advanced
                analytics, molecular visualization, and intuitive workflows, ChemFlow helps researchers make faster and
                more informed decisions. The platform is built to reduce the complexity of scientific processes and
                accelerate the discovery of promising drug candidates.
              </p>
            </div>

            <div className="chemflow-user-cards-col">
              {/* Card 1: Drug Discovery Scientist */}
              <div className="chemflow-user-card">
                <div className="chemflow-user-img-wrap">
                  <img src={userScientist} alt="Drug Discovery Scientist" className="chemflow-user-img" />
                </div>
                <div className="chemflow-user-card-content">
                  <div className="chemflow-user-badge">
                    <Dna size={16} />
                  </div>
                  <h5 className="chemflow-user-title">DRUG DISCOVERY SCIENTIST</h5>
                  <p className="chemflow-user-desc">
                    Researchers who explore, test, and validate potential drug candidates by studying their biological activity.
                  </p>
                </div>
              </div>

              {/* Card 2: Bioinformatics Researcher */}
              <div className="chemflow-user-card">
                <div className="chemflow-user-img-wrap">
                  <img src={userBioinformatics} alt="Bioinformatics Researcher" className="chemflow-user-img" />
                </div>
                <div className="chemflow-user-card-content">
                  <div className="chemflow-user-badge">
                    <LineChart size={16} />
                  </div>
                  <h5 className="chemflow-user-title">BIOINFORMATICS RESEARCHES</h5>
                  <p className="chemflow-user-desc">
                    Experts who analyze biological and genomic data to uncover patterns, generate insights.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Users Row */}
          <div className="chemflow-user-row chemflow-user-row-reverse">
            <div className="chemflow-user-cards-col">
              {/* Card 3: Investors */}
              <div className="chemflow-user-card">
                <div className="chemflow-user-img-wrap">
                  <img src={userInvestor} alt="Investors" className="chemflow-user-img" />
                </div>
                <div className="chemflow-user-card-content">
                  <div className="chemflow-user-badge">
                    <TrendingUp size={16} />
                  </div>
                  <h5 className="chemflow-user-title">INVESTORS</h5>
                  <p className="chemflow-user-desc">
                    Assess the platform's market potential, scalability, and business value to support strategic investment decisions.
                  </p>
                </div>
              </div>

              {/* Card 4: Pharma Stakeholders */}
              <div className="chemflow-user-card">
                <div className="chemflow-user-img-wrap">
                  <img src={userStakeholders} alt="Pharma Stakeholders" className="chemflow-user-img" />
                </div>
                <div className="chemflow-user-card-content">
                  <div className="chemflow-user-badge">
                    <Users size={16} />
                  </div>
                  <h5 className="chemflow-user-title">PHARMA STAKEHOLDERS</h5>
                  <p className="chemflow-user-desc">
                    Evaluate how ChemFlow aligns with research goals, drug development pipelines, and organizational objectives.
                  </p>
                </div>
              </div>
            </div>

            <div className="chemflow-user-text-col">
              <h4 className="chemflow-user-subheading">SECONDARY USERS</h4>
              <p className="chemflow-body-text">
                In addition to core scientific users, ChemFlow is also relevant to stakeholders who evaluate the
                platform from a strategic and business perspective. These users focus on the product’s market
                potential, research impact, and long-term scalability. They use ChemFlow to assess how the platform
                aligns with organizational goals, investment opportunities, and partnership possibilities. Their
                feedback and decisions play an important role in driving adoption, securing funding, and expanding the
                platform’s reach within the biotech and pharmaceutical industries.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== Research & Key Findings ==================== */}
        <section className="chemflow-container chemflow-research-section">
          <div className="chemflow-text-block">
            <h3 className="chemflow-section-heading">RESEARCH &amp; UNDERSTANDING</h3>
            <p className="chemflow-body-text">
              To understand the domain, I studied scientific software interfaces, biotech websites, and molecular
              research workflows.
            </p>
          </div>

          <div className="chemflow-text-block">
            <h3 className="chemflow-section-heading">KEY FINDINGS</h3>
            <ul className="chemflow-findings-list">
              {keyFindings.map((point, index) => (
                <li key={index} className="chemflow-finding-item">
                  <span className="chemflow-bullet" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==================== Design Process ==================== */}
        <section className="chemflow-container chemflow-process-section">
          <h3 className="chemflow-section-heading">DESIGN PROCESS</h3>
          <div className="chemflow-process-grid">
            {designSteps.map((step) => (
              <div key={step.num} className="chemflow-process-card">
                <div className="chemflow-process-icon-wrap">
                  <img src={step.icon} alt={step.title} className="chemflow-step-icon" />
                </div>
                <h4 className="chemflow-process-title">{step.title}</h4>
                <p className="chemflow-process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== User Flow Diagram ==================== */}
        <section className="chemflow-container chemflow-flow-section">
          <h3 className="chemflow-section-heading">USER FLOW</h3>
          <div className="chemflow-flow-card">
            <img src={chemflowUserFlow} alt="ChemFlow User Flow Diagram" className="chemflow-flow-img" loading="lazy" />
          </div>
        </section>

        {/* ==================== Wireframes Section ==================== */}
        <section className="chemflow-container">
          <div className="chemflow-dark-card chemflow-wireframes-card">
            <div className="chemflow-card-header">
              <h3 className="chemflow-dark-title">WIREFRAMES</h3>
              <p className="chemflow-dark-desc">
                Initial wireframes were created to define the information architecture and layout for both the
                application and the marketing website before moving into high-fidelity design.
              </p>
              <h4 className="chemflow-dark-subtitle">DASHBOARDS</h4>
            </div>

            <div className="chemflow-screens-stack">
              <div className="chemflow-screen-frame">
                <img src={wfAuth} alt="Sign In and Sign Up Wireframe Screens" className="chemflow-screen-img" loading="lazy" />
              </div>
              <div className="chemflow-screen-frame">
                <img src={wfSearch} alt="Hello John Doe Research Wireframe Screen" className="chemflow-screen-img" loading="lazy" />
              </div>
              <div className="chemflow-screen-frame">
                <img src={wfProfile} alt="Olivia Rhye Profile & Research Parameters Wireframe Screen" className="chemflow-screen-img" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Colors & Typography Section ==================== */}
        <section className="chemflow-container chemflow-colors-section">
          <div className="chemflow-colors-card">
            <img
              src={colorsTypography}
              alt="ChemFlow Colors and Typography Style Guide"
              className="chemflow-colors-img"
              loading="lazy"
            />
          </div>
        </section>

        {/* ==================== Components Section ==================== */}
        <section className="chemflow-container chemflow-components-section">
          <h3 className="chemflow-section-heading">COMPONENTS</h3>
          <div className="chemflow-components-card">
            <img
              src={componentsSystem}
              alt="ChemFlow Component System & Compound Data Tables"
              className="chemflow-components-img"
              loading="lazy"
            />
          </div>
        </section>

        {/* ==================== Marketing Website Design ==================== */}
        <section className="chemflow-container">
          <div className="chemflow-dark-card chemflow-marketing-card">
            <div className="chemflow-card-header">
              <h3 className="chemflow-dark-title">MARKETING WEBSITE DESIGN</h3>
              <p className="chemflow-dark-desc">
                The ChemFlow landing page was designed to introduce the platform, explain its key capabilities, and
                guide users toward requesting a demo or contacting the team.
              </p>
              <h4 className="chemflow-dark-subtitle">LANDING PAGE</h4>
            </div>

            <div className="chemflow-marketing-screen-frame">
              <img
                src={mktLanding}
                alt="ChemFlow Full Marketing Landing Page Design"
                className="chemflow-screen-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ==================== Application Design (Final UI) ==================== */}
        <section className="chemflow-container chemflow-app-section">
          <div className="chemflow-ui-intro">
            <h3 className="chemflow-section-heading">APPLICATION DESIGN</h3>
            <p className="chemflow-body-text">
              The application was designed to help researchers navigate complex workflows and analyze compounds and
              proteins efficiently.
            </p>
          </div>

          <div className="chemflow-lavender-card chemflow-ui-card">
            <div className="chemflow-card-header">
              <h3 className="chemflow-light-title">APPLICATION DESIGN</h3>
              <p className="chemflow-light-desc">
                The application was designed to help researchers navigate complex workflows and analyze compounds and
                proteins efficiently.
              </p>
              <h4 className="chemflow-light-subtitle">DASHBOARDS</h4>
            </div>

            <div className="chemflow-screens-stack">
              <div className="chemflow-screen-frame">
                <img src={uiAuth} alt="ChemFlow Sign In and Sign Up Final UI Screens" className="chemflow-screen-img" loading="lazy" />
              </div>
              <div className="chemflow-screen-frame">
                <img src={uiSearch} alt="ChemFlow Research Assistant Final UI Screen" className="chemflow-screen-img" loading="lazy" />
              </div>
              <div className="chemflow-screen-frame">
                <img src={uiProfile} alt="ChemFlow Profile & Research Parameters Final UI Screen" className="chemflow-screen-img" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* ==================== Outcome Section ==================== */}
        <section className="chemflow-container chemflow-outcome-section">
          <div className="chemflow-lavender-card chemflow-outcome-card">
            <h3 className="chemflow-outcome-title">OUTCOME</h3>

            <div className="chemflow-outcome-list">
              {outcomePoints.map((item, idx) => (
                <div key={idx} className="chemflow-outcome-item">
                  <div className="chemflow-outcome-heading-wrap">
                    <span className="chemflow-outcome-dot" />
                    <h4 className="chemflow-outcome-heading">{item.title}</h4>
                  </div>
                  <p className="chemflow-outcome-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== Bottom Navigation Buttons ==================== */}
        <section className="chemflow-container chemflow-bottom-nav">
          <button
            type="button"
            className="chemflow-btn-pre"
            onClick={() => navigate('/projects/banavo-ai')}
            aria-label="Previous project: Banavo.ai"
          >
            <ArrowLeft size={16} /> PRE
          </button>

          <button
            type="button"
            className="chemflow-btn-next"
            onClick={() => navigate('/projects/vidhilikhit')}
            aria-label="Next project: Vidhilikhit"
          >
            NEXT <ArrowRight size={16} />
          </button>
        </section>
      </main>

      {/* ==================== Footer ==================== */}
      <footer className="chemflow-footer">
        <div className="chemflow-container chemflow-footer-content">
          <p>© {new Date().getFullYear()} Summaiya Fatima. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default ChemflowPage
