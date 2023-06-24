import Button from './button';
export default function Navbar() {
  return (
    <div className="p-2">
      <Button title="Home" link="/"></Button>
      <Button title="Profiles" link="/profiles"></Button>
      <Button title="Christianity" link="/christianity"></Button>
      <Button title="Chronology of Monarchs" link="/monarchs-chronology"></Button>
    </div>
  )
}
