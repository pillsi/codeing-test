import React, { useState } from "react";
import Navbar from "./Components/Navbar/navbar";
import Banner from "./Components/Banner/banner";
import Content from "./Components/Content/content";
import Footer from "./Components/Footer/footer";

function App() {
    
  return (
    <div className="App">
    <Navbar />
    <Banner />
    <Content />
    <Footer />
    </div>
  );
}

export default App;
