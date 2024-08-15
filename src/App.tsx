import { useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedValue, setSelectedValue] = useState("photos");
  const [search, setSearch] = useState(false);
  return (
    <div>
      <Navbar
        searchText={searchText}
        selectedValue={selectedValue}
        setSearchText={setSearchText}
        setSelectedValue={setSelectedValue}
        search={search}
        setSearch={setSearch}
      />
      <Home
        searchText={searchText}
        selectedValue={selectedValue}
        setSearchText={setSearchText}
        setSelectedValue={setSelectedValue}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};

export default App;
