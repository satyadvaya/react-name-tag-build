import React from "react";
import PropTypes from "prop-types";

const Controls = ({ greetingControl, nameControl }) => (
  <form>
    <label>
      Greeting:
      <input
        name="greeting"
        type="text"
        aria-label="greeting"
        onChange={greetingControl}
      />
    </label>

    <br />

    <label>
      Name:
      <input name="name" type="text" aria-label="name" onChange={nameControl} />
    </label>
  </form>
);

Controls.propTypes = {
  greetingControl: PropTypes.func.isRequired,
  nameControl: PropTypes.func.isRequired,
};

export default Controls;
