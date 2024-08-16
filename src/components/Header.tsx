import CompanyLogo from "../assets/SaaslogoResized.png";
import { Button } from "./ui/button";
function Header() {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center border-4 border-blue-700">
          {/* Company Logo */}
          <a className="border-4 border-red-700 " href="/">
            <img
              src={CompanyLogo}
              alt="CompanyLogo"
              className="h-[100px] w-auto"
            />
          </a>
          {/* Middle Navbar */}
          <div className="flex gap-4">
            <a
              href="/"
              className="text-gray-600 hover:text-black transition duration-200"
            >
              About us
            </a>
            <a
              href="/"
              className="text-gray-600 hover:text-black transition duration-200"
            >
              Features
            </a>
            <a
              href="/"
              className="text-gray-600 hover:text-black transition duration-200"
            >
              Pricing
            </a>
          </div>
          {/* Login + Sign up buttons */}
          <div className="flex gap-4">
            <Button className="font-bold">Login</Button>
            <Button className="font-bold">Sign Up</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
//border-4 border-red-700
//border-4 border-green-700
