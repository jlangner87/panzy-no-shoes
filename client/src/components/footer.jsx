import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"

function Footer () {
  return (
    <div className="footer">
        <div>
          <h3>Contact</h3>
          <p className="business-info">email: something@email.com</p>
          <p className="business-info">phone: (123)123-1234</p>
        </div>
        <div className="copyright">
          <p>©2023 Joshua Langner WebDev · All Rights Reserved</p>
        </div>
        <div>
        <div className='icon-row2'>
            <div>
              <a href="https://www.facebook.com">
                <img className='social-icon2' src={facebook} alt="facebook logo" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com">
                <img className='social-icon2' src={instagram} alt="instagram logo" />
              </a>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Footer