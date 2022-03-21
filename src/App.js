import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./components/Home";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Hero />
          </Route>
          <Route exact path="/channels">
            <Home />
          </Route>
          <Route exact path="/channels/:id">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Header />
    </div>
  );
};

export default App;
