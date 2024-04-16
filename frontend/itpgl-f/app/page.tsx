'use client';
import React from 'react';
import Header from "./Components/header/page";
import Buttons from "./Components/buttons/page";
import Map from "./Components/map/page";
// import Video from './Components/video/page';




const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-end justify-center p-24 border-8 border-sky-500 overflow-hidden">
      <div className=' flex flex-col justify-center items-center'>
        <Header />
        <Buttons />
      </div>
        <Map />
        {/* <Video /> */}
    </main>
  );
}
export default Home;
