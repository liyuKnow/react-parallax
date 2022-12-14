import { Parallax } from "react-parallax";
import LivingRoomThree from "../../assets/images/lining_room_1.jpg";
const ImageThree = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={LivingRoomThree}
    strength={800}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="content">
      <span className="img-txt">a trip to Space</span>
    </div>
  </Parallax>
);

export default ImageThree;
