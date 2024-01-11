import React, { useState } from "react";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import "./styles.css";

const Login = () => {
  const [tb, setTb] = useState("");
  const { login, islogin } = useAuth();
  const navigate = useNavigate();
  let first = false;
  const onFinish = async (values) => {
    try {
      const loginpost = await axios.post(
        "https://backendsever-61gd.onrender.com/login",
        values
      );
      const checkfirst = await axios.post(
        "https://backendsever-61gd.onrender.com/infouser",
        {
          id: loginpost.data.data._id,
        }
      );
      if (checkfirst.data.data.Name == "Default") first = true;
      login_info(loginpost.data);
      login(loginpost.data.data, loginpost.data.token);
    } catch (error) {
      login_info(error.response.data);
    }
  };

  const login_info = (loginpost) => {
    if (loginpost.message === "User logged in successfully") {
      setTb("");
      Swal.fire({
        title: "Login Success!",
        text: "Go to home",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        if (first) navigate("/first").preventDefault();
        else navigate("/").preventDefault();
      });
    } else {
      setTb(loginpost.message);
      Swal.fire({
        title: loginpost.message,
        text: "Continue Register",
        icon: "error",
      });
    }
  };

  const validatePasswordLength = (rule, value, callback) => {
    if (value && value.length < 8) {
      callback("Password must be at least 8 characters long!");
    } else {
      callback();
    }
  };

  const handleButtonHover = () => {
    setButtonColor("#800");
  };

  const handleButtonLeave = () => {
    setButtonColor("#f00");
  };

  const [buttonColor, setButtonColor] = useState("#f00");

  return (
    <div className="parent-container">
      <div className="first-container">
        <div className="logo">
          <h1>
            Welcome to{" "}
            <span className="logo-text">
              <img
                className="logo-size"
                src="https://itviec.com/assets/logo_black_text-04776232a37ae9091cddb3df1973277252b12ad19a16715f4486e603ade3b6a4.png"
                alt="Logo"
              />
            </span>
          </h1>
        </div>
        <Form
          name="normal_login"
          className="email-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
              {
                required: false,
                message: {
                  message: "User or password not right",
                },
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              { validator: validatePasswordLength },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              visibilityToggle={false}
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item>
            <div className="forgot-password">
              <Link to="/">Forgot password</Link>
            </div>
          </Form.Item>
          <Form.Item>
            <div className="red">{tb}</div>
            <Button
              type="primary"
              htmlType="submit"
              className="email-btn"
              style={{
                backgroundColor: buttonColor,
                borderColor: buttonColor,
                transition: "background-color 0.3s, border-color 0.3s",
              }}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Log in
            </Button>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
      <div className="second-container">
        <h2>
          Sign in to get instant access to thousands of reviews and salary
          information
        </h2>
        <ul className="bullet-points">
          <li>View salary to help you negotiate your offer or pay rise</li>
          <li>
            Find out about benefits, interview, company culture via reviews
          </li>
          <li>Easy apply with only 1 click</li>
          <li>Manage your own profile & privacy</li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
