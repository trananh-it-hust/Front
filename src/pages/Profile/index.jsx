import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  faPenToSquare,
  faHeart,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await axios.get(
          `https://backendsever-61gd.onrender.com/${id}`
        );
        setDetails(res.data.data);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    getDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormPost({ ...formPost, [name]: value });
  };

  const handlePutForm = () => {
    // Khi người dùng click vào input, đặt trạng thái của showForm thành true
    setShowForm(true);
  };

  const clickHiddenForm = () => {
    setShowForm(false);
  };

  const [formPost, setFormPost] = useState({
    jobDescription: "",
    Exp: "",
    whyLoveWorkHere: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your server endpoint
      const response = await axios.put(
        `https://backendsever-61gd.onrender.com/${id}`,
        formPost
      );

      // Handle the response if needed
      console.log("Server Response:", response.data);

      // Reset the form data to its initial state
      setFormPost({
        jobDescription: "",
        Exp: "",
        whyLoveWorkHere: "",
      });
      alert("Edit Successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <>
      <div className="profile-container" key={details._id}>
        <div className="input-container">
          {showForm && (
            <div className="popup-containter">
              <form onSubmit={handleSubmit}>
                <div className="jobDescription">
                  <label htmlFor="jobDescription">
                    Job Description:
                    <textarea
                      type="text"
                      id="jobDescription"
                      name="jobDescription"
                      value={formPost.jobDescription}
                      onChange={handleInputChange}
                      cols="40"
                      rows="5"
                    ></textarea>
                  </label>
                </div>
                <div className="Exp">
                  <label htmlFor="Exp">
                    Your skills and experience:
                    <textarea
                      type="text"
                      id="Exp"
                      name="Exp"
                      value={formPost.Exp}
                      onChange={handleInputChange}
                      cols="40"
                      rows="5"
                    ></textarea>
                  </label>
                </div>
                <div className="whyLoveWorkHere">
                  <label htmlFor="whyLoveWorkHere">
                    Why you love working here: <br />
                    <textarea
                      type="text"
                      id="whyLoveWorkHere"
                      name="whyLoveWorkHere"
                      value={formPost.whyLoveWorkHere}
                      onChange={handleInputChange}
                      cols="40"
                      rows="5"
                    ></textarea>
                  </label>
                </div>
                <div className="button-submit">
                  <button onClick={clickHiddenForm}>Cancel</button>
                  <button type="submit">Post</button>
                </div>
              </form>
            </div>
          )}
        </div>

        <div className="profile-header">
          <div className="profile-header-content">
            <div className="profile-header-row">
              <div className="profile-avatar">
                <img
                  className="profile-logo"
                  src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK1J1REE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--53ab4877387c44be52c1fda170364fa542dc4173/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/vietinbank-logo.png"
                  alt=""
                />
              </div>
              <div className="profile-header-ds">
                <h1 className="profile-title">{details.userName} </h1>
                <div className="profile-location">
                  {" "}
                  <FontAwesomeIcon icon={faLocationDot} />
                  {details.location}
                </div>
                <button className="profile-header-follow">Follow</button>
              </div>
            </div>
          </div>
          <div onClick={handlePutForm} className="put-input">
            <FontAwesomeIcon fontSize={"20px"} icon={faPenToSquare} />
          </div>
        </div>
        <div className="home-container">
          {/* HEADER */}
          <div className="home-header">
            <div className="main-title">
              <h2>{details.title}</h2>
              <p className="home-des-com">{details.userName}</p>
            </div>
            <div className="home-row-favou">
              <button style={{ flex: 10 }}>APPLY NOW</button>
              <FontAwesomeIcon
                style={{
                  flex: 1,
                  height: "35px",
                  color: "red",
                  cursor: "pointer",
                }}
                icon={faHeart}
              />
            </div>
          </div>

          <hr className="space" />

          {/* DESCRIPTION */}
          <div className="home-company-descrip">
            <div className="home-des-com home-address">
              <FontAwesomeIcon icon={faLocationDot} />
              <div className="home-des">{details.location}</div>
            </div>
            <div className="home-des-com home-work-place">
              <FontAwesomeIcon icon={faBriefcase} />
              <div className="home-des">{details.title}</div>
            </div>
            <div className="home-des-com home-time-post">
              <FontAwesomeIcon icon={faClock} />
              <div className="home-des">{details.createdAt}</div>
            </div>
          </div>
          {/* Edit information */}

          {/* JD */}
          <div className="home-jd">
            <div className="jd-header">
              <h1>Job Description</h1>
              <div>{details.jobDescription}</div>
            </div>
          </div>
          {/* Your skill and exp need */}
          <div className="home-exp-needed">
            <div className="jd-header">
              <h1>Your skills and experience</h1>
              <div>{details.Exp}</div>
            </div>
          </div>
          {/* Why you love working here */}
          <div className="home-will-love">
            <div className="jd-header">
              <h1> Why you love working here</h1>
              <div>{details.whyLoveWorkHere}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
