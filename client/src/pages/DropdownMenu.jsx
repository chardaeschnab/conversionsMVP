import React from "react";

const DropdownMenu = ({allSteps, onSelectStep}) => {
  return (
    <div className="dropdown-menu">
      <button className="dropdown-toggle">See all steps here</button>
      <ul>
        {allSteps.map((step) => (
          <li key={step.id} onClick={() => onSelectStep && onSelectStep(step.id)}>{step.Description}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
