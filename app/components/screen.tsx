'use client'
import { ReactNode, useState } from 'react';
import React from 'react';
import Image from 'next/image';

interface ScreenProps {
  title?: string;
  location?: string;
  children?: ReactNode;
}

const Screen: React.FC<ScreenProps> = ({title, location, children}) => {
  if (!title) title = "";
  if (!location) location = "/images/unselected.png";

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-1/2 border border-black flex justify-center items-center bg-white'>
        <Image className="w-64 m-2" src={location} alt="profile" width={1000} height={1000}/>

        <div>
          <h2 className="text-2xl">{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </div>
  )
};

export default Screen;
