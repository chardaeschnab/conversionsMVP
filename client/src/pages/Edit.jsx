import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

export default function Edit() {
  const [allSteps, setAllSteps] = useState([]);
  const [editedStep, setEditedStep] = useState("");
  const [fetchedStep, setFetchedStep] = useState("");
  const { id } = useParams();
  

  useEffect(() => {
    fetch(`/api/steps/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFetchedStep(data);
        setEditedStep(data.Description);
        console.log(data);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedData = { Description: editedStep };
    console.log("Edited data:", editedData);
    try {
      const url = `/api/steps/${id}`;
      console.log("Constructed URL", url);
      const response = await fetch(`/api/steps/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedData),
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen flex flex-col justify-center items-center p-4">
          <div className="flex flex-col justify-center items-center m-4 w-2/3">
            <div className="p-4 flex flex-col justify-center items-center bg-white bg-opacity-80 backdrop-blur-md shadow-sharp min-h-64">
              <div className="text-center leading-relaxed font-vercelli flex flex-col justify-center w-full">
                <h1>Current Step:</h1>
                <textarea
                  type="text"
                  id="title"
                  name="title"
                  placeholder={fetchedStep.Description}
                  value={editedStep}
                  onChange={(e) => {
                    setEditedStep(e.target.value);
                  }}
                />
                <button type="submit">Submit Edit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <DropdownMenu allSteps={allSteps} />
    </div>
  );
}
