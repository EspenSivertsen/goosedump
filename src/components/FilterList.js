import React, { useEffect, useMemo, useState } from "react";
import Games from './Games';

function FilterList() {

    var defaultGames = [
        { gameTitle: "Table Tennis", category: "Windows" },
        { gameTitle: "Football", category: "Windows" },
        { gameTitle: "Swimming", category: "Android" },
        { gameTitle: "Chess", category: "Android" },
        { gameTitle: "BaseBall", category: "Android" }
      ];

    const [gameList, setGameList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();

    // Add default value on page load
    useEffect(() => {
        setGameList(defaultGames);
    }, []);

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
     }

     function getFilteredList() {
        if (!selectedCategory) {
          return gameList;
        }
        return gameList.filter((item) => item.category === selectedCategory);
      }

      // Avoid duplicate function calls with useMemo
        var filteredList = useMemo(getFilteredList, [selectedCategory, gameList]);

        function handleCategoryChange(event) {
            setSelectedCategory(event.target.value);
        }

        return (
            <div className="app">
              <div className="filter-container">
                <div>Filter by Category:</div>
                <div>
                  <select
                    name="category-list"
                    id="category-list"
                    onChange={handleCategoryChange}
                  >
                    <option value="">All</option>
                    <option value="Windows">Windows</option>
                    <option value="Android">Android</option>
                  </select>
                </div>
              </div>
              <div className="game-row">
                {filteredList.map((element, index) => (
                  <Games {...element} key={index} />
                ))}
              </div>
            </div>
          );
}

export default FilterList;