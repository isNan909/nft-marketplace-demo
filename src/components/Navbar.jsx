import { Link } from "react-router-dom";
import BrandLogo from "../assets/web3_planet_logo.svg"

const LINKS = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About",
    url: "/about",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];

function Navbar() {
  return (
    <header>
      <div className="container mx-auto flex justify-between py-7">
        <div>
          <img src={BrandLogo} alt="brand logo"/>
        </div>
        <div className="flex justify-between gap-12 items-center">
            <ul className="flex gap-8 items-center">
              {LINKS.map((item, index) => (
                <li key={index}>
                  <Link to={item.url} className="text-white">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          <div>
            <button className="shadow-xl shadow-black text-white bg-purple-600 hover:bg-purple-700 text-base py-2 px-4 rounded-full cursor-pointer">Connect a wallet</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
