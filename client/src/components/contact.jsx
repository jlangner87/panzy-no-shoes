import flourish from '../assets/flourish.png'
function Contact () {
  return (
    <div className="section">
      <h1>Get in Touch</h1>
      <img className="flourish" src={flourish}/>
      <div className='content-block'>
        <h2>Place an Order</h2>
        <p>Plug order form here</p>
      </div>
      <div className='content-block'>
        <h2>Send a Message</h2>
        <p>plug email webform here</p>
      </div>
      <div className='content-block'>
        <h2>Find us on Social Media</h2>
        <p>plug social media links here</p>
      </div>
    </div>
  )
}

export default Contact