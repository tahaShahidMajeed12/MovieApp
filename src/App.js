import React from "react";
import Footer from "./shared/Footer";
import SearchBox from "./components/SearchBox";
import Card from "./components/Card";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import NavBar from "./components/Header";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <NavBar {...props} />
              <SearchBox {...props} />
              <Card {...props} />
              <Footer {...props} />
            </>
          )}
        ></Route>
        <Route exact path="/detail">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}
