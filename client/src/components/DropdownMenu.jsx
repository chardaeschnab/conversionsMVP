import React from "react";

function DropdownMenu({ allSteps, onSelectStep }) {
  return (
    <div className="dropdown-menu">
      <select name className="dropdown-list" onChange={onSelectStep}>
        {allSteps.map((step) => (
          <option key={step.id} value={step.id} className="dropdown-item">
            {step.Description}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownMenu;
