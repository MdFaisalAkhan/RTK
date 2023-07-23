import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import MovieDetail from "./components/movieDetail/movieDetail";
import PageNotFound from "./components/pageNotFound/pageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
        <Switch>
        <Route path ="/" exact component= {Home}/>
        <Route path ="/movie/:imdbID" component={MovieDetail} />
        <Route component={PageNotFound} />
        </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
