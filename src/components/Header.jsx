import menu from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import logo from "../assets/images/logo.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isOpen]);
  return (
    <>
      <header className=" absolute top-0 left-0 z-10 flex items-center w-full justify-center lg:justify-start  p-10">
        <div className="lg:mr-10">
          <img src={logo} alt="" />
        </div>

        {isOpen ? (
          <div className="w-full h-screen bg-black/50 absolute left-0 top-0 ">
            <nav
              className={`absolute top-0  bg-white w-full h-[5rem] transition-all duration-1000 shadow-2xl ${
                isOpen ? "left-0" : "-left-1000"
              }`}
            >
              <ul className="flex justify-center gap-4 flex-wrap items-center h-full">
                <li className="">
                  <button>Home</button>
                </li>
                <li>
                  <button>Shop</button>
                </li>
                <li>
                  <button>About</button>
                </li>
                <li>
                  <button>Contact</button>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          <nav className="text-white hidden lg:block">
            <ul className="flex justify-center gap-4 flex-wrap items-center">
              <li className="">
                <button className="navBtn relative">Home</button>
              </li>
              <li className=" ">
                <button className="navBtn relative">Shop</button>
              </li>
              <li className="">
                <button className="navBtn relative">About</button>
              </li>
              <li className="">
                <button className="navBtn relative">Contact</button>
              </li>
            </ul>
          </nav>
        )}

        <div className=" z-20 absolute top-8 left-8 lg:hidden">
          {isOpen ? (
            <button onClick={() => setIsOpen(false)}>
              <img src={close} />
            </button>
          ) : (
            <button onClick={() => setIsOpen(true)}>
              <img src={menu} />
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
