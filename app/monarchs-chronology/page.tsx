'use client'
import { useState } from "react";
import Button from "../components/button"
import Image from 'next/image';
import Screen from "../components/screen";
import Navbar from "../components/navbar";

export default function MonarchsChronologyPage() {
  const [photoLoc, setPhotoLoc] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('Start by selected one of the above monarchs');

  const set1 = () => {
    setPhotoLoc("/images/HenryVII.jpg");
    setTitle("Henry VII");
    setText("First of the House of Tudor to become king. Reigned from 1485-1509. Predecessor was Richard III, and successor was Henry VIII.");
  }
  const set2 = () => {
    setPhotoLoc("/images/HenryVIII.jpg");
    setTitle("Henry VIII");
    setText("Best known for his 6 marriages and creation of the Church of England. Reigned from 1509-1547. Predecessor was Henry VII, and successor was Edward VI.");
  }
  const set3 = () => {
    setPhotoLoc("/images/EdwardVI.jpg");
    setTitle("Edward VI");
    setText("Crowned in 1547 at the age of 9, and died at the age 15. Reigned from 1547-1553. Predecessor was Henry VIII, and successor was Jane Grey.");
  }
  const set4 = () => {
    setPhotoLoc("/images/JaneGrey.webp");
    setTitle("Jane Grey");
    setText("Famously known as the Nine Day's Queen. Reigned briefly in 1553. Predecessor was Edward VI, and successor was Mary I.");
  }
  const set5 = () => {
    setPhotoLoc("/images/MaryI.webp");
    setTitle("Mary I");
    setText("Cruely known as Bloody Mary for burning hundreds of her protestant heretics at the stake. Predecessor was Jane Grey, and successor was Elizabeth I.");
  }
  const set6 = () => {
    setPhotoLoc("/images/ElizabethI.jpg");
    setTitle("Elizabeth I");
    setText("Commonly known as the Virgin Queen as she never married nor borne children. Predecessor was Mary I, James I.");
  }
  const set7 = () => {
    setPhotoLoc("/images/KingJames.jpg");
    setTitle("James VI and I");
    setText("A firm believer in witchcraft, after a visit to Denmark which sparked an interest in the subject. Predecessor was Elizabeth I, and successor was Charles I.");
  }
  const set8 = () => {
    setPhotoLoc("/images/KingCharles.jpg");
    setTitle("Charles I");
    setText("Famously provoked his people to revolt, leading to his execution. The only English monarch to be tried and executed for treason. Predecessor was James VI and I, and successor was Charles II.");
  }

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Navbar/>
      
      <h1 className="font-garamond text-8xl">
        Monarchs Chronology Page
      </h1>

      <p className="bg-darkRed text-white p-2 w-3/4 rounded-lg border border-black m-2 text-2xl">
        Use this page to help yourself manage the chronology of the monarchs. The white ones have been highlighted as they were closer to when this course focuses on
      </p>

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
        {text}
      </Screen>
    </div>
  )
}
