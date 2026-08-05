import React, { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Hero from "./sections/Hero";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <MainLayout>
        <Hero />
      </MainLayout>
    </>
  );
};

export default App;
