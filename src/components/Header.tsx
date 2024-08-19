import { useState } from "react";
import CompanyLogo from "../assets/SaaslogoResized.png";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";

function Header() {
  const [isDropdowOpen, setIsDropdowOpen] = useState(false);

  return (
    <section className="sticky top-0">
      <div className="container  border-green-600 border-4">
        <div className="flex justify-between items-center">
          {/* Company Logo */}
          <div className="flex-1">
            <a href="/">
              <img
                src={CompanyLogo}
                alt="CompanyLogo"
                className="h-[100px] w-auto"
              />
            </a>
          </div>
          {/* Middle Navbar */}
          <nav className="hidden md:flex-1 md:flex justify-center gap-4 lg:gap-7 border-4 border-red-600">
            <Button
              variant="linkHover2"
              className="text-gray-600 hover:text-black transition duration-200"
            >
              <a href="/" className="lg:text-lg md:text-md">
                About us
              </a>
            </Button>

            <Button
              variant="linkHover2"
              className="text-gray-600 hover:text-black transition duration-200"
            >
              <a href="/" className="lg:text-lg md:text-md">
                Features
              </a>
            </Button>
            <Button
              variant="linkHover2"
              className="text-gray-600 hover:text-black transition duration-200"
            >
              <a href="/" className="lg:text-lg md:text-md">
                Pricing
              </a>
            </Button>
          </nav>
          {/* Login + Sign up buttons */}
          <div className="hidden md:flex-1 md:flex justify-end gap-4">
            <Button className="font-bold whitespace-nowrap px-5 py-1">
              Login
            </Button>
            <Button className="font-bold">Sign Up</Button>
          </div>
          <button
            onClick={() => setIsDropdowOpen((prev) => !prev)}
            className="md:hidden"
          >
            {isDropdowOpen ? (
              <X className="h-[40px] w-[40px]" />
            ) : (
              <Menu className="h-[40px] w-[40px]" />
            )}
          </button>
        </div>
        {isDropdowOpen && (
          <div className="flex flex-col gap-8 justify-center items-center text-2xl rounded-xl py-5">
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
            <a
              href="/"
              className="text-gray-600 hover:text-black transition duration-200"
            >
              Sign In
            </a>
            <a
              href="/"
              className="text-gray-600 hover:text-black transition duration-200"
            >
              Sign Up
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Header;
