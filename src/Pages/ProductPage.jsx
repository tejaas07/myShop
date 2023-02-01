import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../Redux/cartSlice";
import Color from "../assets/Data/Color";
const ProductPage = (props) => {
  const [material, setMaterial] = useState([]);

  const count = useSelector((state) => state.counter.value);

  const materialList = useSelector((state) => state.material.materialType);

  const { type, filterVal, id, featuredProduct, featuredPost } = useSelector(
    (state) => state.material
  );
  const advanceFilter = (arr) => {
    return featuredPost.find((ele) => ele.productId == arr);
  };

  const dispatch = useDispatch();

  return (
    <div className="product-list">
      {props.products
        .filter((param) =>
          featuredProduct
            ? advanceFilter(param.id)
            : type == "all"
            ? true
            : type == "color"
            ? param.colorId == id
            : param.materialId == id
        )
        .map((val, i) => (
          <div key={i} className="productCard">
            <span className="img__wrap">
              <img
                src={val.image}
                alt=""
                onClick={() => dispatch(increment())}
              />
              <p
                className="img__description"
                onClick={() => dispatch(increment())}
              >
                Add to cart
              </p>
            </span>
            <div className="card-info">
              {val.name}
              <div className="productDescr">
                <span>
                  {Color.map((col, i) => (
                    <div key={i}>{col.id == val.colorId ? col.color : ""}</div>
                  ))}
                </span>
                {materialList.map((data, i) => (
                  <div key={i}>
                    {val.materialId == data.id ? data.name : ""}
                  </div>
                ))}
              </div>
              <div className="card-price">INR {val.price}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductPage;
