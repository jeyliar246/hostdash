import { useNavigate } from 'react-router-dom'
import './SupportPage.css'

function SupportPage() {
  const navigate = useNavigate()

  const faqs = [
    {
      question: 'How do I create a listing?',
      answer: 'To create a listing, sign in to your account, go to your dashboard, and click on "List New Property" or select the category you want to list. Fill in the required information, upload images, and submit your listing.'
    },
    {
      question: 'How do I get paid?',
      answer: 'Payments are processed securely through our platform. Once a booking or purchase is confirmed, funds are held securely and released to your account according to our payment schedule. You can view your earnings in the dashboard.'
    },
    {
      question: 'What fees do you charge?',
      answer: 'We charge a small commission fee on successful transactions. The exact percentage varies by category and is clearly displayed when you create your listing. There are no upfront fees to list your property or service.'
    },
    {
      question: 'How do I manage my listings?',
      answer: 'You can manage all your listings from your dashboard. You can edit details, update availability, change pricing, upload new photos, and view analytics for each listing.'
    },
    {
      question: 'What if I have a problem with a booking?',
      answer: 'If you encounter any issues with a booking, please contact our support team immediately. We have a dedicated support system to help resolve disputes and ensure a smooth experience for both hosts and guests.'
    },
    {
      question: 'How do I verify my account?',
      answer: 'Account verification helps build trust with potential customers. You can verify your account by providing identification documents and completing the verification process in your account settings.'
    }
  ]

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@softlife.com'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with our team',
      contact: 'Available 24/7'
    },
    {
      icon: '📞',
      title: 'Phone Support',
      description: 'Call us directly',
      contact: '+234 800 000 0000'
    }
  ]

  return (
    <div className="support-page">
      <header className="support-header">
        <nav className="support-nav">
          <div className="logo" onClick={() => navigate('/')}>
            <img src="/logo.png" alt="Softlife" className="logo-icon" />
            <span className="logo-text">Softlife</span>
          </div>
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </nav>
      </header>

      <div className="support-container">
        <div className="support-hero">
          <h1 className="support-title">How Can We Help You?</h1>
          <p className="support-subtitle">Find answers to common questions or contact our support team</p>
        </div>

        <section className="faq-section">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <h2 className="section-heading">Contact Our Support Team</h2>
          <p className="contact-intro">Can't find what you're looking for? Reach out to us through any of these channels:</p>
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{method.icon}</div>
                <h3 className="contact-title">{method.title}</h3>
                <p className="contact-description">{method.description}</p>
                <p className="contact-info">{method.contact}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="help-section">
          <h2 className="section-heading">Additional Resources</h2>
          <div className="help-links">
            <button className="help-link" onClick={() => navigate('/terms')}>Terms and Conditions</button>
            <button className="help-link" onClick={() => navigate('/privacy')}>Privacy Policy</button>
            <button className="help-link" onClick={() => navigate('/auth')}>Create an Account</button>
          </div>
        </section>
      </div>

      <footer className="support-footer">
        <p>© 2025 Softlife. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default SupportPage

