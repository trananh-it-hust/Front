import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { decoded } from "../../../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../../context/AuthContext";
const Header = () => {
  let avatarlink, backgroundlink;
  const { user = {}, islogin, login } = useAuth();
  const [isAuth, setisAuth] = useState(false);
  const [isActive, setisActive] = useState(false);
  const [isActive1, setisActive1] = useState(false);
  const [userinfo, setUserinfo] = useState({});
  const { id } = useParams();
  const idtmp = decoded(id);
  const [getid, setgetid] = useState(idtmp);
  useEffect(() => {
    const tmp = decoded(id);
    setgetid(tmp);
  }, [...id]);

  useEffect(() => {
    if (user && user._id == getid) setisAuth(true);
  }, [...id, { ...user }]);
  useEffect(() => {
    const value = {
      id: getid,
    };
    const getdata = async () => {
      try {
        const response = await axios.post(
          "https://backendsever-61gd.onrender.com/infouser",
          value
        );
        setUserinfo(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, [id]);
  useEffect(() => {
    let tmp = userinfo;
    setUserinfo(tmp);
  }, [id]);
  const putdata = async () => {
    try {
      const response = await axios.put(
        "https://backendsever-61gd.onrender.com/infouser",
        {
          ...userinfo,
          id: user._id,
          avatar: avatarlink,
        }
      );
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const putdata1 = async () => {
    try {
      const response = await axios.put(
        "https://backendsever-61gd.onrender.com/infouser",
        {
          ...userinfo,
          id: user._id,
          background: backgroundlink,
        }
      );
      console.log(response);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserinfo({
      ...userinfo,
      [name]: value,
      id: user._id,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      putdata();
    } catch (error) {
      console.log(error);
    }
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("img", selectedFile);
      const response = await axios.post(
        "https://backendsever-61gd.onrender.com/upload",
        formData
      );
      avatarlink = response.data.path;
      setUserinfo({ ...userinfo, avatar: response.data.path });
      await putdata();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const [selectedFile1, setSelectedFile1] = useState(null);
  const handleFileChange1 = (event) => {
    setSelectedFile1(event.target.files[0]);
  };
  const handleUpload1 = async () => {
    try {
      const formData = new FormData();
      formData.append("img", selectedFile1);
      const response = await axios.post(
        "https://backendsever-61gd.onrender.com/upload",
        formData
      );
      backgroundlink = response.data.path;
      setUserinfo({ ...userinfo, background: response.data.path });
      await putdata1();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <div className="header-info">
      <div className="photo">
        <img
          src={userinfo.background}
          alt="Back Ground"
          className="background"
        />
        <img src={userinfo.avatar} alt="Avatar" className="avatar" />
        {isAuth && (
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="editicon"
            onClick={() => {
              setisActive1(!isActive1);
            }}
          />
        )}
      </div>
      {isActive1 && (
        <div className="upload">
          <div className="uploadavatar">
            <h2>Upload Avatar</h2>
            <input type="file" name="avatar" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Avatar</button>
          </div>
          <div className="uploadbackground">
            <h2>Upload BackGround</h2>
            <input type="file" name="background" onChange={handleFileChange1} />
            <button onClick={handleUpload1}>Upload BackGround</button>
          </div>
        </div>
      )}
      <div className="info-intro">
        <div className="intro-left">
          <h2>{userinfo.Name}</h2>
          <h3 className="headline">{userinfo.headline}</h3>
          <div className="location">Location: {userinfo.city}</div>
          <div className="Contact">ContactInfo: {userinfo.email}</div>
        </div>
        <div className="intro-right">
          <div className="intro-right-item">
            <div>Current position: </div>
            <div className="current">{userinfo.current}</div>
          </div>
          <div className="intro-right-item">
            <div>Year of birth: </div>
            <div className="current">{userinfo.birthday}</div>
          </div>
          {isAuth && (
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="editicon"
              onClick={() => {
                setisActive(!isActive);
              }}
            />
          )}
        </div>
      </div>
      {isActive && (
        <div className="form1">
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
                value={userinfo.Name}
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
                value={userinfo.headline}
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
                value={userinfo.current}
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
                value={userinfo.city}
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
                value={userinfo.birthday}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Header;
