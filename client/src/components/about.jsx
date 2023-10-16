import flourish from "../assets/flourish.png"
import samplePhoto from "../assets/sample-photo.png"
import samplePhoto2 from "../assets/sample-photo2.png"

function About () {
  return (
    <div className="section">
      <h1>About us</h1>
      <img className="flourish" src={flourish}/>
      <div className="content-block">
        <h2>Our history</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non. Tellus in metus vulputate eu. Donec enim diam vulputate ut pharetra. Enim ut sem viverra aliquet eget sit amet tellus cras. Enim ut tellus elementum sagittis vitae et leo duis ut. Donec massa sapien faucibus et molestie ac feugiat sed. In hac habitasse platea dictumst. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Sit amet commodo nulla facilisi nullam vehicula. Felis bibendum ut tristique et egestas.</p>
      </div>
      <div className="content-block">
      <img className="sample" src={samplePhoto2} alt="" />
        <h2>Our mission</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non. Tellus in metus vulputate eu. Donec enim diam vulputate ut pharetra. Enim ut sem viverra aliquet eget sit amet tellus cras. Enim ut tellus elementum sagittis vitae et leo duis ut. Donec massa sapien faucibus et molestie ac feugiat sed. In hac habitasse platea dictumst. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Sit amet commodo nulla facilisi nullam vehicula. Felis bibendum ut tristique et egestas.</p>
      </div>
      <img className="sample" src={samplePhoto} alt="" />
      </div>
  )
}

export default About