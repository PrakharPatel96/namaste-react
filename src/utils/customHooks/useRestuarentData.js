import { RES_API_URL } from "../constants";
import { useEffect, useState } from "react";

const useRestuarentData = (resId) => {
  const [restuarentData, setRestuarentData] = useState([]);
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
  return restuarentData;
};

export default useRestuarentData;
