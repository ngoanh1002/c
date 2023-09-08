import PropTypes from "prop-types";
import Button from "./Button";

const Slide = ({ slides, currentIndex, onPrev, onNext }) => {
  return (
    <>
      <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
      <div className="box">
      <Button onClick={onPrev} text="Prev" />
      <Button onClick={onNext} text="Next" />
      </div>
      
    </>
  );
};

Slide.propTypes = {
  currentIndex: PropTypes.string,
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
   
    })
  ).isRequired,
};

export default Slide;
