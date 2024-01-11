import React, { useEffect, useState } from "react";
import "./styles.css";
import Option_Item from "./Option_Item/Option_Item";
import axios from "axios";

const Options = ({ data, id, setHdata }) => {
  const [OptionsMap, setOptionsMap] = useState(data);
  useEffect(() => {
    setOptionsMap(data);
  }, [data]);

  const getData = (value) => {
    OptionsMap.forEach((e) => {
      if (e.name == value.nameOptions) e.check = value.check;
    });
  };
  const handleArry = (array) => {
    let tmp = { id };
    array.forEach((e) => {
      tmp[e.name] = e.check;
    });
    return tmp;
  };
  const onFinish = async (e) => {
    try {
      e.preventDefault();
      const value = handleArry(OptionsMap);
      const response = await axios.put(
        "https://backendsever-61gd.onrender.com/infouser/option",
        value
      );
      setHdata(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="options">
      <div>Add profile section</div>
      <form onSubmit={onFinish}>
        <div>
          {OptionsMap.map((e, i) => {
            return (
              <Option_Item
                nameOptions={e.name}
                check={e.check}
                key={i}
                onFinish={getData}
              />
            );
          })}
        </div>
        <button type="submit">OK</button>
      </form>
    </div>
  );
};

export default Options;
