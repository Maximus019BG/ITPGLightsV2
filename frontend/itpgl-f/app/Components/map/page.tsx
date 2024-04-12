import React from 'react'
import Image from 'next/image'
import map from '../../assets/google-map.jpg'


const Map = () => {
  return (
    <main className=' z-10'>
        <Image src={map} alt="image" width="650" height="0" className=' absolute bottom-48 right-64'/>
    </main>
  )
  
}

export default Map