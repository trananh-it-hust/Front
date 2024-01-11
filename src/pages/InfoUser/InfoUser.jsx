import React, { useEffect, useState } from "react";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import LayoutAside from "./Components/LayoutAside/LayoutAside";
import "./style.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { decoded } from "../../utils";

const InfoUser = () => {
  const { islogin, user, login } = useAuth();
  const [isAuth, setisAuth] = useState(false);
  const { id } = useParams();
  const idtmp = decoded(id);
  const [getid, setgetid] = useState(idtmp);
  useEffect(() => {
    const tmp = decoded(id);
    setgetid(tmp);
  }, [id]);
  const userN = { _id: getid };
  useEffect(() => {
    if (user && user._id == getid) setisAuth(true);
  }, [...id, { ...user }]);
  const navigate = useNavigate();
  useEffect(() => {
    const fecthtoken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        useEffect(() => {
          navigate("/login");
        }, []);
      } else {
        try {
          const response = await axios.get(
            "https://backendsever-61gd.onrender.com/token",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          login(response.data.data, response.data.token);
        } catch (error) {
          console.log(error);
          useEffect(() => {
            navigate("/login");
          }, []);
        }
      }
    };
    fecthtoken();
  }, []);
  return (
    <div className="infoUser">
      <div className="infoUserLeft">
        <Header />
        <Content isAuth={isAuth} user={userN} />
      </div>
      <div className="infoUserRight">
        <LayoutAside id={getid} />
      </div>
    </div>
  );
};

export default InfoUser;
