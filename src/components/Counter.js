import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const onClickHandler = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <button onClick={onClickHandler} className="btn btn-sm btn-success mt-2">
        Click Me
      </button>
      <h1 className="display-4">{value}</h1>
    </div>
  );
};

export default Counter;
