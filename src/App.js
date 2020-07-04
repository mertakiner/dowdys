import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import Main from "./components/pages/Main";
import About from "./components/pages/About";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
          <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/about" component={About} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
