import { CDN_LINK_IMAGE } from "../utils/constants";

const RestaurentContainer = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRatingString, cuisines, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="restuarent-image"
        src={CDN_LINK_IMAGE + cloudinaryImageId}
      />
      <h2 className="font-bold py-4">{name}</h2>
      <h3>{avgRatingString}</h3>
      <h4 className="cuisines">{cuisines.join()}</h4>
      <h5>{sla?.deliveryTime} Minutes</h5>
    </div>
  );
};

export const withPromotedLabel = (RestaurentContainer) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg m-2 p-2">
          Promoted
        </label>
        <RestaurentContainer {...props} />
      </div>
    );
  };
};

export default RestaurentContainer;
