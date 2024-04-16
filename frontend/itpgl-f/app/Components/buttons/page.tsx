'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import lamp1 from "../../assets/lamp1.png";
import lamp2 from "../../assets/lamp2.png";
import lamp3 from "../../assets/lamp3.png";
import lamp4 from "../../assets/lamp4.png";
import axios from "axios";




const Buttons = () => {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  

  //Osnovni
  const handleClick1 = () => {
    if(count1 === 0){
    axios.post("http://localhost:8080/arduino/command/1");
    count1 = 1;
  }
   else if(count1 === 1){
      axios.post("http://localhost:8080/arduino/command/6");
      count1 = 0;
  }

  console.log(count1);
}
  //Gradina
  const handleClick2 = () => {
    if(count2 === 0){
      axios.post("http://localhost:8080/arduino/command/2");
      count2 = 1;
    }
     else if(count2 === 1){
        axios.post("http://localhost:8080/arduino/command/7");
        count2 = 0;
    }
  };
 //Sotira
  const handleClick3 = () => {
    if(count3 === 0){
      axios.post("http://localhost:8080/arduino/command/3");
      count3 = 1;
    }
     else if(count3 === 1){
        axios.post("http://localhost:8080/arduino/command/8");
        count3 = 0;
    }
  };
  //Sgrada
  const handleClick4 = () => {
    if(count4 === 0){
      axios.post("http://localhost:8080/arduino/command/4");
      count4 = 1;
    }
     else if(count4 === 1){
        axios.post("http://localhost:8080/arduino/command/9");
        count4 = 0;
    }
  };
  //Vsi4ki
  const handleClickA = () => {
    if(count5 === 0){
      axios.post("http://localhost:8080/arduino/command/a");
      count5 = 1;
    }
     else if(count5 === 1){
        axios.post("http://localhost:8080/arduino/command/5");
        count5 = 0;
    }
  };



  return (
    <div className=" z-10">
      <div className="join flex justify-center items-center pb-8 mr-4">
        
        <button className="btn join-item h-24 w-32 bg-white border-none" onClick={handleClick1}>
          <div className= " flex flex-col justify-center items-center">
            <Image src={lamp1} alt="image" width="56" height="24" />
            <h1 className=" mr-4 mt-1">Основни</h1>
          </div>
        </button>

        <button className="btn join-item h-24 w-32 bg-white border-none" onClick={handleClick2}>
          <div className= " flex flex-col justify-center items-center">
            <Image src={lamp2} alt="image" width="56" height="24" />
            <h1 className=" mr-4 mt-1">Градина</h1>
          </div>
        </button>

        <button className="btn join-item h-24 w-32 bg-white border-none" onClick={handleClick3}>
          <div className=" flex flex-col justify-center items-center">
            <Image src={lamp3} alt="image" width="56" height="24" />
            <h1 className=" mt-1">Сотира</h1>
          </div>
        </button>

        <button className="btn join-item h-24 w-32 bg-white border-none" onClick={handleClick4}>
          <div className=" flex flex-col justify-center items-center">
            <Image src={lamp4} alt="image" width="56" height="24" />
            <h1 className=" mt-1">Сграда</h1>
          </div>
        </button>
        <button className="btn join-item h-24 w-32 bg-white border-none" onClick={handleClickA}>
          <div className=" flex flex-col justify-center items-center">
            <Image src={lamp3} alt="image" width="56" height="24" />
            <h1 className=" mt-1">Всички</h1>
          </div>
        </button>

       

      </div>
    </div>
  );
};

export default Buttons;
