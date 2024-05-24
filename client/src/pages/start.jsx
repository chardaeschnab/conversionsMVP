import React from "react";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <div className="flex flex-col justify-center items-center m-4 w-2/3">
          <div className="p-4 flex flex-col justify-center items-center bg-white bg-opacity-80 backdrop-blur-md shadow-sharp min-h-64">
            <div className="text-center leading-relaxed font-vercelli flex flex-col justify-center w-full">
              <Link to="/create">Create</Link>
              <Link to="/admin">Admin List</Link>
              <p className="text-3xl md:text-5xl font-semibold m-4">
                SO YOU NEED TO PAINT SOMETHING?!
              </p>
              <p className="m-4 text-xl font-bold tracking-wider">
                Let's Get Started!
              </p>
              <p className="font-bold tracking-wider text-2xl md:text-3xl">
                Choose Your Substrate below
              </p>
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div className="m-4 w-2/3 flex-grow">
          <div className="p-4 bg-white bg-opacity-50 backdrop-blur-md flex items-center justify-center shadow-sharp min-h-40">
            <div className="text-center leading-relaxed font-vercetti flex flex-col justify-center font-semibold tracking-widest text-l md:text-xl">
              <p>Follow me to paint some</p>
              <Link to="/steps/1">
                <div
                  className="p-4 font-extrabold text-3xl md:text-5xl inline-block drop-shadow-lg hover:scale-105 hover:text-orange-900"
                  style={{ textShadow: "0px 3px 5px rgba(124, 45, 18, 0.8)" }}
                >
                  STEEL
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from 'react';
// import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';

// export default function start() {

//   return (
//     <>
// <div className='h-screen flex flex-col justify-center items-center'>

//   <div className='grid grid-cols-4 grid-rows-8 gap-2 m-4 h-auto w-full'>
//     <div className='col-start-2 col-span-2 row-span-8 p-4 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-md shadow-sharp min-h-64' >
//       <div className='text-center leading-relaxed font-vercetti flex flex-col justify-center min-w-0'>
//         <p className='text-4xl md:text-6xl font-semibold m-4'  >SO YOU NEED TO PAINT SOMETHING?!</p>
//         <p className='m-4 text-2xl font-bold tracking-wider'>Let's Get Started!</p>
//         <p className='font-bold tracking-wider text-3xl flex flex-col justify-center'>Choose Your Substrate below</p>
//         <img src="" alt="" />
//       </div>
//     </div>
//   </div>

//   <div className='grid grid-cols-4 grid-rows-8 gap-2 m-4 h-auto w-full p-4'>
//     <div className='col-span-2 col-start-2 row-start-2 p-4 row-span-8 bg-white bg-opacity-50 backdrop-blur-md flex items-center justify-center shadow-sharp '>
//       <div className='text-center leading-relaxed font-vercetti flex flex-col justify-center font-semibold tracking-widest text-xl'>
//         <p className=''>Follow me to paint some</p>
//         <Link to="/steps/1">
//           <div className='font-extrabold text-2xl inline-block drop-shadow-lg hover:scale-200 hover:text-orange-900' style={{ textShadow: "0px 3px 5px rgba(124, 45, 18, 0.8)" }}>STEEL</div>
//         </Link>
//       </div>
//     </div>
//   </div>

// </div>

//     </>
//   )
// }
