import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const registerpost = await axios.post(
        "https://backendsever-61gd.onrender.com/register",
        values
      );
      register_info(registerpost.data);
    } catch (error) {
      register_info(error.response.data);
    }
  };

  const register_info = (registerpost) => {
    if (registerpost.message === "User created successfully") {
      Swal.fire({
        title: "Register Success!",
        text: "Go to Login",
        icon: "success",
        confirmButtonText: "OK",
      }).then((res) => {
        if (res.isConfirmed) navigate("/login");
      });
    } else {
      Swal.fire({
        title: registerpost.message,
        text: "Continue Register",
        icon: "error",
      });
    }
  };

  const [buttonColor, setButtonColor] = useState("#f00");

  const handleButtonHover = () => {
    setButtonColor("#800");
  };

  const handleButtonLeave = () => {
    setButtonColor("#f00");
  };

  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const validatePasswordLength = (rule, value, callback) => {
    if (value && value.length < 8) {
      callback("Password must be at least 8 characters long!");
    } else {
      callback();
    }
  };

  return (
    <div className="register-container">
      <div className="logo-container">
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
      <div className="form-container">
        <Form name="registration_form" onFinish={onFinish} scrollToFirstError>
          <Form.Item
            name="userName"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not a valid e-mail address!",
              },
              {
                required: true,
                message: "Please input your e-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              { validator: validatePasswordLength },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="role"
            label="Account"
            rules={[
              {
                required: true,
                message: "Please input your role!",
              },
            ]}
          >
            <Radio.Group onChange={handleRadioChange} value={selectedValue}>
              <Radio value="individual">Individual</Radio>
              <Radio value="business">Business</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <div className="register-button">
              <Button
                className="red-button"
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: buttonColor,
                  borderColor: buttonColor,
                  transition: "background-color 0.3s, border-color 0.3s",
                }}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                Register
              </Button>
              Already have an account? <Link to="/login">Sign In Now!</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
