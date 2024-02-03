import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// context
import ProductContextProvider from "./contexts/ProductContextProvider";
import CardContextProvider from "./contexts/CardContextProvider";
// components
import Store from "./components/Store";
import DetailsPage from "./components/DetailsPage";
import ShopCard from "./components/ShopCard";
import Layout from "./components/Layout";
import Login from "./components/Login/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <ProductContextProvider>
      <CardContextProvider>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Store />} />
            <Route path="/cart" element={<ShopCard />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        </Layout>
      </CardContextProvider>
    </ProductContextProvider>
  );
};

export default App;
