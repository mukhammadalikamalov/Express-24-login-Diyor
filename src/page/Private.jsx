import axios from "axios";
import React, { useEffect, useState } from "react";
import ButtonAppBar from "./header";
import App from "../Caroucel";
import HomePage from "./HomePage";
import Footer from "./footer";

function Private() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.express24.uz/client/v5/catalog/stores?latitude=41.311191&longitude=69.279776&limit=20&rootCategoryId=2"
      );
      setRestaurants(response.data.list);
      setFilteredRestaurants(response.data.list);
      const uniqueCategories = response.data.list.reduce((acc, restaurant) => {
        restaurant.subCategories.forEach((subcategory) => {
          if (!acc.includes(subcategory.name)) {
            acc.push(subcategory.name);
          }
        });
        return acc;
      }, []);
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter((restaurant) =>
        restaurant.subCategories.some((subcategory) => subcategory.name === category)
      );
      setFilteredRestaurants(filtered);
    }
  };

  return (
    <>
      <ButtonAppBar />
      <App />
      <HomePage />
      <Footer />
    </>

  )
}

export default Private;
