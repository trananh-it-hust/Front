import React, { useEffect, useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ContentItem = ({ id, data, isAuth }) => {
  const [isform, setisform] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    info: "",
    description: "",
    time: "",
    skills: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = { ...formData, id };
    let link;
    if (data.name != "Experience")
      link =
        "https://backendsever-61gd.onrender.com/infouser/create/?name=" +
        data.name;
    else
      link = "https://backendsever-61gd.onrender.com/infouser/create/?name=Exp";
    const response = await axios.put(link, value);
    setFormData(response.data.data);
    setisform(!isform);
  };
  useEffect(() => {
    const fetchformData = async () => {
      let link;
      if (data.name != "Experience")
        link =
          "https://backendsever-61gd.onrender.com/infouser/create/?name=" +
          data.name;
      else
        link =
          "https://backendsever-61gd.onrender.com/infouser/create/?name=Exp";
      const response = await axios.post(link, { id });
      setFormData(response.data.data);
    };
    fetchformData();
  }, []);
  const putdata = () => {
    setisform(!isform);
  };
  return (
    <div className="contentItem">
      <div className="smallItem">
        <h2>{data.name}</h2>
        <div className="small title">
          <div className="title">{formData.title}</div>
          <div className="info">{formData.info}</div>
          <div className="time">{formData.time}</div>
        </div>
        <div className="description">{formData.description}</div>
        <div className="skills">{formData.skills}</div>
        {isAuth && (
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="editicon"
            onClick={putdata}
          />
        )}
        {isform && (
          <div>
            <h3 className="green">Edit Information</h3>

            <form onSubmit={handleSubmit}>
              {/* Title */}
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />

              <br />

              {/* Info */}
              <label htmlFor="info">Info:</label>
              <input
                type="text"
                id="info"
                name="info"
                value={formData.info}
                onChange={handleChange}
                required
              />

              <br />

              {/* Description */}
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>

              <br />

              {/* Time */}
              <label htmlFor="time">Time:</label>
              <input
                type="text"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />

              <br />

              {/* Skills */}
              <label htmlFor="skills">Skills:</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />

              <br />

              {/* Submit Button */}
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentItem;
