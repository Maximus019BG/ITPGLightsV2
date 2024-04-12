import React from "react";
import Image from "next/image";
import lamp1 from "../../assets/lamp1.png";
import lamp2 from "../../assets/lamp2.png";
import lamp3 from "../../assets/lamp3.png";
import lamp4 from "../../assets/lamp4.png";

const Buttons = () => {
  return (
    <main className=" z-10">
      <div className="join mb-96 ml-96 ">
        <button className="btn join-item h-24 w-32 bg-white border-none">
          <a href="" className= " flex flex-col justify-center items-center">
            <Image src={lamp1} alt="image" width="56" height="24" />
            <h1 className=" mr-4 mt-1">Основни</h1>
          </a>
        </button>
        <button className="btn join-item h-24 w-32 bg-white border-none">
          <a href="" className= " flex flex-col justify-center items-center">
            <Image src={lamp2} alt="image" width="56" height="24" />
            <h1 className=" mr-4 mt-1">Градина</h1>
          </a>
        </button>
        <button className="btn join-item h-24 w-32 bg-white border-none">
          <a href="" className=" flex flex-col justify-center items-center">
            <Image src={lamp3} alt="image" width="56" height="24" />
            <h1 className=" mt-1">Сотира</h1>
          </a>
        </button>
        <button className="btn join-item h-24 w-32 bg-white border-none">
          <a href="" className=" flex flex-col justify-center items-center">
            <Image src={lamp4} alt="image" width="56" height="24" />
            <h1 className=" mt-1">Сграда</h1>
          </a>
        </button>
      </div>
    </main>
  );
};

export default Buttons;
