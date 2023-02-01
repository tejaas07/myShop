import React, { useState, useEffect } from "react";
import SideBar from "../Components/SideBar";
import ProductPage from "./ProductPage";
import axios, { isCancel, AxiosError } from "axios";
import Request from "../Util/Config";
import "../Sass/Common.scss";

const HomePages = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchFilter();
  }, []);

  const fetchFilter = async () => {
    await axios
      .get(
        `${Request.url}/af35b536915ec576818d468cf2a6505c/reactjsTest/products`,
        { headers: Request.headers }
      )
      .then((response) => {
        setProduct(response.data.products);
        localStorage.setItem("Product", JSON.stringify(response.data.products));
      });
  };

  return (
    <div className="homePage">
      <div className="sideBar">
        <SideBar />
      </div>
      <ProductPage products={product} />
    </div>
  );
};

export default HomePages;
