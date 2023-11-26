import downArrow from "../assets/downIcon.png"

function Header () {
  return (
    <div className="header">
      <h1>Panzy No Shoes</h1>
      <h2>Luxury Aromatherapy Products</h2>
      <a href="#about" smooth className="nav-link">Continue to pure bliss...<img  className="nav-img" src={downArrow} alt="chevron pointing down" /></a>
    </div>
  )
}

export default Header