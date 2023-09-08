import "./App.css";
import Carousel from "./components/Carousel";
import slide from "./data.json";

function App() {
  return (
    <>
      <Carousel slides={slide.project} />
      
    </>
  );
}

export default App;
