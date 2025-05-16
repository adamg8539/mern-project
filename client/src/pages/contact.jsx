import NavBar from '../components/nav_bar/nav_bar';
import './style.css';

function ContactPage() {
  return (
    <div className="contact_page">
      <NavBar />
      <div className='contact_page_data'>
        <h2>Feel free to contact me using my email</h2>
        <p>adamghule@gmail.com</p>
      </div>
    </div>
  )
}

export default ContactPage;