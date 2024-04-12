import React from 'react'
import Image from 'next/image'
import bulding from '../../assets/building-removebg-preview.png'


const Bulding = () => {
  return (
    <main className=' absolute top-16 -left-36 -z-0' >
        <Image src={bulding} alt="image"  className=' h-svh w-2/3 '/>
    </main>
  )
  
}

export default Bulding