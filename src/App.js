import React from "react";
import Footer from "./shared/Footer";
import SearchBox from "./components/SearchBox";
import Card from "./components/Card";
import NavBar from "./components/Header";
export default function App() {
  return (
    <>
      <NavBar />
      <SearchBox />
      <Card />
      <Footer />
    </>
  );
}
