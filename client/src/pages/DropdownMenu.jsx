import React from "react";

function DropdownMenu({ allSteps, onSelectStep, name }) {
  return (
    <div className="dropdown-menu">
      <div>Hello</div>
      <button className="dropdown-toggle">See all steps here</button>

      <ul className="dropdown-list">
        console.log(allSteps)
        {/* {allSteps.map((step) => (
          <li
            key={step.id}
            className="dropdown-item"
            onClick={() => onSelectStep && onSelectStep(step.id)}
          >
            {step.Description}
            console.log(allSteps)
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default DropdownMenu;
