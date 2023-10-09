import InstaFeeds from "./instaFeed"
import flourish from "../assets/flourish.png"
function Gallery () {
  return (
    <div className="section">
      <h1>Products</h1>
      <img className="flourish" src={flourish}/>
      <div className="content-block">
        <h2>Bath Bombs & More</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non. Tellus in metus vulputate eu. Donec enim diam vulputate ut pharetra. Enim ut sem viverra aliquet eget sit amet tellus cras. Enim ut tellus elementum sagittis vitae et leo duis ut. Donec massa sapien faucibus et molestie ac feugiat sed. In hac habitasse platea dictumst. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Sit amet commodo nulla facilisi nullam vehicula. Felis bibendum ut tristique et egestas.</p>
      </div>
      <div className="content-block">
        <h2>Soul Guides</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non. Tellus in metus vulputate eu. Donec enim diam vulputate ut pharetra. Enim ut sem viverra aliquet eget sit amet tellus cras. Enim ut tellus elementum sagittis vitae et leo duis ut. Donec massa sapien faucibus et molestie ac feugiat sed. In hac habitasse platea dictumst. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Sit amet commodo nulla facilisi nullam vehicula. Felis bibendum ut tristique et egestas.</p>
      </div>
      <div className="content-block">
        <h2>Take A Look</h2>
        <div className='instagram-display'>
          {/* <InstaFeeds/> */}
        </div>
      </div>
    </div>
  )
}

export default Gallery