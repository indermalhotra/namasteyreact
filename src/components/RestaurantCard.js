import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const {
    name: resName,
    avgRating,
    cuisines,
    cloudinaryImageId: resImg,
    locality: location,
  } = props.cardInfo;
  
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + resImg} alt="res-logo" />
      <h3>{resName}</h3>
      <h3>{avgRating}</h3>
      <h3>{location}</h3>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
