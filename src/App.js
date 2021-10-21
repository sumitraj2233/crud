import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import View from "./components/pages/View";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/view/:id">
          {/* dynamic routing */}
          <View />
        </Route>
        <Route path="/addUser">
          <Add />
        </Route>
        <Route path="/edit/:id">
          <Edit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
