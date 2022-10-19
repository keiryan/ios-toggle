import { AppContainer } from "./app.styles";
import Slider from "./Slider/slider";

function App() {

  const toggledSettings = {
    toggled: false,
    container: {
      outerHeight: 30,
      outerWidth: 60,
      
    },
    inner: {
    },
  };
  return (
    <AppContainer>
      <Slider toggledSettings={toggledSettings} />
    </AppContainer>
  );
}

export default App;
