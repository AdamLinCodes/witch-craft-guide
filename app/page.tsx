'use client'

import Navbar from "./components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Navbar/>

      <h1 className="font-garamond text-8xl">
        Witches and Witchcraft in Britain 1500 - 1700
      </h1>

      <div className="font-garamond text-2xl border-2 border-black bg-white rounded-lg p-8 w-4/5">
        Welcome all! For those of you are in the same situation that I was, wherein I was enrolled in a course title Witches and 
        Witchcraft in Britain 1500 - 1700, or as we often refer to it: Witches and Witchcraft in Early-Modern Britain, you may be 
        experience a great deal of difficulty managing the historical overhead and intricacies of the stories. Whether that’d be 
        keeping track of who was in power, understanding the different branches of Christianity, popular pamphlets, etc. Knowing 
        as many of the aspects of witches and witchcraft and early-modern Britain are crucial for students who want to understand 
        the context, and therefore be able to talk about this subject.
      </div>
      <br/><br/>

    </div>
  );
}
