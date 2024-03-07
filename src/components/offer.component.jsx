import "./offer.styles.css";

const Offer = () => {
  var offerDays = 2;
  var offerPrice = 166;
  return (
    <div className="offer-container">
      <h2 className="offer-text days">{offerDays} Days</h2>
      <div className="line"></div>
      <h2 className="offer-text price">${offerPrice} per person</h2>
    </div>
  );
};

export default Offer;
