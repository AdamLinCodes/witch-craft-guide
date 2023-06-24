import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  title: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ title, link }) => {
  return (
    <Link href={link} className="border border-black rounded-lg bg-darkRed text-white m-2 p-8">
      {title}
    </Link>
  );
};

export default Button;
