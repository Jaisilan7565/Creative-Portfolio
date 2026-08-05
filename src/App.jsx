import React, { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import Hero from "./sections/Hero";
import SelectedWork from "./sections/SelectedWork";
import AboutMe from "./sections/AboutMe";
import CaseStudy from "./sections/CaseStudy";
import TestimonialContact from "./sections/TestimonialContact";
import LetsTalk from "./pages/LetsTalk";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#talk" || window.location.hash === "#contact-page") {
        setCurrentPage("talk");
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);

    const handleNavigateTalk = () => {
      setCurrentPage("talk");
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };
    window.addEventListener("open-lets-talk", handleNavigateTalk);

    return () => {
      window.removeEventListener("hashchange", checkHash);
      window.removeEventListener("open-lets-talk", handleNavigateTalk);
    };
  }, []);

  // Always scroll to top when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [currentPage]);

  useEffect(() => {
    const handleNavigateHomeSection = (e) => {
      const targetHash = e.detail?.hash || "";
      const targetId = targetHash.replace("#", "");

      if (currentPage !== "home") {
        setCurrentPage("home");
        setTimeout(() => {
          if (targetId) {
            const el = document.getElementById(targetId);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 100);
      } else {
        if (targetId) {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    };

    window.addEventListener("navigate-home-section", handleNavigateHomeSection);
    return () => window.removeEventListener("navigate-home-section", handleNavigateHomeSection);
  }, [currentPage]);

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
      {currentPage === "talk" ? (
        <LetsTalk onBackHome={() => setCurrentPage("home")} />
      ) : (
        <MainLayout>
          <Hero />
          <SelectedWork />
          <AboutMe />
          <CaseStudy />
          <TestimonialContact />
        </MainLayout>
      )}
    </>
  );
};

export default App;
