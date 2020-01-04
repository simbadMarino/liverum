import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
export const ReaderContainer = styled.div`
  font-size: 16px;
  position: absolute;
  top: ${props => (props.fullscreen ? 0 : 60)}px;
  left: ${props => (props.fullscreen ? 0 : 1)}rem;
  right: ${props => (props.fullscreen ? 0 : 1)}rem;
  bottom: ${props => (props.fullscreen ? 0 : 1)}rem;
  transition: all 0.6s ease;
  ${props => !props.fullscreen && "0 0 5px rgba(0,0,0,.3);"};
`;
export const Bar = styled.header`
  position: absolute;
  top: 10px;
  left: 20px;
  right: 20px;
`;

const Button = styled.button`
  font-family: inherit;
  font-size: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  appearance: none;
  background: none;
`;
export const CloseButton = styled(Button)`
  color: #808080;
  float: right;
  margin: 0;
  font-size: 12px;
  ${breakpoint("tablet")`
    margin-top: 75px;
    font-size: 16px;
  `};
`;
export const CloseIcon = styled.i`
  vertical-align: middle;
  display: inline-block;
  width: 30px;
  height: 30px;
  background: #666;
  margin-left: 5px;
  border-radius: 50%;
  position: relative;
  transform: rotate(45deg);
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 2px;
    background: #fff;
    margin-left: -30%;
    margin-top: -1px;
    border-radius: 1px;
  }
  &:after {
    transform: rotate(-90deg);
  }
`;
