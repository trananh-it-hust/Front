import "./styles.scss";
import {
  faPenToSquare,
  faHeart,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  const { islogin, login, user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const fecthtoken = async () => {
      const token = localStorage.getItem("token");
      console.log(token);
      if (!token) {
        navigate("/login");
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
          await login(response.data.data, response.data.token);
          console.log(user);
        } catch (error) {
          console.log(error);
          navigate("/login");
        }
      }
    };
    if (!islogin) fecthtoken();
  }, []);

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const fetchData = async () => {
  //   const { postId, userId } = match.params;

  //   try {
  //     setLoading(true);
  //     const response = await axios.get(
  //       `https://backendsever-61gd.onrender.com/api/data/${postId}/${userId}`
  //     );
  //     setData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleButtonClick = () => {
  //   fetchData();
  // };

  // const [authorData, setAuthorData] = useState({});

  // const fetchAuthorData = async (authorId) => {
  //   try {
  //     const response = await axios.get(`/api/authors/${authorId}`);
  //     setAuthorData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching author data:', error);
  //   }
  // };

  return (
    <div className="home-container">
      {/* HEADER */}
      <div className="home-header">
        <div className="main-title">
          <h2></h2>
          <p className="home-des-com">company name</p>
        </div>
        <div className="home-row-favou">
          <button style={{ flex: 10 }}>APPLY NOW</button>
          <FontAwesomeIcon
            style={{ flex: 1, height: "35px", color: "red", cursor: "pointer" }}
            icon={faHeart}
          />
        </div>
      </div>

      <hr className="space" />

      {/* DESCRIPTION */}
      <div className="home-company-descrip">
        <div className="home-des-com home-address">
          <FontAwesomeIcon className="home-icon" icon={faLocationDot} />
          <div className="home-des">HA NOI</div>
        </div>
        <div className="home-des-com home-work-place">
          <FontAwesomeIcon className="home-icon" icon={faBriefcase} />
          <div className="home-des">At offfice</div>
        </div>
        <div className="home-des-com home-time-post">
          <FontAwesomeIcon className="home-icon" icon={faClock} />
          <div className="home-des">21h ago</div>
        </div>
      </div>
      {/* Edit information */}

      {/* JD */}
      <div className="home-jd">
        <div className="jd-header">
          <h1>Job Description</h1>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
      </div>
      {/* Your skill and exp need */}
      <div className="home-exp-needed">
        <div className="jd-header">
          <h1>Your skills and experience</h1>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
      </div>
      {/* Why you love working here */}
      <div className="home-will-love">
        <div className="jd-header">
          <h1> Why you love working here</h1>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
      </div>
    </div>
  );
};

export default Home;
