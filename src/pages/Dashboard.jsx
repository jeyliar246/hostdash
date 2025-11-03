import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../config/supabase'
import './Dashboard.css'

function Dashboard({ user }) {
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [stats, setStats] = useState({
    properties: 0,
    meals: 0,
    events: 0,
    cars: 0,
    services: 0,
  })

  useEffect(() => {
    loadProfile()
    loadStats()
  }, [user])

  const loadProfile = async () => {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (data) setProfile(data)
  }

  const loadStats = async () => {
    const [properties, meals, events, cars, services] = await Promise.all([
      supabase.from('properties').select('id', { count: 'exact', head: true }).eq('host_id', user.id),
      supabase.from('meals').select('id', { count: 'exact', head: true }).eq('chef_id', user.id),
      supabase.from('events').select('id', { count: 'exact', head: true }).eq('organizer_id', user.id),
      supabase.from('luxury_cars').select('id', { count: 'exact', head: true }).eq('owner_id', user.id),
      supabase.from('services').select('id', { count: 'exact', head: true }).eq('provider_id', user.id),
    ])

    setStats({
      properties: properties.count || 0,
      meals: meals.count || 0,
      events: events.count || 0,
      cars: cars.count || 0,
      services: services.count || 0,
    })
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/auth')
  }

  const listingTypes = [
    { id: 'apartment', name: 'Apartment', icon: '🏠', path: 'apartment', count: stats.properties },
    { id: 'meal', name: 'Home Meal', icon: '🍲', path: 'meal', count: stats.meals },
    { id: 'event', name: 'Event', icon: '🎫', path: 'event', count: stats.events },
    { id: 'car', name: 'Luxury Car', icon: '🚗', path: 'car', count: stats.cars },
    { id: 'service', name: 'Service', icon: '🔧', path: 'service', count: stats.services },
  ]

  const totalListings = stats.properties + stats.meals + stats.events + stats.cars + stats.services

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-info">
            <h1>Host Dashboard</h1>
            <p>Welcome back, {profile?.full_name || user.email}</p>
            <div className="quick-stats">
              <span className="quick-stat-item">
                <strong>{totalListings}</strong> Total Listings
              </span>
              <span className="quick-stat-item">
                <strong>50K+</strong> Active Users
              </span>
            </div>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        {/* Welcome Banner */}
        <div className="welcome-banner">
          <div className="banner-content">
            <h2>Start Earning Today! 🎉</h2>
            <p>Reach 50,000+ active users on Softlife. List your property, service, or meal and start earning passive income.</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-section">
          <h2 className="section-heading">Your Listings Overview</h2>
          <div className="stats-grid">
            <div className="stat-card featured">
              <div className="stat-icon">📊</div>
              <div className="stat-value">{totalListings}</div>
              <div className="stat-label">Total Listings</div>
              <div className="stat-trend">All categories</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏠</div>
              <div className="stat-value">{stats.properties}</div>
              <div className="stat-label">Apartments</div>
              <div className="stat-action" onClick={() => navigate('/list/apartment')}>
                + Add New
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🍲</div>
              <div className="stat-value">{stats.meals}</div>
              <div className="stat-label">Home Meals</div>
              <div className="stat-action" onClick={() => navigate('/list/meal')}>
                + Add New
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎫</div>
              <div className="stat-value">{stats.events}</div>
              <div className="stat-label">Events</div>
              <div className="stat-action" onClick={() => navigate('/list/event')}>
                + Add New
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🚗</div>
              <div className="stat-value">{stats.cars}</div>
              <div className="stat-label">Luxury Cars</div>
              <div className="stat-action" onClick={() => navigate('/list/car')}>
                + Add New
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🔧</div>
              <div className="stat-value">{stats.services}</div>
              <div className="stat-label">Services</div>
              <div className="stat-action" onClick={() => navigate('/list/service')}>
                + Add New
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2 className="section-heading">Why List on Softlife?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">👥</div>
              <h3>50,000+ Users</h3>
              <p>Reach a massive audience actively looking for your listings</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h3>Set Your Price</h3>
              <p>You control your pricing and maximize your earnings</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <h3>Quick Setup</h3>
              <p>Create professional listings in minutes</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📱</div>
              <h3>Mobile Ready</h3>
              <p>Manage everything from any device, anywhere</p>
            </div>
          </div>
        </div>

        {/* Listing Section */}
        <div className="listing-section">
          <h2 className="section-heading">Add New Listing</h2>
          <p className="section-subtitle">Choose a category to start listing</p>
          <div className="listing-grid">
            {listingTypes.map((type) => (
              <div
                key={type.id}
                className="listing-card"
                onClick={() => navigate(`/list/${type.path}`)}
              >
                <div className="listing-icon-wrapper">
                  <div className="listing-icon">{type.icon}</div>
                </div>
                <div className="listing-content">
                  <div className="listing-name">{type.name}</div>
                  <div className="listing-count">{type.count} active {type.count === 1 ? 'listing' : 'listings'}</div>
                </div>
                <div className="listing-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard

