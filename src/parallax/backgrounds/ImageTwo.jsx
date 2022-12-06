import { Parallax } from "react-parallax";
import LivingRoomTwo from "../../assets/images/lining_room_1.jpg";
const ImageTwo = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={LivingRoomTwo}
    strength={800}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="content">
      <span className="img-txt">a trip to Space</span>
    </div>
  </Parallax>
);

export default ImageTwo;
