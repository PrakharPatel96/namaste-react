import { useParams } from "react-router";
import useRestuarentData from "../utils/customHooks/useRestuarentData";
import Shimmer from "./Shimmer";

const Restuarent = () => {
  const { resId } = useParams();

  const restuarentData = useRestuarentData(resId);

  if (restuarentData.length === 0) {
    return <Shimmer />;
  }

  const { avgRatingString, costForTwoMessage, cuisines, name } =
    restuarentData[2]?.card?.card?.info;

  const menuItems =
    restuarentData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  return (
    <div>
      <h1>{name}</h1>
      <h2>
        {avgRatingString} - {costForTwoMessage}
      </h2>
      <h3>{cuisines.join()}</h3>
      <ul>
        Menu Items:{" "}
        {menuItems?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} -{" "}
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restuarent;
