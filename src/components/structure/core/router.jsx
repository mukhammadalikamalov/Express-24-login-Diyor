import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../App";
import { default as RestaurantById } from "../page/[id]";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/restaurant/:id" element={<RestaurantById />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
