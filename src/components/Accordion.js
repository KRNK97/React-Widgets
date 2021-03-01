import React, { useState } from "react";
import "./App.css";

const Accordion = ({ items }) => {
  // useState hook to save selected item
  const [selectedItem, setItem] = useState(null);

  // item clicked helper function
  const itemClicked = (index) => {
    // console.log("title clicked", index);
    // if (index === selectedItem) {
    //   i. = "";
    // }
    setItem(index);
  };

  const i = items.map((item, index) => {
    const active = index === selectedItem ? "" : "inactive";
    const color = index === selectedItem ? "dark" : "muted";

    return (
      <div key={item.title} className="list-group-item shadow-sm mb-2 rounded w-50">
        <div
          className="d-flex align-items-start question"
          onClick={() => itemClicked(index)}
        >
          <i className={`fas fa-sort-down mr-2 text-${color}`}></i>
          <span
            className={`font-weight-bold text-${color} title h6`}
          >
            {item.title}
          </span>
        </div>

        <div className={`mx-3 ${active}`}>
          <p className="content">{item.content}</p>
        </div>
      </div>
    );
  });
  return <div className="">{i}</div>;
};

export default Accordion;
