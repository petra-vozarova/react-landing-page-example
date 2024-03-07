import GridCircles from "./grid.circles.component";
import ImageSlider from "./image-slider.component";
import "./information.component.styles.css";

const InformationComponent = () => {
  return (
    <div className="information-container">
      <div className="title">
        <h1>
          Mekong
          <br />
          Delta
          <br />
          Tour, <span style={{ color: "#0d9206" }}> Vietnam</span>
        </h1>
      </div>
      <div className="body-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo
      </div>
      <GridCircles />
      <button className="btn">Book Now</button>
      <ImageSlider />
    </div>
  );
};

export default InformationComponent;
