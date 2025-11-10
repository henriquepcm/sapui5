import activateIcon from "@ui5/webcomponents-icons/dist/activate.js";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import profilePictureExample from "./assets/profilePictureExample.png";
import reactLogo from "./assets/reactLogo.png";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";

export function MyApp() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("./");
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
