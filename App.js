import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
    return (<div className="res-card">
      <h3>Restaurant Name</h3>
    </div>)
}

const Body = () => {
  return (<div className="body">
    <div className = "search">Search</div>
    <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
    </div>

  </div>);
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
