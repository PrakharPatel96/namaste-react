import { CDN_LINK_IMAGE } from "../utils/constants";

const RestuarentItemsList = (props) => {
  const items = props.props;

  return (
    <>
      {items.map((item) => {
        const info = item?.card?.info;
        if (!info) return null;

        const {
          id,
          name,
          description,
          imageId,
          price,
          itemAttribute,
          ratings,
        } = info;

        const vegClassifier =
          itemAttribute?.vegClassifier?.toLowerCase() === "veg";

        const aggregatedRatings = ratings?.aggregatedRating;

        const hasRatings = Object.keys(aggregatedRatings ?? {}).length > 0;

        return (
          <div
            id={id}
            className="flex justify-between border-gray-200 border-b-2 gap-4 py-4"
          >
            <div className="flex flex-col gap-1 text-left w-9/12">
              <span>{vegClassifier ? "🟢" : "🔴"}</span>

              <span className="font-medium">{name}</span>
              {price && (
                <span className="text-sm text-gray-700">₹ {price / 100}</span>
              )}

              {hasRatings && (
                <span className="text-sm text-gray-600">
                  ⭐️ {aggregatedRatings?.rating} (
                  {aggregatedRatings?.ratingCountV2})
                </span>
              )}

              {description && (
                <span className="text-sm text-gray-500">{description}</span>
              )}
            </div>
            <div className="w-3/12 relative">
              {imageId && (
                <img
                  className="rounded-lg w-full h-full p-4"
                  alt={name}
                  src={CDN_LINK_IMAGE + imageId}
                />
              )}
              <button className="cursor-pointer absolute left-1/2 -bottom-2 -translate-x-1/2 bg-white rounded-lg shadow-lg px-6 py-2 text-sm font-medium">
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RestuarentItemsList;
