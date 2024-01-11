import Header from "./Header";
import Sidebar from "./Sidebar";
import "./styles.scss";
import FormPost from "./Sidebar/components/FormPost";
import { useState } from "react";

import PropTypes from "prop-types";

const DefaultLayout = ({ children }) => {
  const [showForm, setShowForm] = useState(false);

  const handleInputForm = () => {
    // Khi người dùng click vào input, đặt trạng thái của showForm thành true
    setShowForm(true);
  };

  const clickHiddenForm = () => {
    setShowForm(false);
  };

  return (
    <main>
      <FormPost
        className="form-post"
        clickHiddenForm={clickHiddenForm}
        showForm={showForm}
      />
      <div className={showForm ? "blurred" : "main"}>
        <Header />
        <div className="post-input">
          <input
            onClick={handleInputForm}
            className="clickShowPopup"
            placeholder="What do you want to post?"
          />
        </div>
        <div className="main-container">
          <Sidebar className="sidebar" />
        </div>
      </div>
    </main>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
