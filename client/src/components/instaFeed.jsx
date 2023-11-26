import ph1 from "../assets/ph1.png"
import ph2 from "../assets/ph2.png"
import ph3 from "../assets/ph3.png"
import ph4 from "../assets/ph4.png"

const InstaFeed = () => {
    return (
        <div className="gallery">
            <h2>Browse our Creations</h2>
            <div className="card-container">
                <div className="gallery-card">
                    <a href="https://www.instagram.com/panzynoshoes/">
                        <img src={ph1} alt="bath bomb sample image" className="gallery-img"/>
                    </a>
                    <p>This is a brief description of the product pulled from IG. It will reflect the caption exactly...</p>
                </div>
                <div className="gallery-card">
                    <a href="https://www.instagram.com/panzynoshoes/">
                        <img src={ph2} alt="bath bomb sample image" className="gallery-img"/>
                    </a>
                    <p>This is a brief description of the product pulled from IG. It will reflect the caption exactly...</p>
                </div>
                <div className="gallery-card">
                    <a href="https://www.instagram.com/panzynoshoes/">
                        <img src={ph3} alt="bath bomb sample image" className="gallery-img"/>
                    </a>
                    <p>This is a brief description of the product pulled from IG. It will reflect the caption exactly...</p>
                </div>
                <div className="gallery-card">
                    <a href="https://www.instagram.com/panzynoshoes/">
                        <img src={ph4} alt="bath bomb sample image" className="gallery-img"/>
                    </a>
                    <p>This is a brief description of the product pulled from IG. It will reflect the caption exactly...</p>
                </div>
            </div>
        </div>
    );
}

export default InstaFeed;