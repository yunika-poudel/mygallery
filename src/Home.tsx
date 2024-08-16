import { useState, useEffect } from "react";
import "./home.css";
import Search from "./components/Search";
import { FaHeart } from "react-icons/fa";
import { SearchProps } from "./models/SearchProps";
import { Videos } from "./models/Videos";
import { Photos } from "./models/Photos";

const Home = ({
  searchText,
  setSearchText,
  selectedValue,
  setSelectedValue,
  search,
  setSearch,
}: SearchProps) => {
  const [filterGallery, setFilterGallery] = useState<Photos[] | Videos[]>([]);
  const [showIcon, setShowIcon] = useState({
    state: false,
    id: 0,
  });
  const [like, setLike] = useState<number[]>([]);
  console.log(filterGallery);

  const toggleLike = (id: number) => {
    setLike((prevLike) =>
      prevLike?.includes(id)
        ? prevLike?.filter((likeId) => likeId !== id)
        : [...prevLike, id]
    );
  };

  const url =
    selectedValue === "photos"
      ? `https://api.pexels.com/v1/search?query=${searchText || "nature"}`
      : `https://api.pexels.com/videos/search?query=${searchText || "nature"}`;

  useEffect(() => {
    async function fetchingData(url: string) {
      const response = await fetch(url, {
        headers: {
          Authorization:
            "VEp8mW6VMBY8ps37QqQ1XnMy7WbqFZolm3uiuoX9lOWFKdE526KVjVS4",
        },
      });
      const result = await response.json();
      setFilterGallery(
        selectedValue === "photos" ? result?.photos : result.videos
      );
    }

    fetchingData(url);
  }, [selectedValue, search]);

  useEffect(() => {
    if (searchText) {
      async function fetchingData(url: string) {
        const response = await fetch(url, {
          headers: {
            Authorization:
              "VEp8mW6VMBY8ps37QqQ1XnMy7WbqFZolm3uiuoX9lOWFKdE526KVjVS4",
          },
        });
        const result = await response.json();
        setFilterGallery(
          selectedValue === "photos" ? result?.photos : result.videos
        );
      }
      fetchingData(url);
    }
  }, [selectedValue, search]);

  return (
    <div className="wrappers">
      <div className="bg">
        <div className="contant">
          <h1>"The only way to do great work is to love what you do".</h1>

          <Search
            searchText={searchText}
            setSearchText={setSearchText}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            setSearch={setSearch}
            search={search}
          />
        </div>
      </div>
      <div className="gallary-items">
        <h1>MyGallery</h1>
        <div className="gallary">
          {selectedValue === "photos"
            ? filterGallery?.map((item) => {
                // Type guard for Photos
                if ("src" in item) {
                  return (
                    <div className="image-wrapper" key={item.id}>
                      <img
                        src={item.src.original}
                        alt="gallery"
                        onMouseEnter={() =>
                          setShowIcon({ state: true, id: item.id })
                        }
                        onMouseLeave={() =>
                          setShowIcon({ state: false, id: 0 })
                        }
                        className={`${
                          showIcon.id === item.id && showIcon.state
                            ? "imagekohover"
                            : ""
                        } `}
                      />
                      <FaHeart
                        className="test"
                        onClick={() => toggleLike(item.id)}
                        color={like.includes(item.id) ? "red" : "white"}
                      />
                    </div>
                  );
                }
              })
            : filterGallery?.map((item) => {
                // Type guard for Videos
                if ("video_files" in item) {
                  return (
                    <div key={item.id} style={{ marginTop: "10px" }}>
                      <video
                        key={item.id}
                        // height={"200px"}
                        // width={"400px"}
                        className="video_css"
                        controls
                      >
                        <source
                          src={item.video_files[0].link}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  );
                }
              })}
        </div>
      </div>
    </div>
  );
};

export default Home;
