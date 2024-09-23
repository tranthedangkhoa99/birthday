import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import ParticleImage, { forces, Vector } from "react-particle-image";
import ReactHowler from "react-howler";
import Card from "./components/Card";
import Button from "./components/Button";
import soundBirthday from "./assets/birthday-music.mp3";

export default function App() {
  const [show, setShow] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  const src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/645px-Love_Heart_SVG.svg.png";

  useEffect(() => {
    setTimeout(() => {
      setShowBtn(true);
    }, 4000);
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <div className="custom-music">
        <ReactHowler
          src={soundBirthday}
          playing={true}
          loop={true}
          volume={0.5}
          style={{ display: "none" }}
        />
      </div>
      {show && (
        <>
          {showBtn && <Button onClick={() => setShow(false)} className="btn" />}
          <Spline scene="https://prod.spline.design/kQqZt3rwnIIUmjKR/scene.splinecode" />
        </>
      )}
      {!show && (
        <div>
          <Card />
          <ParticleImage
            width={500}
            height={500}
            scale={0.5}
            maxParticles={5000}
            backgroundColor="#111111"
            src={src}
            mouseMoveForce={(x, y) => forces.disturbance(x, y, 6)}
            touchMoveForce={(x, y) => forces.disturbance(x, y, 6)}
            mouseDownForce={(x, y) => forces.disturbance(x, y, 50)}
            particleOptions={{
              mass: () => 40,
              filter: ({ x, y, image }) => {
                const pixel = image.get(x, y);
                return pixel.r === 255;
              },
              color: () => "#ff7785",
              friction: () => 0.15,
              initialPosition: ({ canvasDimensions }) => {
                return new Vector(
                  canvasDimensions.width / 9,
                  canvasDimensions.height / 2
                );
              },
            }}
          />
        </div>
      )}
    </div>
  );
}
