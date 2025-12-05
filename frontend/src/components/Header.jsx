"use client";

import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import NavLink from "./NavLink";
import ButtonIcon from "@/ui/ButtonIcon";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const navLinks = [
  {
    id: 1,
    children: "خانه",
    path: "/",
  },
  {
    id: 2,
    children: "بلاگ ها",
    path: "/blogs",
  },
];

function Header() {
  const { user, isLoading } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`z-10 shadow-md bg-inherit mb-10 sticky top-0 transition-all duration-200 border-b border-b-secondary-300 ${
        isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
      }`}
    >
      <nav className="container xl:max-w-screen-xl">
        <ul className="flex items-center text-secondary-400 justify-between py-2">
          <div className="flex items-center gap-x-10">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <NavLink path={navLink.path}>{navLink.children}</NavLink>
                </li>
              );
            })}
          </div>
          <div className="flex items-center gap-x-4">
            <li>
              <ButtonIcon variant="outline" onClick={toggleTheme} title={theme === "dark-mode" ? "روشن" : "تاریک"}>
                {theme === "dark-mode" ? <SunIcon /> : <MoonIcon />}
              </ButtonIcon>
            </li>
            <li>
              {user ? (
                <NavLink path="/profile">پروفایل</NavLink>
              ) : (
                <NavLink path="/signin">ورود</NavLink>
              )}
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
