import React, { useEffect, useState } from "react";
import Options from "./Components/Options/index";
import ContentItem from "./Components/ContentItem";
import axios from "axios";

const Content = ({ isAuth, user }) => {
  const [data, setData] = useState([
    { name: "Education", check: false },
    { name: "Project", check: false },
    { name: "Skills", check: false },
    { name: "Courses", check: false },
    { name: "Experience", check: false },
  ]);
  const myArray = [];
  const HandleRes = (obj) => {
    let tmp = obj;
    delete tmp._id;
    delete tmp.idUser;
    delete tmp.__v;
    Object.keys(tmp).forEach((key) =>
      myArray.push({ name: key, check: tmp[key] })
    );
    setData(myArray);
  };

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.post(
          "https://backendsever-61gd.onrender.com/infouser/option",
          {
            id: user._id,
          }
        );
        HandleRes(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchOptions();
  }, [user]);

  return (
    <div>
      {isAuth && <Options data={data} id={user._id} setHdata={HandleRes} />}
      {data.map((e, i) => {
        if (e.check)
          return <ContentItem id={user._id} data={e} key={i} isAuth={isAuth} />;
      })}
    </div>
  );
};

export default Content;
