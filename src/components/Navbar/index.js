import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleNav = () => {
    setToggle(!toggle);
  };
  return (
    <header className="bg-blue-200">
      <nav className="container mx-auto flex flex-wrap items-center justify-between p-5">
        <img
          src="http://acmelogos.com/images/logo-1.svg"
          alt="ACME"
          width="120"
        />
        {/* <NavLink
          to="/"
          exact
          activeClassName="text-blue-800"
          className="w-130 inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-blue-300 text-4xl font-bold cursive tracking-widest"
        >
          Wasique Haider
        </NavLink> */}
        <div className="flex md:hidden">
          <button id="hamburger" onClick={() => toggleNav()}>
            <img
              className={`toggle ${toggle ? "hidden" : "block"}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
            />
            <img
              className={`toggle ${toggle ? "" : "hidden"}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
            />
          </button>
        </div>
        <div
          className={`toggle ${
            toggle ? "" : "hidden"
          } md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-blue-900 md:border-none`}
        >
          <NavLink
            to="/"
            exact
            activeClassName="text-white bg-blue-700"
            className="block lg:mx-2 md:inline-block transition delay-300 duration-300 ease-in-out text-white-900 hover:text-white hover:bg-blue-700 px-3 py-3 border-blue-900 rounded"
          >
            Home
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-white bg-blue-700"
            className="block lg:mx-2 md:inline-block transition delay-300 duration-300 ease-in-out text-white-900 hover:text-white hover:bg-blue-700 px-3 py-3 border-blue-900 rounded"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-white bg-blue-700"
            className="block lg:mx-2 md:inline-block transition delay-300 duration-300 ease-in-out text-white-900 hover:text-white hover:bg-blue-700 px-3 py-3 border-blue-900 rounded"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white bg-blue-700"
            className="block lg:mx-2 md:inline-block transition delay-300 duration-300 ease-in-out text-white-900 hover:text-white hover:bg-blue-700 px-3 py-3 border-blue-900 rounded"
          >
            About Me
          </NavLink>
        </div>
        {/* <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/TheWasiqHaider"
            className="mr-4"
            target="_blank"
            fgColor="#FFF"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/wasique.haider.02"
            className="mr-4"
            target="_blank"
            fgColor="#FFF"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/wasiquehaider"
            className="mr-4"
            target="_blank"
            fgColor="#FFF"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/wasiquehaider"
            className="mr-4"
            target="_blank"
            fgColor="#FFF"
            style={{ height: 35, width: 35 }}
          />
        </div> */}
      </nav>
    </header>
  );
}

export default Navbar;
