import React, { useState, useEffect } from "react";
import Firstsection from "../Components/First/Firstsection.jsx";
import SecondSection from "../Components/Second/SecondSection.jsx";
import ThirdSection from "../Components/Third/ThirdSection.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import BelowFooter from "../Components/BelowFooter/BelowFooter.jsx";
import Midfold from "../Components/Midfold/Midfold.jsx";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);


 
  return (
    <>
      <Firstsection />
      

      <div
        style={{
          opacity: showForm ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {showForm && <Midfold />}
      </div>
      <SecondSection  />
      <ThirdSection  />
      <Footer />
      <BelowFooter />
    </>
  );
};

export default App;
