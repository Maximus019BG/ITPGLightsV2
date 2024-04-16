'use client';
import React from 'react';
import Header from "./Components/header/page";
import Buttons from "./Components/buttons/page";
import Map from "./Components/map/page";
import Video from './Components/video/page';




const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-end justify-center p-24 overflow-hidden mr-16 ">
      <div className=' flex flex-col justify-center items-center mt-10'>
        <Header />
        <Buttons />
        <Map />
      </div>
        
        <div className=' flex justify-start items-center'>
          <Video />
        </div>
        
    </main>
  );
}
export default Home;
