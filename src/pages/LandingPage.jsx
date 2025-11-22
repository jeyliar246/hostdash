import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  const navigate = useNavigate()

  const categories = [
    { 
      id: 'apartment', 
      name: 'Apartments', 
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80', 
      description: 'List your property and earn passive income' 
    },
    { 
      id: 'meal', 
      name: 'Home Meals', 
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', 
      description: 'Share your culinary skills' 
    },
    { 
      id: 'event', 
      name: 'Events', 
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', 
      description: 'Promote your events' 
    },
    { 
      id: 'car', 
      name: 'Luxury Cars', 
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80', 
      description: 'Rent out your premium vehicles' 
    },
    { 
      id: 'service', 
      name: 'Services', 
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80', 
      description: 'Offer your professional services' 
    },
  ]

  const benefits = [
    {
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80',
      title: '50,000+ Monthly Users',
      description: 'Reach a massive audience of active users looking for your listings'
    },
    {
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80',
      title: 'Earn More Money',
      description: 'Set your own prices and maximize your earning potential'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
      title: 'Fast & Easy Listing',
      description: 'Create listings in minutes with our simple dashboard'
    },
    {
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80',
      title: 'Mobile & Web Access',
      description: 'Manage your listings anywhere, anytime from any device'
    },
    {
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80',
      title: 'Secure Payments',
      description: 'Get paid safely and on time through our secure system'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
      title: 'Analytics Dashboard',
      description: 'Track your performance and optimize your listings'
    },
  ]

  const stats = [
    { number: '50K+', label: 'Monthly Active Users' },
    { number: '10K+', label: 'Active Listings' },
    { number: '95%', label: 'Host Satisfaction' },
    { number: '₦500M+', label: 'Monthly Earnings' },
  ]

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero-section">
        <nav className="hero-nav">
          <div className="logo">
            <img src="/logo.png" alt="Softlife" className="logo-icon" />
            <span className="logo-text">Softlife</span>
          </div>
          <div className="nav-buttons">
            <button className="nav-button login" onClick={() => navigate('/auth')}>
              Sign In
            </button>
            <button className="nav-button signup" onClick={() => navigate('/auth')}>
              Get Started
            </button>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="hero-title">
            Start Earning with <span className="highlight">Softlife</span>
          </h1>
          <p className="hero-subtitle">
            Join thousands of hosts earning passive income. List your properties, services, and more to 50,000+ active users.
          </p>
          <div className="hero-cta">
            <button className="cta-primary" onClick={() => navigate('/auth')}>
              Start Listing Now →
            </button>
            <button className="cta-secondary" onClick={() => navigate('/auth')}>
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-container">
          <h2 className="section-title">What Can You List?</h2>
          <p className="section-subtitle">Choose from multiple categories to maximize your earnings</p>
          
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-image-wrapper">
                  <img src={category.image} alt={category.name} className="category-image" />
                </div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="section-container">
          <h2 className="section-title">Why Choose Softlife?</h2>
          <p className="section-subtitle">The platform built for hosts and service providers</p>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-image-wrapper">
                  <img src={benefit.image} alt={benefit.title} className="benefit-image" />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Start Earning?</h2>
          <p className="cta-text">Join Softlife today and connect with thousands of users</p>
          <button className="cta-button" onClick={() => navigate('/auth')}>
            Create Your Account Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.png" alt="Softlife" className="logo-icon" />
            <span className="logo-text">Softlife</span>
          </div>
          <div className="footer-links">
            <a href="/support" className="footer-link" onClick={(e) => { e.preventDefault(); navigate('/support'); }}>Support</a>
            <a href="/terms" className="footer-link" onClick={(e) => { e.preventDefault(); navigate('/terms'); }}>Terms & Conditions</a>
            <a href="/privacy" className="footer-link" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }}>Privacy Policy</a>
          </div>
          <p className="footer-text">© 2025 Softlife. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

