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
          A React component that lets you stack, swipe and select divs on the 3D
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
      <img
        className="background"
        src="https://image.tmdb.org/t/p/w1280/rRBD8ORo9y34tYkAQJVbn4Ml6tu.jpg"
      />

      <Divz
        className="demo2"
        autoPlay={true}
        isExpanded={false}
        onIndexChange={(i) => console.log("divz selected index: ", i)}
        onPlaying={(i) => console.log("divz playing: ", i)}
      >
        <div>
          <img src="https://image.tmdb.org/t/p/w1280/rRBD8ORo9y34tYkAQJVbn4Ml6tu.jpg" />
        </div>

        <div>
          <img src="https://image.tmdb.org/t/p/w1280/vJGgox2d4HWmm3icilCytCC6RCR.jpg" />
        </div>

        <div>
          <img src="https://image.tmdb.org/t/p/w1280/36q3LejjQbpyhhuMpJN6kALbFtR.jpg" />
        </div>

        <div>
          <img src="https://image.tmdb.org/t/p/w1280/wauiyiVXpdvTvt2CzdSWbYlbaE3.jpg" />
        </div>

        <div>
          <img src="https://image.tmdb.org/t/p/w1280/24Ov8wnusgnzXwjV1eDm0Lzo5da.jpg" />
        </div>

        <div>
          <img src="https://image.tmdb.org/t/p/w1280/uUVQCwBsWdQDMssXv1TRvYKnXgS.jpg" />
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
          src="https://lewhunt.github.io/assets/backdrops/star-stars-night-space-light-121702.mp4"
          type="video/mp4"
        />
      </video>

      <Divz autoPlay={true} className="demo3" isDarkMode={true}>
        <div>
          <img src="https://image.tmdb.org/t/p/w1280/7o07Xkj2T19e9ken5IjAv1GNmBK.jpg" />
        </div>

        <div>
          <img src="https://image.tmdb.org/t/p/w1280/6YroYkBhh0vVfzmMIOXIxmEH0Go.jpg" />
        </div>

        <div>
          <img src="https://image.tmdb.org/t/p/w1280/xvvYUrARXJzOuAbU7Hig5hSF0kz.jpg" />
        </div>

        <div>
          <video autoPlay playsInline loop muted>
            <source
              src="https://lewhunt.github.io/assets/backdrops/space-ship-magic-purple-sci-fi-53601.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </Divz>
    </>
  );
}

export default App;
