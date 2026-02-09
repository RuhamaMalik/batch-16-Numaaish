import { NavLink } from "react-router-dom";
import { useState } from "react";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    // <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-default">
    <nav className=" fixed w-full z-20 top-0 start-0 border-default">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlw3jpMM70QCDa6ldeW2Vpi8Wvw-xJZAxI2w&s"
            className="h-10"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            HeavyBite
          </span>
        </NavLink>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>

        {/* Menu */}
        <div className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-neutral-primary">

            {/* Home */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3  ${isActive
                    ? "text-yellow-300 "
                    : "text-heading hover:text-yellow-300   "
                  }`
                }

              // className="block py-2 px-3 text-heading hover:text-fg-brand"
              >
                Home
              </NavLink>
            </li>

            {/* Dropdown */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                 className={
                  `flex items-center justify-between py-2 px-2  w-full  hover:text-yellow-300  text-heading`
                   }
                
              >

               
                Packages
                <svg className="w-4 h-4 ms-1.5" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute mt-2 z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
                  <ul className="p-2 text-sm text-body font-medium">
                    <li>
                      <NavLink to="/dashboard" className="block p-2 hover:bg-neutral-tertiary-medium rounded">
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/settings" className="block p-2 hover:bg-neutral-tertiary-medium rounded">
                        Settings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/earnings" className="block p-2 hover:bg-neutral-tertiary-medium rounded">
                        Earnings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/logout" className="block p-2 hover:bg-neutral-tertiary-medium rounded">
                        Sign out
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Other Links */}
            <li>
              <NavLink to="/services" className={({ isActive }) =>
                `block py-2 px-3  ${isActive
                  ? "text-yellow-300 "
                  : "text-heading hover:text-yellow-300   "
                }`
              }>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({ isActive }) =>
                `block py-2 px-3  ${isActive
                  ? "text-yellow-300 "
                  : "text-heading hover:text-yellow-300   "
                }`
              }>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) =>
                `block py-2 px-3  ${isActive
                  ? "text-yellow-300 "
                  : "text-heading hover:text-yellow-300   "
                }`
              }>
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
