import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  const navigate = useNavigate()

  const categories = [
    { id: 'apartment', name: 'Apartments', icon: '🏠', description: 'List your property and earn passive income' },
    { id: 'meal', name: 'Home Meals', icon: '🍲', description: 'Share your culinary skills' },
    { id: 'event', name: 'Events', icon: '🎫', description: 'Promote your events' },
    { id: 'car', name: 'Luxury Cars', icon: '🚗', description: 'Rent out your premium vehicles' },
    { id: 'service', name: 'Services', icon: '🔧', description: 'Offer your professional services' },
  ]

  const benefits = [
    {
      icon: '👥',
      title: '50,000+ Monthly Users',
      description: 'Reach a massive audience of active users looking for your listings'
    },
    {
      icon: '💰',
      title: 'Earn More Money',
      description: 'Set your own prices and maximize your earning potential'
    },
    {
      icon: '⚡',
      title: 'Fast & Easy Listing',
      description: 'Create listings in minutes with our simple dashboard'
    },
    {
      icon: '📱',
      title: 'Mobile & Web Access',
      description: 'Manage your listings anywhere, anytime from any device'
    },
    {
      icon: '🔒',
      title: 'Secure Payments',
      description: 'Get paid safely and on time through our secure system'
    },
    {
      icon: '📊',
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
            <span className="logo-icon">🏠</span>
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
                <div className="category-icon">{category.icon}</div>
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
                <div className="benefit-icon">{benefit.icon}</div>
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
            <span className="logo-icon">🏠</span>
            <span className="logo-text">Softlife</span>
          </div>
          <p className="footer-text">© 2025 Softlife. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

