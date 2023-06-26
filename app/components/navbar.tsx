import Button from './button';
export default function Navbar() {
  return (
    <div className="h-16 flex flex-wrap">
      <Button title="Home" link="/" style="border border-black rounded-lg bg-darkRed text-white m-2 p-4"/>
      <Button title="Profiles" link="/profiles" style="border border-black rounded-lg bg-darkRed text-white m-2 p-4"/>
      <Button title="Christianity" link="/christianity" style="border border-black rounded-lg bg-darkRed text-white m-2 p-4"/>
      <Button title="Chronology of Monarchs" link="/monarchs-chronology" style="border border-black rounded-lg bg-darkRed text-white m-2 p-4"/>
      <Button title="Discussions" link="/discussions" style="border border-black rounded-lg bg-darkRed text-white m-2 p-4"/>
    </div>
  )
}
