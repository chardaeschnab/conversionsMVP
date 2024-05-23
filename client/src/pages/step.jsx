import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Step() {
  const { id } = useParams();
  const [step, setStep] = useState({});

  useEffect(() => {
    fetch(`/api/steps/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStep(data);
      });
  }, [id]);

  function ButtonLink({ to, children }) {
    return (
      <Link to={to}>
        <button className="flex-1 m-2 p-4 bg-orange-700 opacity-100 text-white font-vercetti leading-relaxed tracking-widest hover:bg-orange-500 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          {children}
        </button>
      </Link>
    );
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-4xl p-4">
          <div className="min-h-96 m-4 p-8 bg-white bg-opacity-60 backdrop-blur-md shadow-sharp flex items-center justify-center ">
            <div className="font-vercetti text-xl">
              <p className="text-center text-4xl md:text-7xl m-4">
                {" "}
                {step.Description}{" "}
              </p>
            </div>
          </div>

          <div className="w-full mt-8">
            <div className="p-8 bg-white bg-opacity-85 shadow-sharp flex flex-wrap justify-center items-center gap-4">
              {step.Next_1 ? (
                <ButtonLink to={`/steps/${step.Next_1}`}>
                  {step.Text_1}
                </ButtonLink>
              ) : (
                <ButtonLink to={`/`}> ALL DONE!! </ButtonLink>
              )}
              {step.Next_2 ? (
                <ButtonLink to={`/steps/${step.Next_2}`}>
                  {step.Text_2}
                </ButtonLink>
              ) : (
                " "
              )}
              {step.Next_3 ? (
                <ButtonLink to={`/steps/${step.Next_3}`}>
                  {step.Text_3}
                </ButtonLink>
              ) : (
                " "
              )}
              <ButtonLink to={-1}>take me back</ButtonLink>
              <ButtonLink to={`/`}>home</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
