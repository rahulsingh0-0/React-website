import "./App.css";
import NavBar from "./NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/About" component={About} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
