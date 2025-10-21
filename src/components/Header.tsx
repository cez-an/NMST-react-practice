import logo from "../assets/icon/logo.svg"
import { Button } from "./Button"

function Header() {
  return (
    
    <>
    <div className=" w-screen bg-gray-200/50 p-2.5 flex items-center justify-between">
        <img src={logo} alt="logo" className="w-[20px] ml-3" />
        <ul className="flex gap-9">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="gap-2 flex mr-3">
          <Button btname="login" class="bg-blue-400/20"/>
          <Button btname="Sign Up" class="bg-green-400/20"/>
        </div>
    

    </div>
          
    </>
  )
}

export default Header