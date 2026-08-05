import React, { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Hero from "./sections/Hero";
import SelectedWork from "./sections/SelectedWork";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
