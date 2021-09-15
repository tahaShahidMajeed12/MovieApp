import React from "react";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBoxComponent";
import NavBar from "./components/AppBar";
import CardList from "./components/CardList";
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
