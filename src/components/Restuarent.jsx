import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RES_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Restuarent = () => {
  const [restuarentData, setRestuarentData] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchRestuarentData();
  }, []);

  const fetchRestuarentData = async () => {
    try {
      const responseData = await fetch(`${RES_API_URL}&restaurantId=${resId}`);
      if (!responseData.ok) {
        console.log("Status false!");
        setRestuarentData([]);
        return;
      }
      const data = await responseData.json();

      const resData = data?.data?.cards;

      if (!resData) {
        console.log("Res Data is not present");
        setRestuarentData([]);
        return;
      }
      setRestuarentData(resData);
    } catch (err) {
      console.log("Error in API call");
      setRestuarentData([]);
    }
  };

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
          <li>
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
