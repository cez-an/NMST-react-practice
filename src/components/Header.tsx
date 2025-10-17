import logo from "../assets/icon/logo.svg"

function Header() {
  return (
    <div className="bg-gray-200 p-2 flex items-center justify-between ">
        <img src={logo} alt="logo" className="w-[20px] ml-3" />
        <ul className="flex gap-3">
          <li>jksaf</li>
          <li>sdf</li>
          <li>sdf</li>
          <li>sdf</li>
          <li>sdfs</li>
        </ul>
        <div className="gap-2 flex">
          <p>Sign Up</p>
          <p>Logout</p>
        </div>
    </div>
  )
}

export default Header