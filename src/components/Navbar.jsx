import { NavLink, Link } from "react-router";
import { MdOutlineDarkMode, MdOutlineLightMode, MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

export default function Navbar({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const baseClass = "px-4 py-2 transition-colors duration-200";
  const activeClass = "border-b-2 border-[#4DB2EC]";
  const mobileBaseClass = "block px-4 py-3 text-base font-medium transition-colors duration-200";
  
  function handleThemeToggle() {
    if(theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 w-full border-b backdrop-blur-sm bg-background/95 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors duration-200"
              onClick={closeMenu}
            >
              Website Blog
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : "hover:bg-accent rounded-lg"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : "hover:bg-accent rounded-lg"}`
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : "hover:bg-accent rounded-lg"}`
              }
            >
              About Me
            </NavLink>
            <button 
              onClick={handleThemeToggle}  
              className="ml-2 p-2 rounded-lg hover:bg-accent transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <MdOutlineDarkMode className="text-2xl" />
              ) : (
                <MdOutlineLightMode className="text-2xl" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={handleThemeToggle}  
              className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <MdOutlineDarkMode className="text-xl" />
              ) : (
                <MdOutlineLightMode className="text-xl" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <MdClose className="text-xl" />
              ) : (
                <MdMenu className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${mobileBaseClass} ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent"} rounded-lg`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/blogs"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${mobileBaseClass} ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent"} rounded-lg`
                }
              >
                Blogs
              </NavLink>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${mobileBaseClass} ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent"} rounded-lg`
                }
              >
                About Me
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
