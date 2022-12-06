import { useState } from "react";
import "./App.css";

import { ImageOne } from "./parallax/backgrounds/ImageOne";
import { ImageTwo } from "./parallax/backgrounds/ImageTwo";
import { ImageThree } from "./parallax/backgrounds/ImageThree";
import ContentOne from "./parallax/contents/ContentOne";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ImageOne />
      <ContentOne />
      <ImageTwo />
      <ContentOne />
      <ImageThree />
    </div>
  );
}

export default App;
