const SearchBox = (props) => {
  const { searchQuery, setSearchQuery, handleSearchRestuarents } = props;

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search here..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={() => handleSearchRestuarents()}>Search</button>
    </div>
  );
};

export default SearchBox;
