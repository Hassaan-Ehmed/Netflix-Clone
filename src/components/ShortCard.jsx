import React from 'react';
import { LuDownload } from "react-icons/lu";

const Cards = () => {
  return (
    <>
     <div className="h-fit w-fit flex flex-col gap-4 items-center justify-center bg-black rounded-xl absolute bottom-4">

      {/* Card 2 */}
      <a className="w-[20rem] border-2 rounded-xl 50 border-stone-500">
        <div className="grid grid-cols-6 p-3 gap-y-2">

          {/* Profile Picture */}
          <div className='rounded-full'>
            <img src="/images/short-card-prof-pic.png" className="max-w-12 max-h-12" alt="Profile" />
          </div>

          {/* Description */}
          <div className="col-span-5 md:col-span-4 ml-4">
            <p className="text-white font-bold">Stranger Things</p>
            <p className="text-blue-600">Downloading....</p>
          </div>

          {/* Price */}
          <div className="flex col-start-9 h-full">
            <p className="rounded-lg text-white font-bold  py-1 px-3 text-2xl w-fit h-fit mt-2 "> 
            
            <LuDownload/>
            </p>
          </div>

        </div>
      </a>

     </div>
    </>
  );
};

export default Cards;
