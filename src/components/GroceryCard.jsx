const GroceryCard = ({ name, price, unit }) => {
  return (
    <div className="restuarent-card">
      <h4>{name}</h4>
      <h5>₹{price}</h5>
      <h5>Units: {unit}</h5>
    </div>
  );
};

export default GroceryCard;
