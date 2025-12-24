import Img1 from "../../asssets/images/butterfly.webp";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <h1 className="blue" >Our Gallery</h1>

      <div className="container">
        <img src="https://www.dawnq.com/cdn/shop/articles/640-fields-with-an-infinite-sunflower-a-beautiful-landscape-summer-day.jpg?v=1704439175&width=1600" alt="SunFlower" />

        {/* <br /> */}

        {/* <img src="../asssets/images/butterfly.webp" alt="Blue Butterfly" /> */}
        <img src={Img1} alt="Blue Butterfly" width={500} />

        {/* <br /> */}

        <img src="/images/bf.webp" alt="Black yelloe ButterFly" width={700} />
      </div>
    </>
  )
}

export default Gallery;