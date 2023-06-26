'use client'

import Navbar from "../components/navbar";

export default function DiscussionsPage() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Navbar/>
      <h1 className="font-garamond text-8xl">
        Discussions Page
      </h1>
      <p className="bg-darkRed text-white p-2 w-3/4 rounded-lg border border-black m-2 text-2xl">Feel free to come start a discussion here. It can be a statement, a question, or even just a fun fact!</p>

      <div className="border-2 border-black bg-white rounded-lg p-8 w-4/5">
        <h2 className="text-2xl">{`"Keep an open mind" - Professor David Dean`}</h2>
        <br/>
        {
          `
          It is easy to say: “How could people be so cruel and stupid” when talking about Witchcraft from a perspective of five hundred years later. Knowing what we know now, and with Christianity in decline, it is easy to realize that all the people who were convicted of witchcraft were obviously innocent. Professor David Dean of Carleton University told us on our first day that it is crucial we have an open mind about this subject, that we make a serious effort to understand the context of the time and perspective of the people so that we succeed in the course. Dean is absolutely correct, without perspective and context, one cannot hope to analyze the sources unbiased, and the historic lessons will be lost. 
          `
        }
      </div><br/><br/>
      
      <div className="border-2 border-black bg-white rounded-lg p-8 w-4/5">
        <h2 className="text-2xl">Mentality during the 16th and 17th century</h2>
        <br/>
        {
          `
          I believe that the main reason that witchcraft trials became so prolific at the time was largely due to unfortunate circumstances that affected the people. One of the characteristics of witchcraft, and one charges levied against Elizabeth Sawyer, was the manipulation of weather. Famine was very common in the 1500s - 1600s, and bad weather resulted in bad crops, resulting in more famine. Additionally, there were so many illnesses present such as malaria, smallpox, and leprosy. People were starving and sick, and believed it could not be God doing this to them, so they were looking for someone to blame.
          `
        }
      </div>
      <br/><br/>

      <div className="border-2 border-black bg-white rounded-lg p-8 w-4/5">
        <h2 className="text-2xl">{`James I vs. James VI`}</h2>
        <br/>
        {
          `
          Hey guys! I'm a just a little confused about something I was hoping someone could clarify. Are James I and James VI different people?
          `
        }

        
        <div className="border-2 border-black bg-white rounded-lg p-8 w-4/5">
          <h2 className="text-2xl">{`Reply`}</h2>
          {
            `
            Heyo! I was confused about the same thing. Yes, same guy. He was James I of Scotland, since Virgin Queen had no children, he was the closest relative to the throne because he was the great-great-grandson of Henry VII. Hope this helps :)
            `
          }
        </div>
      </div>
    </div>
  );
}