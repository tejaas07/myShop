import React, { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import Request from "../Util/Config";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setMaterial } from "../Redux/materialSlice";
import Color from "../assets/Data/Color";
import "../Sass/Common.scss";

const SideBar = () => {
  const dispatch = useDispatch();
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    fetchFilter();
  }, []);

  const fetchFilter = async () => {
    await axios
      .get(
        `${Request.url}/af35b536915ec576818d468cf2a6505c/reactjsTest/material`,
        { headers: Request.headers }
      )
      .then((response) => {
        // console.log(response.data);
        setMaterials(response.data.material);
        dispatch(setMaterial({ material: response.data.material }));
      });
  };

  const filterFn = (name, id, type) => {
    let customType = type;
    if (name == "all") {
      customType = "all";
    }
    // console.log(customType);
    dispatch(setFilter({ type: customType, value: name, id: id }));
  };

  return (
    <div className="sidebar-list">
      <div className="sidebar-list-child">
        Material
        {materials.map((val, i) => (
          <div key={i}>
            <button
              className="buttonSidebar"
              onClick={() => filterFn(val.name, val.id, "material")}
            >
              {val.name}
            </button>
          </div>
        ))}
      </div>
      <div className="sidebar-list-child">
        Color
        {Color.map((val, i) => (
          <div>
            <button
              className="buttonSidebar"
              onClick={() => filterFn(val.color, val.id, "color")}
            >
              {val.color}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
