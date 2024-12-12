import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Navigation from "./navigation";
import { SlideProps } from "../data";

const Wrapper = styled.div`
  position: relative;
  width: 85%;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
`;
type CarouselProps = {
  images: SlideProps[];
  setWidth: (width: number) => void;
  xPosition: number;
  handleClickPrev: () => void;
  handleClicknext: () => void;
};

function Carousel({
  images,
  setWidth,
  xPosition,
  handleClickPrev,
  handleClicknext,
}: CarouselProps) {
  const slideRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (slideRef.current) {
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [setWidth]);
  return (
    <Wrapper>
      <Slide xPosition={xPosition} ref={slideRef}>
        {images.map((img, i) => (
          <img src={img.imgPath} alt={img.title} key={i} />
        ))}
      </Slide>
      <Navigation
        handleClickPrev={handleClickPrev}
        handleClicknext={handleClicknext}
      />
    </Wrapper>
  );
}
export default Carousel;
