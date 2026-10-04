import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Categories", "/categories"],
    ["Contact", "/contact"],
    ["Shop", "/shop"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-15 w-full items-center justify-between bg-black px-4 py-3 text-white md:px-10">
      <Link to="/" className="text-2xl font-bold active:scale-95 sm:text-3xl">Sohan</Link>

      <ul className="hidden gap-5 p-2 lg:flex xl:gap-8">
        {links.map(([label, path]) => (
          <li key={path}><Link to={path}>{label}</Link></li>
        ))}
      </ul>

      <div className="relative hidden md:block items-center">
        <Icon
          icon="lucide:search"
          width="18"
          height="18"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-black pointer-events-none"
        />

        <input
          type="text"
          className="w-40 rounded-full border border-gray-200 bg-white py-2 pl-10 pr-4 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 lg:w-56 xl:w-64"
          placeholder="Search..."
        />
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <Icon
          icon="at-icons:heart"
          width="20"
          height="20"
          className="cursor-pointer"
        />
        <Icon
          icon="fa6-solid:cart-arrow-down"
          width="20"
          height="20"
          className="cursor-pointer"
        />
        <div className="relative">
          <Icon
            icon="line-md:account"
            width="26"
            height="26"
            className="cursor-pointer"
            onClick={() => setIsAccountOpen(!isAccountOpen)}
            aria-label="Open account menu"
            aria-expanded={isAccountOpen}
          />
          {isAccountOpen && (
            <div className="absolute right-0 top-10  w-32 rounded-md bg-white text-black shadow-lg">
              <Link
                to="/login"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={() => {
                  setIsAccountOpen(false);
                }}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={() => {
                  setIsAccountOpen(false);
                }}
              >
                Register
              </Link>
            </div>
          )}
        </div>
        <button
          type="button"
          className="flex items-center lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon icon={isMenuOpen ? "lucide:x" : "lucide:menu"} width="24" height="24" />
        </button>
      </div>
      {isMenuOpen && (
        <nav className="absolute inset-x-0 top-full border-t border-white/10 bg-black px-5 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map(([label, path]) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block rounded px-3 py-2 hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
