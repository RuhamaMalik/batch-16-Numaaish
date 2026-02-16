import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-neutral-primary-soft">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <NavLink to="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-7 me-3"
                alt="FlowBite Logo"
              />
              <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
                Flowbite
              </span>
            </NavLink>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            
            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                Resources
              </h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a
                    href="https://flowbite.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                Follow us
              </h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                Legal
              </h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <NavLink to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/terms-conditions" className="hover:underline">
                    Terms &amp; Conditions
                  </NavLink>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <hr className="my-6 border-default sm:mx-auto lg:my-8" />

        {/* Bottom */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-body sm:text-center">
            © 2023{" "}
            <NavLink to="/" className="hover:underline">
              Flowbite™
            </NavLink>
            . All Rights Reserved.
          </span>

          {/* Social Icons (same SVGs, no change) */}
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-body hover:text-heading ms-5">
              {/* SVG here */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
