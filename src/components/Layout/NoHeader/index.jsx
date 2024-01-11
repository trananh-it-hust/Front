import PropTypes from "prop-types";

const NoHeader = ({ children }) => {
  return (
    <div>
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};
NoHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NoHeader;
