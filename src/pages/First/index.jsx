import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const First = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    headline: "",
    current: "",
    city: "",
    birthday: "",
    id: user._id,
    background:
      "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/06/tai-hinh-nen-dep-nhat-the-gioi-57.jpg",
    avatar:
      "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg",
  });
  const getdata = async () => {
    try {
      console.log(formData);
      const response = await axios.put(
        "https://backendsever-61gd.onrender.com/infouser",
        formData
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      getdata();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="first">
      <div className="layout"></div>
      <div className="form">
        <h2>Need to provide additional information</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              Họ và tên<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="position">
              Vị trí ứng tuyển<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              type="text"
              id="position"
              name="headline"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="education">
              Đại học hoặc Công ty hiện tại
              <span style={{ color: "red" }}>*</span>:
            </label>
            <input
              type="text"
              id="education"
              name="current"
              value={formData.education}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="city">
              Nơi ở<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="contact">
              Năm sinh<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              type="text"
              id="contact"
              name="birthday"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default First;
