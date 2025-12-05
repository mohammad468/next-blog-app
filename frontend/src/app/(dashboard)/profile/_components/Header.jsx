"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Avatar from "@/ui/Avatar";
import Drawer from "@/ui/Drawer";
import SideBar from "./SideBar";
import { useState } from "react";
import ButtonIcon from "@/ui/ButtonIcon";
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/context/ThemeContext";

function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { user, isLoading } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`bg-secondary-0 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}>
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <ButtonIcon
          className="block lg:hidden border-none"
          variant="outline"
          onClick={() => setIsOpenDrawer(!isOpenDrawer)}
        >
          {isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
        </ButtonIcon>

        <span className="text-sm lg:text-lg font-bold text-secondary-700">سلام؛ {user?.name}</span>

        <div className="flex items-center justify-center gap-x-2">
          <ButtonIcon
            variant="outline"
            onClick={toggleTheme}
            title={theme === "dark-mode" ? "روشن" : "تاریک"}
          >
            {theme === "dark-mode" ? <SunIcon /> : <MoonIcon />}
          </ButtonIcon>

          <Link href="/profile">
            <Avatar src={user?.avatarUrl} alt={user?.name || "profile avatar"} />
          </Link>
        </div>

        <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
          <SideBar onClose={() => setIsOpenDrawer(false)} />
        </Drawer>
      </div>
    </header>
  );
}
export default Header;
