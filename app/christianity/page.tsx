'use client'
import Navbar from "../components/navbar";

export default function Christianity() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <Navbar/>
      
      <h1 className="font-garamond text-8xl">
        History of Christianity
      </h1>

      <div className="border-2 border-black bg-white rounded-lg p-8 w-4/5">
        <h2 className="text-2xl">Roman Catholicism</h2>
        <p>
          Catholic comes from the Greek Word katholikos meaning universal, as it was aimed to be
          the universal faith for all people.
        </p>
        <ul className="list-disc p-4">
          <li>Was/is the most popular of all the denominations</li>
          <li>Traces back to the early Christianity in Rome</li>
          <li>The Pope is considered the spiritual leader and head of the Roman Catholic Church</li>
          <li>Hierarchical structure with bishops, priests, and deacons</li>
          <li>Sacraments play a vital role in Roman Catholicism, including Baptism, Holy Eucharist, Confirmation, Penance, and others</li>
          <li>Mary as the Mother of God is an important aspect</li>
          <li>Churches often had stained class depicting biblical scenes and scripture</li>
          <li>Pulpit is typically located to the side, and is not as significant as the alter</li>
          <li>Will often have a rail tradionally serving as a separation between holiness and the congregation</li>
        </ul>
      </div><br/><br/>

      <div className="border-2 border-black bg-white rounded-lg p-8 w-4/5">
        <h2 className="text-2xl">Protestantism</h2>
        <p>
          Protestants have a diverse ragne of Christian denominations and religious perspectives. Protestanism revolves around
          Calvinist principles and was first establishe as a protest against catholicism: Protest-anism.
        </p>
        <ul className="list-disc p-4">
          <li>Grew in popularity after the Protestant Reformation movement in the 1500s</li>
          <li>Scripture was concidered the ultimate guide for faith, rather than tradition or interpretations</li>
          <li>Baptism and communion were considered important sacrements (ordinance) as they were seen as acts of faith</li>
          <li>No hierarchal structure, bar the minister. Protestants have more a congregational structure</li>
          <li>Services will have a lot more scripture readings, whereas other branches of Christianity might have more contemporary styles</li>
          <li>Pulpit is a heavily emphasized, usually a prominent feature. Typically located at the center of the stage</li>
          <li>Minimal decorations: plain walls, minimal art. Focus should be on the Word of God</li>
         </ul>
      </div><br/><br/>

      <div className="border-2 border-black bg-white rounded-lg p-8 w-4/5">
        <h2 className="text-2xl">Anglicanism</h2>
        <p>
          The Anglican Church also known as The Church of England was first created by King Henry VIII which people believed was driven
          by his desire to annul his marriage to Catherine of Aragon in the 1500s. 
        </p>
        <ul className="list-disc p-4">
          <li>Similarily to protestants, recognizes the authority of scripture</li>
          <li>However also recognizes the importance of tradition</li>
          <li>Anglicans allow for a degree of interpretation of scripture and teachings</li>
          <li>Affirms similar sacrements to those of catholicism: baptism, confirmation, eucharist, anointing the sick, etc. </li>
          <li>{`Theology of sacrements differs as Anglicanssee them as converying God's Grace, whereas catholics use them as primarily symbolic`}</li>
          <li>Architecture drew from both Catholic and Protestant styles</li>
          <li>Often contain depictions of biblical stories in the stained glass windows</li>
        </ul>
      </div><br/><br/>

      <hr/><br/><br/>

      <div className="border-2 border-black bg-white rounded-lg p-8 w-4/5">
        <h2 className="text-2xl">Terminology</h2>
        <ul className="p-4">
          <li><strong>Calvinism</strong> - theology created by french theologian John Calvin. Emphasizes on the sovereignty of God and the flaws of mankind</li>
          <li><strong>Reformation</strong> - Religious movement in the 1500s which ultimately led to the division of Christianity, and the establishment of other branches</li>
          <li><strong>Pulpit</strong> - A raised stand at the front of the congregation where the pastor will typically read his sermons</li>
          <li><strong>Eucharist</strong> - The body and blood of christ, typically bread and red wine as Jesus gave his disciples in the bible</li>
          <li><strong>Penance</strong> - confessing sins to a pastor; confession </li>
        </ul>
      </div>
    </div>
  )
}
