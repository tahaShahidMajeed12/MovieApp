import React, { useEffect } from "react";
import Footer from "./Components/Footer";
import SearchBox from "./Components/SearchBoxComponent";
import NavBar from "./Components/AppBar";
import CardList from "./Components/CardList";
export default function App() {
  return (
    <>
      <NavBar />
      <SearchBox />
      <CardList />
      <Footer />
    </>
  );
}
