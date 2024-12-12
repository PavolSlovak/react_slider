import { SlideProps } from "../assets/sliderImages";

type DotsProps = {
  activeIndex: number;
  onclick: (activeIndex: number) => void;
  sliderImages: SlideProps[];
};

function Dots({ activeIndex, onclick, sliderImages }: DotsProps) {
  return (
    <div className="all-dots">
      {sliderImages.map((slide, index) => (
        <span
          key={index}
          className={activeIndex === index ? `dot active-dot` : `dot`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
