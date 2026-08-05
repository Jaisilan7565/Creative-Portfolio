import React, { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import Hero from "./sections/Hero";
import SelectedWork from "./sections/SelectedWork";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Force instant scroll to top on reload/mount and lock scroll while loading
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Instant scroll to top without smooth scroll behavior so animations aren't triggered
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    if (isLoading) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <MainLayout>
        <Hero />
        <SelectedWork />
      </MainLayout>
    </>
  );
};

export default App;
