import { RES_LIST_URL } from "../constants";
import { useEffect, useState } from "react";

const useRestuarentList = () => {
  const [resList, setResList] = useState([]);
  const [filteredResListHook, setFileteredReslistHook] = useState([]);

  const handleFetchData = async () => {
    try {
      const data = await fetch(RES_LIST_URL);
      if (!data.ok) {
        console.log("API status failed");
        setResList([]);
        setFileteredReslistHook([]);
        return;
      }
      const resLiveData = await data.json();
      const restuarentData =
        resLiveData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      if (!restuarentData) {
        console.log("No Restuarent Data");
        setResList([]);
        setFileteredReslistHook([]);
        return;
      }
      setResList(restuarentData);
      setFileteredReslistHook(restuarentData);
    } catch (err) {
      console.log("Error is API call", err);
      setResList([]);
      setFileteredReslistHook([]);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return { resList, filteredResListHook };
};

export default useRestuarentList;
