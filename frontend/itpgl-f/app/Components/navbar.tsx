'use client'
import React, {useEffect,useState} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import profile from '../images/profilePic.png';

const NavBar: React.FC = () => {
  const router = useRouter();
  const [admin, setAdmin] = useState(false);


  useEffect(() => {
    const name = localStorage.getItem('name');
    if (name === 'Admin' || name === 'admin' || name === 'ADMIN' ) {
      setAdmin(true);
    }
  }, []);

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className='z-20 flex items-center justify-center w-screen pb-3 bg-white shadow-sm dark:bg-gray-800 shadow-slate-300 '> 
      <div className='flex items-center mx-auto mt-3 space-x-8 font-sans font-bold text-black uppercase text-md dark:text-white md:space-x-36 md:text-sd sm:space-x-16'>
        <h1 className='cursor-default nav' onClick={() => navigateTo('/land')}>Начало</h1>
        <h1 className='cursor-default nav' onClick={() => navigateTo('/home')}>Събития</h1>
        <h1 className='cursor-default nav' onClick={() => navigateTo('/create')}>Създай</h1>        
        {admin && <h1 className='cursor-default nav' onClick={() => navigateTo('/admin')}>Администрация</h1> || <h1 className='cursor-default nav' onClick={() => navigateTo('/user')}>Профил</h1>}
      </div>
    </div>
  );
};

export default NavBar;