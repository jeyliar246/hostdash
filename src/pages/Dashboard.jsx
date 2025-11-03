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

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <div>
            <h1>Host Dashboard</h1>
            <p>Welcome back, {profile?.full_name || user.email}</p>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{stats.properties}</div>
            <div className="stat-label">Apartments</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{stats.meals}</div>
            <div className="stat-label">Home Meals</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{stats.events}</div>
            <div className="stat-label">Events</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{stats.cars}</div>
            <div className="stat-label">Luxury Cars</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{stats.services}</div>
            <div className="stat-label">Services</div>
          </div>
        </div>

        <div className="listing-section">
          <h2>Add New Listing</h2>
          <div className="listing-grid">
            {listingTypes.map((type) => (
              <div
                key={type.id}
                className="listing-card"
                onClick={() => navigate(`/list/${type.path}`)}
              >
                <div className="listing-icon">{type.icon}</div>
                <div className="listing-name">{type.name}</div>
                <div className="listing-count">{type.count} listed</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard

