import { useState } from "react";
import { useParams } from "react-router";
import useRestuarentData from "../utils/customHooks/useRestuarentData";
import Shimmer from "./Shimmer";
import RestuarentItemsCategory from "./RestuarentItemsCategory";

const Restuarent = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const restuarentData = useRestuarentData(resId);

  if (restuarentData.length === 0) {
    return <Shimmer />;
  }

  const { avgRatingString, costForTwoMessage, cuisines, name } =
    restuarentData[2]?.card?.card?.info;

  const items =
    restuarentData[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  const handleToggle = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-center">
      <h1 className="font-bold my-2 text-2xl">{name}</h1>
      <h2 className="my-1 font-bold text-lg">
        {avgRatingString} - {costForTwoMessage}
      </h2>
      <h3 className="my-1 font-bold text-lg">{cuisines.join()}</h3>
      {items.map((element, index) => {
        return (
          <RestuarentItemsCategory
            data={element?.card?.card}
            key={element?.card?.card?.title}
            showItems={index === showIndex}
            onToggle={() => handleToggle(index)}
          />
        );
      })}
    </div>
  );
};

export default Restuarent;
