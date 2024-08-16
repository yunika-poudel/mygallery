import { FaSearch, FaVideo } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import "./Search.css";
import { SearchProps } from "../models/SearchProps";
const Search = ({
  searchText,
  setSearchText,
  selectedValue,
  setSelectedValue,
  search,
  setSearch,
}: SearchProps) => {
  return (
    <div className="search">
      <div className="input-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevents the default form submission behavior
            setSearch(!search); // Triggers the search state change
          }}
          className="wrap"
        >
          <FaSearch id="icon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            // onKeyDown={(e) => {
            //   if (e.key === "Enter" || e.key === "Go" || e.key === "Search") {
            //     setSearch(!search);
            //   }
            // }}
          />
        </form>
        <div className="wraps">
          {selectedValue == "photos" ? (
            <IoMdPhotos id="icons" />
          ) : (
            <FaVideo id="icons" />
          )}
          <select
            name="text"
            id="search"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option value={"photos"}>Photos</option>
            <option value={"videos"}>Videos</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
