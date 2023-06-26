'use client'

import Card from "../components/profileCard";
import Navbar from "../components/navbar";

export default function ProfilesPage() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Navbar/>

      <h1 className="font-garamond text-8xl">
        Profiles Page
      </h1>

      <div className="font-garamond text-2xl border-2 border-black bg-white rounded-lg p-8 w-4/5">
        This page is offered as somewhat of a character-sheet of the time. Below are some of the most 
        notable people connected to witchcraft during the 1500-1700s. Click on any of the cards to read 
        more about them.
      </div>

      <div className="flex flex-wrap p-2 w-5/6">
        <Card title="King James" location="/images/KingJames.jpg">
          {
            `
            King James I of England, previously King James VI of Scotland Reigned from 1567 to 1625, which was 
            during the peak of witchcraft in Britain. King James was also very well known for his involvement in 
            the translation of the bible. KJV (King James Version) is one of the most popular translations of 
            the ancient script used today. In the context of witchcraft, James was infamous for his extreme 
            beliefs in witches. James believed in the Swimming Test; something that was controversial even at the 
            time, and even published a book titled Daemonology which was written to provide a theological and 
            philosophical perspective on witchcraft. One could infer that one of the many reasons witchcraft 
            trials were so prolific at the time, was because of James’ involvement.
            `
          }
        </Card>

        <Card title="King Charles" location="/images/KingCharles.jpg">
          {
            `
            King Charles I of England, Scotland, and Ireland reigned 1625 until his execution in 1649. Charles 
            was most known for his conflicts with Parliament, which ultimately led to the English Civil War, 
            which ultimately led to his death. One of Charles I’s most controversial beliefs was the divine 
            right of kings. He believed Kings should be able to do whatever they want, without the consultation 
            of parliament. During this era of “Personal Rule”, Charles attempted to impose Anglican practices 
            in Scotland which was predominantly Presbyterian. All in all, Charles ignored the concerns of his 
            people, which likely led to his demise. 
            `
          }
        </Card>

        <Card title="Reginald Scot" location="/images/ReginaldScot.jpg">
          {
            `
            Reginald Scot was an English author who lived from 1538 to 1599. Scot was most known for his 
            pamphlet on witchcraft titled “The Discovery of Witchcraft”, which was considered very unchristian, 
            as he attempts to debunk the myth of witches by sharing the way common tricks are done. In his 
            writings, Scot argues that so-called witches are simply victims to our fear, ignorance, and 
            superstition. Though not very accepted directly at the time, Reginald Scot provided people solid 
            reasons as to why witchcraft was a blight on society, and helped Britain move on.
            `
          }
        </Card>

        <Card title="William Perkins" location="/images/WilliamPerkins.jpg">
          {
            `
            William Perkins was an English theologian and author who lived from 1558 to 1602. Perkins strongly 
            believed in the sovereignty of God, and condemned witchcraft as it was in league with the devil; 
            which most of the population did at the time. He addresses his beliefs in his pamphlet “Good and 
            Bad Witches, 1608”. His writings were widely respected and even had the admiration of King James. 
            Perkins is often compared and contrasted against Reginald Scot, as their writings were both popular 
            around the same time, yet contained very opposite content.
            `
          }
        </Card>

        
        <Card title="Henry Goodcole" location="/images/HenryGoodcole.jpg">
          {
            `
            Henry Goodcole was a minister, and most known for his involvement in the trial of Elizabeth Sawyer, 
            a woman who was found guilty of witchcraft and executed. Goodcole transcribed the trial, and spoke 
            directly with Sawyer after her verdict. Goodcole wrote all these things down in his pamphlet “The 
            Wonderful Discovery of Elizabeth Sawyer”, an exploration and analysis from the viewpoint of Henry 
            Goodcole.
            `
          }
        </Card>

        
        <Card title="Elizabeth Sawyer" location="/images/ElizabethSawyer.jpg">
          {
            `
            Elizabeth Sawyer lived in a village called Edmonton, Middlesex. Sawyer lived a difficult life as she
             was an elderly, widowed, impoverished woman which ostracised her from her community. She was 
             accused of witchcraft, specifically she was accused of casting spells, cursing animals, manipulating
              the weather, and causing illness to children. Her trial was very widespread, and very public. 
              Ultimately, she confessed to the bulk of the crimes levied against her, which Henry Goodcole 
              records in his pamphlet “The Wonderful Discovery of Elizabeth Sawyer”. After her death, she was 
              still widely discussed by the people. Shortly after a play was written about the trial titled the 
              “The Witch of Edmonton” whereby it is heavily implied that her verdict was attributed to the 
              ignorance sins of others.
            `
          }
        </Card>
      </div>
    </div>
  )
}
