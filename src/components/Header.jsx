import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { searchResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  const cache = useSelector((store) => store.search.searchResults);

  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setSuggestions(cache[searchQuery]);
      } else {
        getSearchSuggestions(searchQuery);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = (query) => {
    const callbackName = "suggestCallback";
    window[callbackName] = function (data) {
      setSuggestions(data[1]);
      dispatch(searchResults({ [query]: data[1] }));
      delete window[callbackName];
      document.body.removeChild(script);
    };

    const script = document.createElement("script");
    script.src = `https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=${encodeURIComponent(
      query
    )}&callback=${callbackName}`;
    document.body.appendChild(script);
  };

  function onMenuFunction() {
    dispatch(toggleMenu());
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="grid grid-flow-col p-2 m-2 shadow ">
        {/* Menu and Logo */}
        <div className="flex items-center m-5 col-span-1">
          <img
            onClick={onMenuFunction}
            alt="menu"
            className="h-8 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          />
          <img
            className="h-8"
            alt="youtubelogo"
            src="5295-youtube-i_102568.png"
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center col-span-10 relative ">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            className="border ml-auto w-1/2 rounded-l-2xl px-2"
          />
          {suggestions.length > 0 && (
            <div className="shadow bg-gray-100 absolute top-full left-1/2 -translate-x-1/2 w-1/2 z-10 rounded border ">
              <ul>
                {suggestions.map((s, index) => (
                  <li
                    key={index}
                    className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
                  >
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button className="border rounded-r-2xl px-2 mr-auto">search</button>
        </div>

        {/* User Icon */}
        <div className="col-span-1">
          <img
            className="h-8 m-5"
            alt="userIcon"
            src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
