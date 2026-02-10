import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import SearchBox from "./Searchbox";
import RestaurentContainer from "./RestuarentCard";
import Shimmer from "./Shimmer";
import { RES_LIST_URL } from "../utils/constants";
import useRestuarentList from "../utils/customHooks/useRestuarentList";
import { withPromotedLabel } from "./RestuarentCard";
import UserContext from "../utils/userContext";

const Body = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [resList, setResList] = useState([]);
  const [filteredResList, setFileteredReslist] = useState([]);

  const { loggedInUser, setUpdateUserName } = useContext(UserContext);

  const RestuarentCardPromoted = withPromotedLabel(RestaurentContainer);

  const handleFetchData = async () => {
    try {
      const data = await fetch(RES_LIST_URL);
      if (!data.ok) {
        console.log("API status failed");
        setResList([]);
        setFileteredReslist([]);
        return;
      }
      const resLiveData = await data.json();
      const restuarentData =
        resLiveData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      if (!restuarentData) {
        console.log("No Restuarent Data");
        setResList([]);
        setFileteredReslist([]);
        return;
      }
      setResList(restuarentData);
      setFileteredReslist(restuarentData);
    } catch (err) {
      console.log("Error is API call", err);
      setResList([]);
      setFileteredReslist([]);
    }
  };

  const handleTopRatedCick = () => {
    let filteredList = filteredResList.filter(
      (item) => item.info.avgRating > 4.5,
    );
    setFileteredReslist(filteredList);
  };

  const handleSearchRestuarents = () => {
    let filteredList = resList.filter((item) =>
      item.info.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFileteredReslist(filteredList);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return filteredResList.length > 0 ? (
    <div className="body">
      <div className="flex items-center px-2">
        <button
          className="px-4 py-2 bg-gray-400 m-2 rounded-lg"
          onClick={() => {
            handleTopRatedCick();
          }}
        >
          Top Rated Restuarents
        </button>
        <button
          className="px-4 py-2 bg-gray-400 m-2 rounded-lg"
          onClick={() => {
            setFileteredReslist(resList);
            setSearchQuery("");
          }}
        >
          Reset Restuarents
        </button>
        <SearchBox
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearchRestuarents={handleSearchRestuarents}
        />
        <label>User: </label>
        <input
          type="textbox"
          onChange={(e) => setUpdateUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap">
        {filteredResList ? (
          filteredResList?.map((restaurant) => (
            <Link
              to={`/restuarent/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {restaurant.info.avgRating > 4.5 ? (
                <RestuarentCardPromoted resData={restaurant} />
              ) : (
                <RestaurentContainer resData={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <h1>Page Not Found!</h1>
        )}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
