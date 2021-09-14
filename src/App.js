import React,{useEffect} from 'react'
import Footer from './Components/footer'
import SearchBox from './Components/searchBoxComponent'
import NavBar from './Components/appBar'
import CardList from './Components/cardList'
export default function App() {



    return (
    <>
    <NavBar/>
          <SearchBox />
          <CardList />
    <Footer />
       
</>    )
}
