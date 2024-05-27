import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";

export default function Edit() {
  const [allSteps, setAllSteps] = useState([]);
  const [step, setStep] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/steps/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStep(data);
      });
  }, []);

  useEffect(() => {
    fetch("/api/steps")
      .then((res) => res.json())
      .then((data) => {
        setAllSteps(data);
      });
  }, []);

  const handleSelectStep = (event) => {
    console.log("Selected StepID:", event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/steps/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(step),
      });
      if (response.ok) {
        console.log("Successful update!");
      } else {
        console.error("Oops, error."(error));
      }
    } catch (error) {
      console.error("Error submitting edit");
    }
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setStep((state) => ({ ...state, [name]: value }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen flex flex-col justify-center items-center p-4">
          <div className="flex flex-col justify-center items-center m-4 w-2/3">
            <div className="p-4 flex flex-col justify-center items-center bg-white bg-opacity-80 backdrop-blur-md shadow-sharp min-h-64">
              <div className="text-center leading-relaxed font-vercelli flex flex-col justify-center w-full">
                <h1>Current Step (to be edited):</h1>

                <textarea
                  type="text"
                  id="Description"
                  name="Description"
                  value={step.Description}
                  onChange={handleInputChange}
                />
                <br />
                <h5>Next step in process:</h5>
                <select
                  className="dropdown-list"
                  onChange={handleInputChange}
                  name="Next_1"
                  value={step.Next_1}
                >
                  {allSteps.map((step) => (
                    <option
                      key={step.id}
                      value={step.id}
                      className="dropdown-item"
                    >
                      {step.Description}
                    </option>
                  ))}
                </select>
                <br />
                <br />
                <textarea
                  type="text"
                  id="Text_1"
                  name="Text_1"
                  value={step.Text_1}
                  onChange={handleInputChange}
                />
                <button type="submit">Submit Edit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <button>TESTING</button>
    </div>
  );
}
