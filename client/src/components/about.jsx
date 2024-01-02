import flourish from "../assets/flourish.png"
import samplePhoto from "../assets/sample-photo.png"
import samplePhoto2 from "../assets/sample-photo2.png"
import downArrow from "../assets/downIcon.png"

function About () {
  return (
    <div className="section" id="about">
      <h1>Our Story</h1>
      <img className="flourish" src={flourish}/>
      <div className="content-block">
        <h2>What do we do?</h2>
        <p>Thank you for visiting, and welcome to Panzy No Shoes, where luxury meets self-care! Founded by Angie York, our brand is all about spreading happiness through aromatherapy experiences. With a commitment to promoting self-care, our products are crafted with love and precision, ensuring a blissful escape from the ordinary.</p>
        <br/>
        <p>From our cheerful blends to the whimsically designed packaging, every detail is crafted to add a sprinkle of joy to your daily routine. Embrace the happiness at Panzy No Shoes, where each product is a delightful invitation to create your own oasis of joy and relaxation.</p>
      </div>
      <div className="content-block">
      <img className="sample" src={samplePhoto2} alt="" />
        <h2>Why do we do it?</h2>
        <p>At Panzy No Shoes, we believe in the transformative power of relaxation as the cornerstone of a healthy and joyous life. Our mission is to enhance well-being by providing premium aromatherapy products that inspire moments of tranquility and promote a balanced lifestyle.</p>
        <br/>
        <p>We are dedicated to crafting blends that not only captivate the senses but also serve as therapeutic tools, fostering a serene space where individuals can unwind, recharge, and find solace.</p>
        <br/>
        <p>With a commitment to the belief that relaxation is the key to a happy and healthy life, we aspire to be the catalyst for moments of bliss and rejuvenation, empowering our customers to embrace a life of wellness and vitality.</p>
      </div>
      <img className="sample" src={samplePhoto} alt="" />
      <a href="#products" smooth className="nav-link">Scroll to see it all...<img  className="nav-img" src={downArrow} alt="chevron pointing down" /></a>
      </div>
  )
}

export default About