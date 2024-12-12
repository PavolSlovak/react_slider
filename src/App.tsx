import { useEffect, useState } from "react";
import "./App.css";
import { sliderImages } from "./assets/sliderImages";
import SliderContent from "./components/SliderContent";
import Dots from "./components/Dots";
import Arrows from "./components/Arrows";

function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const len = sliderImages.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <div className="slider-container">
        <SliderContent activeIndex={activeIndex} sliderImages={sliderImages} />

        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />

        <Dots
          activeIndex={activeIndex}
          sliderImages={sliderImages}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>
    </>
  );
}

export default App;
