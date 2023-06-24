'use client'
import { ReactNode, useState } from 'react';
import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  location: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({title, location, children}) => {
  const [expanded, setExpanded] = useState(false);

  const contentString = String(children);
  const words = contentString.split(' ');
  const selectedWords = words.slice(0, 50);
  const truncatedContent = selectedWords.join(' ') + "...";

  if (expanded) {
    return (
      <div className="m-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image className="rounded-t-lg w-full" src={location} alt={title} width={1000} height={1000}/>
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
  
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {children}
          </p>
          
          <a onClick={() => setExpanded(!expanded)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Collapse
          </a>
        </div>
      </div>
    );
  }

  else {
    return (
      <div className="m-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image className="rounded-t-lg w-full" src={location} alt={title} width={1000} height={1000}/>
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
  
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {truncatedContent}
          </p>
          
          <a onClick={() => setExpanded(!expanded)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
          </a>
        </div>
      </div>
    );
  }
};

export default Card;
