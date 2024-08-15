import { useState, useEffect } from "react";
import "./navbar.css";
import Search from "./components/Search";
import { SearchProps } from "./models/SearchProps";

const Navbar = ({
  searchText,
  setSearchText,
  selectedValue,
  setSelectedValue,
  search,
  setSearch,
}: SearchProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [icons, setIcons] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (scrollTop > 0) {
        setIcons(true);
      } else {
        setIcons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`nav-bar ${scrolled ? "scrolled" : ""}`}
      style={{ display: "flex", alignItems: "center" }}
    >
      <h2
        style={{ display: !scrolled && icons ? "none" : "" }}
        className={`scrolled-text ${scrolled ? "scrolled" : ""}`}
      >
        ArtVista
      </h2>
      {scrolled && (
        <div style={{ width: "100%" }}>
          <Search
            searchText={searchText}
            setSearchText={setSearchText}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            search={search}
            setSearch={setSearch}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
