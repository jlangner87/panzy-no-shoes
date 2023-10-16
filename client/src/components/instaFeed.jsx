import ph1 from "../assets/placeholder1.png"
import ph2 from "../assets/placeholder2.png"
import ph3 from "../assets/placeholder3.png"
import ph4 from "../assets/placeholder4.png"

const InstaFeed = () => {
    return (
        <div className="gallery">
            <h2>Browse our Creations</h2>
            <div className="card-container">
            <div className="gallery-card">
                <img src={ph1} alt="bath bomb sample image" className="gallery-img"/>
                <p>This is a brief description of the product pulled from IG. It will reflect the caption exactly...</p>
            </div>
            <div className="gallery-card">
                <img src={ph2} alt="bath bomb sample image" className="gallery-img"/>
                <p>This is a brief description of the product pulled from IG. It will reflect the caption exactly...</p>
            </div>
            <div className="gallery-card">
                <img src={ph3} alt="bath bomb sample image" className="gallery-img"/>
                <p>This is a brief description of the product pulled from IG. It will reflect the caption exactly...</p>
            </div>
            <div className="gallery-card">
                <img src={ph4} alt="bath bomb sample image" className="gallery-img"/>
                <p>This is a brief description of the product pulled from IG. It will reflect the caption exactly...</p>
            </div>
            </div>

            
        </div>
    );
}

export default InstaFeed;