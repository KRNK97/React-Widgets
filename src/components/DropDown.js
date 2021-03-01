import React from "react";
import "./App.css";

const DropDown = ({ options, color, setColor }) => {
  const renderedOptions = options.map((option) => {
    return (
      <div
        class="dropdown-item option"
        key={option.value}
        onClick={() => setColor(option)}
      >
        {option.name}
      </div>
    );
  });

  return (
    <React.Fragment>
      <span className="d-block ml-1 text-muted">Select a color</span>

      <div class="btn-group">
        <button
          type="button"
          class={`btn btn-${color.code} dropdown-toggle`}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {color.name}
        </button>
        <div class="dropdown-menu">{renderedOptions}</div>
      </div>
    </React.Fragment>
  );
};

export default DropDown;
