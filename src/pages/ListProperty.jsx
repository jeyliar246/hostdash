import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../config/supabase'
import './ListProperty.css'

function ListProperty({ user }) {
  const { type } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    state: '',
    city: '',
    // Apartment specific
    bedrooms: '',
    beds: '',
    baths: '',
    guests: '',
    // Meal specific
    cuisine: '',
    meal_type: '',
    // Event specific
    event_date: '',
    event_type: '',
    // Car specific
    make: '',
    model: '',
    year: '',
    capacity: '',
    // Service specific
    service_type: '',
    hourly_rate: '',
  })

  const typeConfig = {
    apartment: {
      title: 'List Apartment',
      table: 'properties',
      fields: ['title', 'description', 'price', 'location', 'state', 'city', 'bedrooms', 'beds', 'baths', 'guests'],
      category: 'rooms',
      hostField: 'host_id',
    },
    meal: {
      title: 'List Home Meal',
      table: 'meals',
      fields: ['name', 'description', 'price', 'location', 'state', 'city', 'cuisine', 'meal_type'],
      category: 'homemeals',
      hostField: 'chef_id',
    },
    event: {
      title: 'List Event',
      table: 'events',
      fields: ['name', 'description', 'price', 'location', 'state', 'city', 'event_date', 'event_type'],
      category: 'eventtickets',
      hostField: 'organizer_id',
    },
    car: {
      title: 'List Luxury Car',
      table: 'luxury_cars',
      fields: ['make', 'model', 'year', 'price_per_day', 'location', 'state', 'city', 'capacity'],
      category: 'luxurycars',
      hostField: 'owner_id',
    },
    service: {
      title: 'List Service',
      table: 'services',
      fields: ['title', 'description', 'hourly_rate', 'location', 'state', 'city', 'service_type'],
      category: 'services',
      hostField: 'provider_id',
    },
  }

  const config = typeConfig[type] || typeConfig.apartment

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const dataToInsert = {
        [config.hostField]: user.id,
      }

      // Map form fields to database fields
      config.fields.forEach((field) => {
        if (field === 'name' && formData.title) {
          dataToInsert[field] = formData.title
        } else if (field === 'price_per_day' && formData.price) {
          dataToInsert[field] = parseFloat(formData.price)
        } else if (field === 'hourly_rate' && formData.hourly_rate) {
          dataToInsert[field] = parseFloat(formData.hourly_rate)
        } else if (formData[field]) {
          if (['price', 'bedrooms', 'beds', 'baths', 'guests', 'year', 'capacity'].includes(field)) {
            dataToInsert[field] = parseFloat(formData[field])
          } else {
            dataToInsert[field] = formData[field]
          }
        }
      })

      // Add category for properties
      if (config.category) {
        dataToInsert.category = config.category
      }

      const { data, error: insertError } = await supabase
        .from(config.table)
        .insert([dataToInsert])
        .select()
        .single()

      if (insertError) throw insertError

      setSuccess(`${config.title.replace('List ', '')} listed successfully!`)
      setTimeout(() => {
        navigate('/dashboard')
      }, 2000)
    } catch (err) {
      setError(err.message || 'Failed to create listing')
    } finally {
      setLoading(false)
    }
  }

  const renderField = (field) => {
    const fieldLabels = {
      title: 'Title',
      name: 'Name',
      description: 'Description',
      price: 'Price per Night (₦)',
      price_per_day: 'Price per Day (₦)',
      location: 'Address',
      state: 'State',
      city: 'City',
      bedrooms: 'Bedrooms',
      beds: 'Beds',
      baths: 'Bathrooms',
      guests: 'Max Guests',
      cuisine: 'Cuisine Type',
      meal_type: 'Meal Type',
      event_date: 'Event Date',
      event_type: 'Event Type',
      make: 'Make',
      model: 'Model',
      year: 'Year',
      capacity: 'Seating Capacity',
      service_type: 'Service Type',
      hourly_rate: 'Hourly Rate (₦)',
    }

    if (field === 'description') {
      return (
        <div key={field} className="form-group">
          <label>{fieldLabels[field] || field}</label>
          <textarea
            name={field}
            value={formData[field]}
            onChange={handleChange}
            rows={4}
            placeholder={`Enter ${fieldLabels[field]?.toLowerCase() || field}`}
          />
        </div>
      )
    }

    if (['bedrooms', 'beds', 'baths', 'guests', 'year', 'capacity', 'price', 'price_per_day', 'hourly_rate'].includes(field)) {
      return (
        <div key={field} className="form-group">
          <label>{fieldLabels[field] || field}</label>
          <input
            type="number"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={`Enter ${fieldLabels[field]?.toLowerCase() || field}`}
          />
        </div>
      )
    }

    if (field === 'event_date') {
      return (
        <div key={field} className="form-group">
          <label>{fieldLabels[field] || field}</label>
          <input
            type="datetime-local"
            name={field}
            value={formData[field]}
            onChange={handleChange}
          />
        </div>
      )
    }

    if (field === 'meal_type') {
      return (
        <div key={field} className="form-group">
          <label>{fieldLabels[field] || field}</label>
          <select name={field} value={formData[field]} onChange={handleChange}>
            <option value="">Select meal type</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
        </div>
      )
    }

    if (field === 'cuisine') {
      return (
        <div key={field} className="form-group">
          <label>{fieldLabels[field] || field}</label>
          <select name={field} value={formData[field]} onChange={handleChange}>
            <option value="">Select cuisine</option>
            <option value="Nigerian">Nigerian</option>
            <option value="Continental">Continental</option>
            <option value="Chinese">Chinese</option>
            <option value="Indian">Indian</option>
          </select>
        </div>
      )
    }

    if (field === 'event_type') {
      return (
        <div key={field} className="form-group">
          <label>{fieldLabels[field] || field}</label>
          <select name={field} value={formData[field]} onChange={handleChange}>
            <option value="">Select event type</option>
            <option value="concert">Concert</option>
            <option value="festival">Festival</option>
            <option value="conference">Conference</option>
            <option value="wedding">Wedding</option>
            <option value="party">Party</option>
          </select>
        </div>
      )
    }

    if (field === 'service_type') {
      return (
        <div key={field} className="form-group">
          <label>{fieldLabels[field] || field}</label>
          <select name={field} value={formData[field]} onChange={handleChange}>
            <option value="">Select service type</option>
            <option value="chef">Chef</option>
            <option value="masseuse">Masseuse</option>
            <option value="driver">Driver</option>
            <option value="dj">DJ</option>
            <option value="mc">MC</option>
            <option value="photographer">Photographer</option>
            <option value="dancer">Dancer</option>
            <option value="escort">Escort</option>
            <option value="entertainer">Entertainer</option>
          </select>
        </div>
      )
    }

    return (
      <div key={field} className="form-group">
        <label>{fieldLabels[field] || field}</label>
        <input
          type="text"
          name={field}
          value={formData[field]}
          onChange={handleChange}
          placeholder={`Enter ${fieldLabels[field]?.toLowerCase() || field}`}
        />
      </div>
    )
  }

  return (
    <div className="list-property">
      <header className="list-header">
        <button className="back-button" onClick={() => navigate('/dashboard')}>
          ← Back to Dashboard
        </button>
        <h1>{config.title}</h1>
      </header>

      <main className="list-main">
        <form onSubmit={handleSubmit} className="list-form">
          {config.fields.map((field) => renderField(field))}

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={() => navigate('/dashboard')}>
              Cancel
            </button>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Creating...' : 'Create Listing'}
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default ListProperty

