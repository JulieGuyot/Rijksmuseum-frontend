import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Collection from "./containers/Collection";
import CollectionDetails from "./containers/CollectionDetails";
import Favorites from "./containers/Favorites";
import HomePage from "./containers/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from 'react-bootstrap/Container'

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <div className="all">
      <Router>
        <Header></Header>
        <Container className="container">
        <Switch>
          <Route path="/collection/:objectNumber">
            <CollectionDetails/>
          </Route>
          <Route path="/collection">
            <Collection favorites={favorites} setFavorites={setFavorites} />
          </Route>
          <Route path="/favorites">
            <Favorites favorites={favorites} setFavorites={setFavorites} />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        </Container>
        <Footer></Footer>
      </Router>
    </div>
  );
}
export default App;