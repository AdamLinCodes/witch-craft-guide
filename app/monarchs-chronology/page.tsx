'use client'
import { useState } from "react";
import Button from "../components/button"
import Image from 'next/image';
import Screen from "../components/screen";

export default function MonarchsChronologyPage() {
  const [photoLoc, setPhotoLoc] = useState('');
  const [title, setTitle] = useState('');

  const set1 = () => {
    setPhotoLoc("/images/HenryVII.jpg");
    setTitle("Henry VII");
  }
  const set2 = () => {
    setPhotoLoc("/images/HenryVIII.jpg");
    setTitle("Henry VIII");
  }
  const set3 = () => {
    setPhotoLoc("/images/EdwardVI.jpg");
    setTitle("Edward VI");
  }
  const set4 = () => {
    setPhotoLoc("/images/JaneGrey.webp");
    setTitle("Jane Grey");
  }
  const set5 = () => {
    setPhotoLoc("/images/MaryI.webp");
    setTitle("Mary I");
  }
  const set6 = () => {
    setPhotoLoc("/images/ElizabethI.jpg");
    setTitle("Elizabeth I");
  }
  const set7 = () => {
    setPhotoLoc("/images/KingJames.jpg");
    setTitle("James I of England");
  }
  const set8 = () => {
    setPhotoLoc("/images/KingCharles.jpg");
    setTitle("Charles I");
  }

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="font-garamond text-8xl">
        Monarchs Chronology Page
      </h1>


      <div className="flex flex-wrap">
        <Button title="Henry VII" onClick={set1} style="border border-black rounded-md rounded-md p-2 px-8 m-2"/>
        <Image className="w-16 m-2" src="/images/arrow.webp" alt="arrow" width={1000} height={1000}/>
        <Button title="Henry VIII" onClick={set2} style="border border-black rounded-md p-2 px-8 m-2"/>
        <Image className="w-16 m-2" src="/images/arrow.webp" alt="arrow" width={1000} height={1000}/>
        <Button title="Edward VI" onClick={set3} style="border border-black rounded-md p-2 px-8 m-2"/>
        <Image className="w-16 m-2" src="/images/arrow.webp" alt="arrow" width={1000} height={1000}/>
        <Button title="Jane Grey" onClick={set4} style="border border-black rounded-md p-2 px-8 m-2"/>
        <Image className="w-16 m-2" src="/images/arrow.webp" alt="arrow" width={1000} height={1000}/>
        <Button title="Mary I" onClick={set5} style="border border-black rounded-md p-2 px-8 m-2"/>
        <Image className="w-16 m-2" src="/images/arrow.webp" alt="arrow" width={1000} height={1000}/>
        <Button title="Elizabeth I" onClick={set6} style="border-4 border-white rounded-md p-2 px-8 m-2"/>
        <Image className="w-16 m-2" src="/images/arrow.webp" alt="arrow" width={1000} height={1000}/>
        <Button title="James I" onClick={set7} style="border-4 border-white rounded-md p-2 px-8 m-2"/>
        <Image className="w-16 m-2" src="/images/arrow.webp" alt="arrow" width={1000} height={1000}/>
        <Button title="Charles I" onClick={set8} style="border-4 border-white rounded-md p-2 px-8 m-2"/>
      </div>

      <Screen location={photoLoc} title={title}>
        Blah blash blash blah blah blah blah blah
      </Screen>
    </div>
  )
}
