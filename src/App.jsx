import { useEffect, useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import NftLogin from "./Pages/NftLogin";

export default function App() {
  const [theme, setTheme] = useState("dark");

  // verify user preferences for theme
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      localStorage.setItem("user_theme_preference", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("user_theme_preference", "light");
    }
  }, []);

  //verify and apply theme color in the root div
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("user_theme_preference", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("user_theme_preference", "light");
    }
  }, [theme]);

  const element = useRoutes([
    {
      path: "/",
      element: <Home theme={theme} setTheme={setTheme} />,
    },
    {
      path: "/nft/login",
      element: <NftLogin />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;
  return (
    <AnimatePresence mode="wait">
      <div className="bg-white dark:bg-black">
        {React.cloneElement(element, { key: location.pathname })}
      </div>
    </AnimatePresence>
  );
}
