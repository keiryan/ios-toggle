import styled from "styled-components";

export const ToggleOuterContainer = styled.div`
  position: relative;
  width: ${(props) => props.toggleSettings?.container?.outerWidth || 60}px;
  height: ${(props) => props.toggleSettings?.container?.outerHeight || 30}px;
  border-radius: ${(props) =>
    (props.toggleSettings?.container?.outerWidth /
      props.toggleSettings?.container?.outerHeight >=
      2 &&
      props.toggleSettings?.container?.outerWidth /
        props.toggleSettings?.container?.outerHeight) ||
    1}rem;
  background-color: ${(props) =>
    props.toggleSettings?.toggled
      ? props.toggleSettings?.container?.toggledColor || "#30D158"
      : props.toggleSettings?.container?.defaultColor || "#39393D"};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const ToggleInnerContainer = styled.div`
  width: ${(props) =>
    props.toggleSettings?.inner?.toggleSize ||
    props.toggleSettings?.container?.outerHeight ||
    30}px;
  height: 100%;
  border-radius: ${(props) =>
    (props.toggleSettings?.container?.outerHeight / 60 > 1 &&
      props.toggleSettings?.container?.outerHeight / 60) ||
    30}px;
  background-color: ${(props) =>
    props.toggleSettings.toggled
      ? props.toggleSettings?.inner?.toggledColor || "white"
      : props.toggleSettings?.inner?.defaultColor || "white"};
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: ${(props) =>
    props.toggleSettings.toggled
      ? props.toggleSettings.container.outerWidth -
          props.toggleSettings.inner.toggleSize ||
        props.toggleSettings.container.outerWidth -
          props.toggleSettings?.container?.outerHeight ||
        30
      : 0}px;
  transition: all 0.3s ease;
  cursor: pointer;
`;
