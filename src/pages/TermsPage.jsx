import { useNavigate } from 'react-router-dom'
import './TermsPage.css'

function TermsPage() {
  const navigate = useNavigate()

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using the Softlife platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: '2. Use License',
      content: 'Permission is granted to temporarily use the Softlife platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on the platform; remove any copyright or other proprietary notations from the materials.'
    },
    {
      title: '3. User Accounts',
      content: 'You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password. You must be at least 18 years old to use this service.'
    },
    {
      title: '4. Listing Requirements',
      content: 'All listings must be accurate, complete, and in compliance with applicable laws. You are responsible for ensuring that your listings do not infringe on any third-party rights, including intellectual property rights. We reserve the right to remove any listing that violates our policies.'
    },
    {
      title: '5. Payment Terms',
      content: 'Hosts will receive payments according to our payment schedule after successful transactions. All fees and commissions are clearly disclosed at the time of listing creation. Refunds are subject to our refund policy and the specific terms of each listing.'
    },
    {
      title: '6. Prohibited Activities',
      content: 'You agree not to use the platform to: post false, inaccurate, misleading, or fraudulent content; violate any laws or regulations; infringe on the rights of others; transmit any viruses or malicious code; spam or harass other users; or engage in any activity that could harm the platform or its users.'
    },
    {
      title: '7. Intellectual Property',
      content: 'The platform and its original content, features, and functionality are owned by Softlife and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not use our trademarks or logos without our prior written consent.'
    },
    {
      title: '8. Limitation of Liability',
      content: 'In no event shall Softlife or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the platform, even if Softlife or a Softlife authorized representative has been notified orally or in writing of the possibility of such damage.'
    },
    {
      title: '9. Indemnification',
      content: 'You agree to indemnify and hold harmless Softlife, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to your use of the platform, your listings, or your violation of these terms.'
    },
    {
      title: '10. Modifications to Terms',
      content: 'Softlife reserves the right to revise these terms of service at any time without notice. By using this platform, you are agreeing to be bound by the then current version of these terms of service.'
    },
    {
      title: '11. Termination',
      content: 'We may terminate or suspend your account and access to the platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms. Upon termination, your right to use the platform will immediately cease.'
    },
    {
      title: '12. Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of Nigeria, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.'
    }
  ]

  return (
    <div className="terms-page">
      <header className="terms-header">
        <nav className="terms-nav">
          <div className="logo" onClick={() => navigate('/')}>
            <img src="/logo.png" alt="Softlife" className="logo-icon" />
            <span className="logo-text">Softlife</span>
          </div>
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </nav>
      </header>

      <div className="terms-container">
        <div className="terms-hero">
          <h1 className="terms-title">Terms and Conditions</h1>
          <p className="terms-subtitle">Last updated: January 2025</p>
        </div>

        <div className="terms-content">
          <p className="terms-intro">
            Welcome to Softlife. These terms and conditions outline the rules and regulations for the use of our platform. 
            By accessing this platform, we assume you accept these terms and conditions. Do not continue to use Softlife 
            if you do not agree to all of the terms and conditions stated on this page.
          </p>

          {sections.map((section, index) => (
            <div key={index} className="terms-section">
              <h2 className="section-title">{section.title}</h2>
              <p className="section-content">{section.content}</p>
            </div>
          ))}

          <div className="terms-contact">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-content">
              If you have any questions about these Terms and Conditions, please contact us at{' '}
              <a href="mailto:legal@softlife.com" className="contact-link">legal@softlife.com</a>
            </p>
          </div>
        </div>

        <div className="terms-footer-links">
          <button className="footer-link" onClick={() => navigate('/support')}>Support</button>
          <button className="footer-link" onClick={() => navigate('/privacy')}>Privacy Policy</button>
          <button className="footer-link" onClick={() => navigate('/')}>Home</button>
        </div>
      </div>

      <footer className="terms-footer">
        <p>© 2025 Softlife. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default TermsPage

