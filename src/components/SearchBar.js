import { MdSearch } from "react-icons/md";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => handleSearch(event.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default SearchBar;
