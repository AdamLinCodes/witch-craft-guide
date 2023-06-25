import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  title: string;
  link?: string;
  onClick?: () => void;
  style: string;
}

const Button: React.FC<ButtonProps> = ({ title, link, onClick, style }) => {
  if (!link) link = "#";
  if (!onClick) onClick = () => {console.log('Happened!')};

  return (
    <Link href={link} className={style} onClick={onClick}>
      {title}
    </Link>
  );
};

export default Button;
