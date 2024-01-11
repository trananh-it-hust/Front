import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";
const LayoutAside = ({ id }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fecthdata = async () => {
      const response = await axios(
        "https://backendsever-61gd.onrender.com/login"
      );
      setdata(response.data.data);
      let tmp = response.data.data;
      let indexToRemove = tmp.findIndex((obj) => obj._id === id);
      if (indexToRemove !== -1) tmp.splice(indexToRemove, 1);
      let randomElements = tmp.sort(() => Math.random() - 0.5).slice(0, 5);
      setdata(randomElements);
    };
    fecthdata();
  }, []);
  return (
    <div className="layoutSide">
      <h2>People you may know</h2>
      <div className="listacc">
        {data.map((e, i) => {
          return (
            <Link to="/" className="list_item" key={i}>
              {e.userName}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LayoutAside;
