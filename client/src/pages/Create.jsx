import React from "react";
import { useState } from "react";

export default function Create() {
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState([]);

  async function Submission() {
    try {
      const result = await fetch("/api/steps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Description: description }),
      });
      const step = await result.json();
      console.log(steps);
      setSteps(steps);
    } catch (err) {
      console.log({ message: err });
    }
    setDescription("");
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <div className="flex flex-col justify-center items-center m-4 w-2/3">
          <div className="p-4 flex flex-col justify-center items-center bg-white bg-opacity-80 backdrop-blur-md shadow-sharp min-h-64">
            <div className="text-center leading-relaxed font-vercelli flex flex-col justify-center w-full">
              <h2>
                <em>This page is for ADMIN eyes only</em>
              </h2>
              <br />
              <br />
              <input
                placeholder="add step here"
                text="text"
                value={description}
                onChange={(e) => handleDescriptionChange(e)}
              ></input>
              <button
                class="bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700"
                onClick={(event) => Submission(event)}
              >
                Submit Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
