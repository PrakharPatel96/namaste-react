import { useState, useEffect } from "react";
import { Link } from "react-router";
import SearchBox from "./Searchbox";
import RestaurentContainer from "./RestuarentCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [resList, setResList] = useState([]);
  const [filteredResList, setFileteredReslist] = useState([]);

  const handleFetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
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
      (item) => item.info.avgRating > 4.5
    );
    setFileteredReslist(filteredList);
  };

  const handleSearchRestuarents = () => {
    let filteredList = resList.filter((item) =>
      item.info.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFileteredReslist(filteredList);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return filteredResList.length > 0 ? (
    <div className="body">
      <div className="filter-container">
        <button
          className="filter-button"
          onClick={() => {
            handleTopRatedCick();
          }}
        >
          Top Rated Restuarents
        </button>
        <button
          className="filter-button"
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
      </div>
      <div className="restuarent-card-main">
        {filteredResList ? (
          filteredResList?.map((restaurant) => (
            <Link
              to={`/restuarent/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              <RestaurentContainer resData={restaurant} />
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
