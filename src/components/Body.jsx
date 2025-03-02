import { useState } from "react";
import SearchBox from "./Searchbox";
import RestaurentContainer from "./RestuarentCard";
import { restaurantsList } from "../utils/mockData";

const Body = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [resList, setResList] = useState(restaurantsList);
  const handleTopRatedCick = () => {
    let filteredResList = resList.filter((item) => item.info.avgRating > 4.5);
    setResList(filteredResList);
  };

  const handleSearchRestuarents = () => {
    if (searchQuery === "") {
      setResList(restaurantsList);
    }
    let filteredResList = resList.filter((item) =>
      item.info.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResList(filteredResList);
  };

  return (
    <>
      <SearchBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearchRestuarents={handleSearchRestuarents}
      />
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
          setResList(restaurantsList);
          setSearchQuery("");
        }}
      >
        Reset Restuarents
      </button>
      <div className="body">
        <div className="restuarent-card-main">
          {resList ? (
            resList?.map((restaurant) => (
              <RestaurentContainer
                key={restaurant.info.id}
                resData={restaurant}
              />
            ))
          ) : (
            <h1>Page Not Found!</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
