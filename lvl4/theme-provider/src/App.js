import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ThemeContectProvider } from "./themeContext";

function App() {
  return (
    <ThemeContectProvider>
      <Navbar />
      <Main />
      <Footer />
    </ThemeContectProvider>
  );
}

export default App;
