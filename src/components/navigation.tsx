import React from "react";
import styled from "styled-components";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";

const Wrapper = styled.div`
  display: block;
  padding: 1rem;
  width: 300px;
  background-color: #000;
  opacity: 0.7;
`;

const List = styled.ul`
  list-style: none;
`;

const Button = styled.div`
  position: absolute;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  font-size: 15px;
  transform: translateY(-50%);
  left: ${(props) => props.side === "prev" && 5}px;
  right: ${(props) => props.side === "next" && 5}px;
`;
type NavigationProps = {
  handleClickPrev: () => void;
  handleClicknext: () => void;
};
function Navigation({ handleClickPrev, handleClicknext }: NavigationProps) {
  return (
    <>
      <Button side="prev" onClick={handleClickPrev}>
        <HiArrowNarrowLeft className="left" />
      </Button>
      <Button side="next" onClick={handleClicknext}>
        <HiArrowNarrowRight className="right" />
      </Button>
    </>
  );
}
export default Navigation;
