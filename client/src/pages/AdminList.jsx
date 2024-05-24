import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AdminList() {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch("/api/steps")
      .then((res) => res.json())
      .then((data) => {
        setSteps(data);
      });
  }, []);

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <div className="flex flex-col justify-center items-center m-4 w-2/3">
          <div className="p-4 flex flex-col justify-center items-center bg-white bg-opacity-80 backdrop-blur-md shadow-sharp min-h-64">
            <div className="text-center leading-relaxed font-vercelli flex flex-col justify-center w-full">
              <h2>
                <em>List of steps</em>
              </h2>
              {steps.map((step) => (
                <div key={step.id}>
                  {" "}
                  <div
                    key={step.id + "edit"}
                    className="admin-list-button"
                    onClick={() => console.log(`Step id: ${step.id}`)}
                  >
                    {step.Description}
                  </div>
                  <Link
                    to={`/steps/${step.id}/edit`}
                    onClick={() =>
                      console.log(`Generated URL: steps${step.id}/edit`)
                    }
                  >
                    <button className="edit-button">EDIT</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
