import { useState, useEffect } from "react";
import { Divz } from "./lib/Divz";

import "./App.css";

function App() {
  const [demo, setDemo] = useState<number>(2);

  useEffect(() => randomizeDemo(), []);

  const randomizeDemo = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    setDemo(randomNumber);
  };

  const isActive = (link: number) => {
    return link === demo ? "active" : "";
  };

  return (
    <div className={`app ${demo === 3 ? "dark-mode" : ""}`}>
      <div className="app-header">
        <div className={`demo-list`}>
          <a className={isActive(1)} onClick={() => setDemo(1)}>
            Demo1
          </a>
          <a className={isActive(2)} onClick={() => setDemo(2)}>
            Demo2
          </a>
          <a className={isActive(3)} onClick={() => setDemo(3)}>
            Demo3
          </a>
        </div>
        <h1>divz</h1>
        <small>
          A React component to scroll, swipe and zoom through divs on the 3D
          z-axis
        </small>
        <a className="github" href="https://github.com/lewhunt/divz">
          GitHub
        </a>
      </div>

      {demo === 1 ? <Demo1 /> : demo === 2 ? <Demo2 /> : <Demo3 />}
    </div>
  );
}

function Demo1() {
  return (
    <Divz autoPlay={true} autoPlayDuration={3000} className="demo1">
      <div>
        <h1>1</h1>
      </div>
      <div>
        <h1>2</h1>
      </div>
      <div>
        <h1>3</h1>
      </div>
      <div>
        <h1>4</h1>
      </div>
    </Divz>
  );
}

function Demo2() {
  return (
    <>
      <img className="background" src="./demo2/desert-1101123_1920.jpg" />

      <Divz
        className="demo2"
        autoPlay={true}
        isExpanded={false}
        onIndexChange={(i) => console.log("divz selected index: ", i)}
        onPlaying={(i) => console.log("divz playing: ", i)}
      >
        <div>
          <img src="./demo2/desert-1101123_1920.jpg" />
        </div>

        <div>
          <img src="./demo2/desert-1916882_1920.jpg" />
        </div>

        <div>
          <img src="./demo2/camels-4134934_1920.jpg" />
        </div>

        <div>
          <img src="./demo2/namibia-2049203_1920.jpg" />
        </div>
      </Divz>
    </>
  );
}

function Demo3() {
  return (
    <>
      <video autoPlay playsInline loop muted className="background">
        <source
          src="./demo3/star-stars-night-space-light-121702.mp4"
          type="video/mp4"
        />
      </video>

      <Divz autoPlay={true} className="demo3" isDarkMode={true}>
        <div>
          <img src="./demo3/astronaut-4106766_1280.jpg" />
        </div>

        <div>
          <img src="./demo3/astronaut-6052199_1280.jpg" />
        </div>

        <div>
          <img src="./demo3/plane-5462276_1280.jpg" />
        </div>

        <div>
          <video autoPlay playsInline loop muted>
            <source
              src="./demo3/space-ship-magic-purple-sci-fi-53601.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </Divz>
    </>
  );
}

export default App;
