import flourish from '../assets/flourish.png'
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import ContactForm from './forms/contact'
import OrderForm from './forms/order'

function Contact () {
  return (
    <div className="section2" id='contact'>
      <h1>Get in Touch</h1>
      <img className="flourish" src={flourish}/>
      <div className='content-block'>
        <OrderForm/>
      </div>
      <div className='content-block'>
        <ContactForm/>
      </div>
      <div className='content-block'>
        <div className='social-container'>
          <h2>Find us on Social Media</h2>
          <div className='icon-row'>
            <div>
              <a href="https://www.facebook.com">
                <img className='social-icon' src={facebook} alt="facebook logo" />
                <h2>Facebook</h2>
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com">
                <img className='social-icon' src={instagram} alt="instagram logo" />
                <h2>Instagram</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact