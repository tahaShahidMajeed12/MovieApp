import React from "react";
import Footer from "./shared/Footer";
import SearchBox from "./components/SearchBoxComponent";
import Card from "./shared/Card";
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
