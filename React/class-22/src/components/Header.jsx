import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // console.log(location.pathname);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    // <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-default">
    <nav className={` fixed w-full z-20 top-0 start-0 transition-all duration-500 border-default ${location.pathname === "/" && !isScrolled ? "bg-transparent" : "bg-black"

      }  `}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/007/578/784/small/luxury-awesome-phoenix-logo-design-template-vector.jpg"
            className="h-10 rounded-full "
            alt=" Logo"
          />
          <span className="self-center text-xl text-white font-semibold whitespace-nowrap">
            HeavyBite
          </span>
        </NavLink>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-base md:hidden  hover:text-red-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
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
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-default rounded-base md:flex-row md:space-x-8 md:mt-0 md:border-0 ">

            {/* Home */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3  ${isActive
                    ? "text-red-600 "
                    : "text-white hover:text-red-600   "
                  }`
                }

              // className="block py-2 px-3 text-white hover:text-fg-brand"
              >
                Home
              </NavLink>
            </li>

            {/* Dropdown */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={
                  `flex items-center justify-between py-2 px-2  w-full  hover:text-red-600  text-white`
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
                <div className="md:absolute mt-2 z-10 md:bg-neutral-primary-medium md:border border-default-medium rounded-base md:shadow-lg w-full">
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
                  ? "text-red-600 "
                  : "text-white hover:text-red-600   "
                }`
              }>
                Services
              </NavLink>
            </li>


            <li>
              <NavLink to="/products" className={({ isActive }) =>
                `block py-2 px-3  ${isActive
                  ? "text-red-600 "
                  : "text-white hover:text-red-600   "
                }`
              }>
                Products
              </NavLink>
            </li>


            <li>
              <NavLink to="/login" className={({ isActive }) =>
                `block py-2 px-3  ${isActive
                  ? "text-red-600 "
                  : "text-white hover:text-red-600   "
                }`
              }>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) =>
                `block py-2 px-3  ${isActive
                  ? "text-red-600 "
                  : "text-white hover:text-red-600   "
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
