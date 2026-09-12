import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025",
    );

    const dataJson = await data.json();
    let newfilterData = dataJson.data.cards.filter((res) => {
      return res?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    });

    /*  console.log(newfilterData)

    let newfilterData1 = newfilterData.filter(res1=>{
      return "restaurants" in res1.card.card.gridElements.infoWithStyle;
    })
    console.log(newfilterData1[0].card.card.gridElements.infoWithStyle.restaurants) */

    setListOfRestaurants(
      newfilterData[0].card.card.gridElements.infoWithStyle.restaurants,
    );
    setFilteredList(
      newfilterData[0].card.card.gridElements.infoWithStyle.restaurants,
    );
    console.log(
      newfilterData[0].card.card.gridElements.infoWithStyle.restaurants,
    );
  };

  if (listOfRestaurants.length === 0) {
    return <div className="loader"></div>;
  }

  const searchRestaurants = () => {
    let filterListCreated = listOfRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setFilteredList(filterListCreated);
  };

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => searchRestaurants()}>Search</button>

        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => {
          return (
            <RestaurantCard
              cardInfo={restaurant.info}
              key={restaurant.info.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
