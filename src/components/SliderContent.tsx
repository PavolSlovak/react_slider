import { SlideProps } from "../assets/sliderImages";
type SliderContentProps = {
  activeIndex: number;
  sliderImages: SlideProps[];
};
function SliderContent({ activeIndex, sliderImages }: SliderContentProps) {
  return (
    <section>
      {sliderImages.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? `slides active` : `inactive`}
        >
          <img className="slide-image" src={slide.url} alt="" />
          <h2 className="slide-title">{slide.title}</h2>
          <h2 className="slide-text">{slide.description}</h2>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
