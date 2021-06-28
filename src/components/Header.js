import PropTypes from "prop-types";

import Button from "./Button";
const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} color="darkcyan" text="new topic" />
    </div>
  );
};

Header.defaultProps = {
  title: "Forum Preview",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
