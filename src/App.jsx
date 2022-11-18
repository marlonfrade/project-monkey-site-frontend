import { useEffect, useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NftLogin from "./Pages/NftLogin";

export default function App() {
  const [theme, setTheme] = useState("dark");

  // verify user preferences for theme
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  //verify and apply theme color in the root div
  useEffect(() => {
    //   invert theme below
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("user_color_preference", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("user_color_preference", "light");
    }
  }, [theme]);

  const element = useRoutes([
    {
      path: "/",
      element: <Home theme={theme} setTheme={setTheme} />,
    },
    {
      path: "/nft/login",
      element: <NftLogin theme={theme} />,
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
