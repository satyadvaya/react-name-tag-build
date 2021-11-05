import React from "react";
import PropTypes from "prop-types";

const Display = ({ greetingDisplay, nameDisplay }) => (
  <div>
    <p>{greetingDisplay}</p>
    <p>{nameDisplay}</p>
  </div>
);

Display.propTypes = {
  greetingDisplay: PropTypes.string.isRequired,
  nameDisplay: PropTypes.string.isRequired,
};

export default Display;
