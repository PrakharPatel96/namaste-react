const SearchBox = (props) => {
  const { searchQuery, setSearchQuery, handleSearchRestuarents } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        className="border border-solid border-black mx-1 py-2 rounded-lg"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="bg-green-300 px-4 py-2 rounded-lg"
        onClick={() => handleSearchRestuarents()}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
