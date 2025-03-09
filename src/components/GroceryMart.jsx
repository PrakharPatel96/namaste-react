import GroceryCard from "./GroceryCard";

const GroceryMart = () => {
  return (
    <>
      <h2>Grocery Store!</h2>
      <div className="grocery-container">
        <GroceryCard name={"Cucumber"} price={50} unit={890} />
        <GroceryCard name={"Onions"} price={40} unit={790} />
        <GroceryCard name={"Papaya"} price={30} unit={670} />
        <GroceryCard name={"Mango"} price={20} unit={340} />
        <GroceryCard name={"Apple"} price={60} unit={560} />
        <GroceryCard name={"Oranges"} price={70} unit={980} />
        <GroceryCard name={"Potato"} price={80} unit={230} />
      </div>
    </>
  );
};

export default GroceryMart;
