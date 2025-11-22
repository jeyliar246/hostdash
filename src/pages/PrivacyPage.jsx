import { useNavigate } from 'react-router-dom'
import './PrivacyPage.css'

function PrivacyPage() {
  const navigate = useNavigate()

  const sections = [
    {
      title: '1. Information We Collect',
      content: 'We collect information that you provide directly to us, including when you create an account, create a listing, make a booking, or contact us for support. This may include your name, email address, phone number, payment information, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our platform.'
    },
    {
      title: '2. How We Use Your Information',
      content: 'We use the information we collect to: provide, maintain, and improve our services; process transactions and send related information; send you technical notices and support messages; respond to your comments and questions; monitor and analyze trends and usage; personalize and improve your experience; and detect, prevent, and address technical issues and fraudulent activity.'
    },
    {
      title: '3. Information Sharing and Disclosure',
      content: 'We do not sell your personal information. We may share your information in the following circumstances: with service providers who perform services on our behalf; when you make a booking or transaction (we share necessary information between hosts and guests); if required by law or to protect rights; in connection with a business transfer; and with your consent or at your direction.'
    },
    {
      title: '4. Data Security',
      content: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.'
    },
    {
      title: '5. Your Rights and Choices',
      content: 'You have the right to: access and receive a copy of your personal data; rectify inaccurate or incomplete data; request deletion of your data; object to or restrict processing of your data; and data portability. You can exercise these rights by contacting us at privacy@softlife.com. You can also update your account information directly through your account settings.'
    },
    {
      title: '6. Cookies and Tracking Technologies',
      content: 'We use cookies and similar tracking technologies to track activity on our platform and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.'
    },
    {
      title: '7. Third-Party Links',
      content: 'Our platform may contain links to third-party websites or services that are not owned or controlled by Softlife. We have no control over, and assume no responsibility for, the privacy policies or practices of any third-party sites or services. We encourage you to review the privacy policy of any third-party site you visit.'
    },
    {
      title: '8. Children\'s Privacy',
      content: 'Our service is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.'
    },
    {
      title: '9. Data Retention',
      content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.'
    },
    {
      title: '10. International Data Transfers',
      content: 'Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our platform, you consent to the transfer of your information to these facilities.'
    },
    {
      title: '11. Changes to This Privacy Policy',
      content: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.'
    },
    {
      title: '12. Contact Us',
      content: 'If you have any questions about this Privacy Policy, please contact us at privacy@softlife.com or through our support page.'
    }
  ]

  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <nav className="privacy-nav">
          <div className="logo" onClick={() => navigate('/')}>
            <img src="/logo.png" alt="Softlife" className="logo-icon" />
            <span className="logo-text">Softlife</span>
          </div>
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </nav>
      </header>

      <div className="privacy-container">
        <div className="privacy-hero">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">Last updated: January 2025</p>
        </div>

        <div className="privacy-content">
          <p className="privacy-intro">
            At Softlife, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. 
            Please read this policy carefully to understand our practices regarding your personal data.
          </p>

          {sections.map((section, index) => (
            <div key={index} className="privacy-section">
              <h2 className="section-title">{section.title}</h2>
              <p className="section-content">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="privacy-footer-links">
          <button className="footer-link" onClick={() => navigate('/support')}>Support</button>
          <button className="footer-link" onClick={() => navigate('/terms')}>Terms and Conditions</button>
          <button className="footer-link" onClick={() => navigate('/')}>Home</button>
        </div>
      </div>

      <footer className="privacy-footer">
        <p>© 2025 Softlife. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default PrivacyPage

