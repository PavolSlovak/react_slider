import React from "react";
import styled from "styled-components";
import { HiArrowNarrowLeft } from "react-icons";
import { HiArrowNarrowRight } from "react-icons";

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
type ButtonProps = {
  handleClickPrev: () => void;
  handleClicknext: () => void;
};
function Buttons({ handleClickPrev, handleClicknext }: ButtonProps) {
  return (
    <>
      <Wrapper>
        <List></List>
      </Wrapper>
      <Button side="prev" onClick={handleClickPrev}></Button>
      <Button src={HiArrowNarrowRight} side="next" onClick={handleClicknext} />
    </>
  );
}
export default Buttons;
