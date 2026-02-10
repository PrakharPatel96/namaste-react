import RestuarentItemsList from "./RestuarentItemsList";

const RestuarentItemsCategory = ({ data, showItems, onToggle }) => {
  return (
    <div
      className="flex flex-col cursor-pointer bg-gray-100 shadow-lg p-4 w-6/12 m-auto my-4"
      onClick={onToggle}
    >
      <div className="flex justify-between">
        <span className="font-bold">
          {data?.title}({data?.itemCards.length})
        </span>
        <span>{showItems ? "🔼" : "🔽"}</span>
      </div>
      {showItems && (
        <div>
          <RestuarentItemsList key={data?.title} props={data?.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestuarentItemsCategory;
