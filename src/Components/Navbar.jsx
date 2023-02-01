import React, { useState, useEffect } from "react";
import { BsFillCartFill } from "react-icons/bs";
import "../Sass/Common.scss";
import {
  setFeatureList,
  setFeature,
  setFeatureFalse,
} from "../Redux/materialSlice";
import { useSelector, useDispatch } from "react-redux";
import axios, { isCancel, AxiosError } from "axios";
import Request from "../Util/Config";

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchFilter();
  }, []);
  console.log("HI");
  const fetchFilter = async () => {
    await axios
      .get(
        `${Request.url}/af35b536915ec576818d468cf2a6505c/reactjsTest/featured`,
        { headers: Request.headers }
      )
      .then((response) => {
        console.log(response.data.featured);
        dispatch(setFeatureList({ features: response.data.featured }));
      });
  };
  return (
    <div className="Nav-head">
      <div className="main-head">MYCOOLSHOP.COM</div>
      <div className="common-spaceBtwn">
        <div className="links">
          <span>
            <button
              className="navButton"
              onClick={() => dispatch(setFeatureFalse())}
            >
              All Products
            </button>
          </span>
          <span>
            <button
              className="navButton"
              onClick={() => dispatch(setFeature())}
            >
              Featured Products
            </button>
          </span>
        </div>
        <div className="cart">
          <BsFillCartFill
            size={18}
            style={{
              marginRight: "15%",
            }}
          />
          {count}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
