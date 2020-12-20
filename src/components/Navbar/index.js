import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar() {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-purple-800 text-4xl font-bold cursive tracking-widest"
          >
            Wasique Haider
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-blue-100 bg-blue-700"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-purple-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-blue-100 bg-blue-700"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-purple-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-blue-100 bg-blue-700"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-purple-800"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
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
        </div>
      </div>
    </header>
  );
}

export default Navbar;
