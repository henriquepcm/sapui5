import activateIcon from "@ui5/webcomponents-icons/dist/activate.js";
import darkModeIcon from "@ui5/webcomponents-icons/dist/dark-mode.js";
import lightModeIcon from "@ui5/webcomponents-icons/dist/light-mode.js";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import { useState } from "react";
import profilePictureExample from "./assets/profilePictureExample.png";
import reactLogo from "./assets/reactLogo.png";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";

export function MyApp() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  const handleLogoClick = () => {
    navigate("./");
  };

  const handleThemeToggle = () => {
    const next = !isDark;
    setIsDark(next);
    setTheme(next ? "sap_horizon_dark" : "sap_horizon");
  };

  return (
    <>
      <ShellBar
        logo={<img src={reactLogo} alt="Company Logo" />}
        profile={
          <Avatar>
            <img src={profilePictureExample} alt="User Avatar" />
          </Avatar>
        }
        primaryTitle="My App"
        onLogoClick={handleLogoClick}
      >
        <ShellBarItem
          icon={isDark ? lightModeIcon : darkModeIcon}
          text={isDark ? "Light Mode" : "Dark Mode"}
          onClick={handleThemeToggle}
        />
        <ShellBarItem icon={activateIcon} text="Activate" />
      </ShellBar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </>
  );
}
