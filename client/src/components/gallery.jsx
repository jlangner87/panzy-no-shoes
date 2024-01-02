import InstaFeeds from "./instaFeed"
import flourish from "../assets/flourish.png"
import downArrow from "../assets/downIcon.png"
import bbomb from "./forms/formAssets/bbomb.png"
import sscrub from "./forms/formAssets/sscrub.png"
import sguide from "./forms/formAssets/sguide.png"
import lotion from "./forms/formAssets/lotion.png"
import priceLotion from "../assets/pricing-lotion.png"
import priceSugar from "../assets/pricing-sugar.png"
import priceBomb from "../assets/pricing-bomb.png"
import priceShareBox from "../assets/pricing-sharebox.png"
import priceSampleBox from "../assets/pricing-samplebox.png"
import warning from "../assets/warning.png"

function Gallery () {
  return (
    <div className="section" id="products">
      <h1>Our Products</h1>
      <img className="flourish" src={flourish}/>
      <div className="content-block">
        <h2>Bath Bombs & More</h2>
        <p>Indulge in a luxurious pampering experience with our exquisite handmade artisanal bath bombs, sugar scrubs, and lotions.</p>
        <br/>
        <p>Crafted with care, our products feature a harmonious blend of nourishing sweet almond oil, signature essential oil blends, real cane sugar, and vibrant colors.</p>
        <br/>
        <img src={bbomb} alt="" className="title-img"/>
        <h2>Bath Bombs</h2>
        <br />
        <p>Immerse yourself in the soothing embrace of our <h3>Bath Bombs</h3> as they effervesce and release captivating fragrances, turning your bath into a retreat to the spa.</p>
        <br/>
        <img src={priceBomb} alt="" className="price-img"/>
        <img src={priceShareBox} alt="" className="price-img"/>
        <img src={priceSampleBox} alt="" className="price-img"/>
        <br />
        <img className="flourish2" src={flourish}/>
        <img src={sscrub} alt="" className="title-img"/>
        <h2>Sugar Scrubs</h2>
        <br />
        <p>Our <h3>Sugar Scrubs</h3>, enriched with sweet almond oil, provide gentle exfoliation, leaving your skin irresistibly soft and radiant.</p>
        <br/>
        <img src={priceSugar} alt="" className="price-img"/>
        <br />
        <img className="flourish2" src={flourish}/>
        <img src={lotion} alt="" className="title-img"/>
        <br />
        <h2>Lotions</h2>
        <br />
        <p>Complement your routine with our small batch <h3>Lotions</h3>, carefully curated for its velvety texture and luxurious feel, leaving your skin deeply moisturized. </p>
        <br/>
        <p>Elevate your self-care routine with the artistry of our meticulously crafted bath essentials, each one a testament to quality and the joy of indulgence.</p>
        <p>Treat yourself or a loved one to a sensory escape that revitalizes the body and uplifts the spirit.</p>
        <br />
        <img src={priceLotion} alt="" className="price-img"/>
        <br />
        <img className="flourish2" src={flourish}/>
        <br />
      </div>
      <div className="content-block">
      <img src={sguide} alt="" className="title-img"/>
        <h2>Soul Guides</h2>
        <p>Embark on a transformative journey of self-discovery with our exquisite <h3>Soul Guide</h3> a bespoke, made-to-order book that unveils the mysteries of your existence through the lens of Numerology, Astrology, and Human Design.</p>
        <br/>
        <p>Immerse yourself in the beauty of personalized insights, as each page unfolds the tapestry of your unique birth charts, providing profound revelations about your life and personality.</p>
        <br/>
        <p>This intricately crafted guide serves as a treasure trove of wisdom, offering a deep reading into the core of your being and tracing the path your soul has walked from the very beginning. With meticulous attention to detail, our Soul Guide is not just a book; it's a sacred journey, a mirror reflecting the essence of who you are.</p>
        <br/>
        <p>Elevate your self-awareness, embrace your authenticity, and navigate life with a newfound clarity. Order your Soul Guide today and illuminate the extraordinary story that is uniquely, beautifully, and authentically yours.</p>
        <img className="flourish2" src={flourish}/>
      </div>
      <div className="content-block">
        <div className='instagram-display'>
          <InstaFeeds/>
          <img src={warning} alt="" className="warning"/>
        </div>
      </div>
      <a href="#contact" smooth className="nav-link">Keep scrolling to see it all...<img  className="nav-img" src={downArrow} alt="chevron pointing down" /></a>            
    </div>
  )
}

export default Gallery