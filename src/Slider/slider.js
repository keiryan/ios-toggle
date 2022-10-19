import React, { useEffect, useState } from "react";
import { ToggleOuterContainer, ToggleInnerContainer } from "./slider.styles";
function Slider(props) {
  const [toggleSettings, setToggleSettings] = useState({});
  const handleToggle = () => {
    setToggleSettings({
      ...toggleSettings,
      toggled: !toggleSettings.toggled,
    });
  };

  useEffect(() => {
    setToggleSettings({...props.toggledSettings});
  }, [props.toggledSettings]);

  return (
    <ToggleOuterContainer
      toggleSettings={toggleSettings}
      onClick={handleToggle}
    >
      <ToggleInnerContainer toggleSettings={toggleSettings} />
    </ToggleOuterContainer>
  );
}

export default Slider;
