import { CDN_LINK_IMAGE } from "../utils/constants";

const RestaurentContainer = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRatingString, cuisines, sla } =
    resData?.info;

  return (
    <div className="restuarent-card">
      <img
        className="res-image"
        alt="restuarent-image"
        src={CDN_LINK_IMAGE + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h3>{avgRatingString}</h3>
      <h4 className="cuisines">{cuisines.join()}</h4>
      <h5>{sla?.deliveryTime} Minutes</h5>
    </div>
  );
};

export default RestaurentContainer;
