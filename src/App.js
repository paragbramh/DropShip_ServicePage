import "./App.css";
import Navbar from "./components/Navbar/Navbar1.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Index";
import About from "./pages/About";
import Heading from "./components/heading/Heading";
import "./App.css";
import CarouselSlider from "./components/carouselSlider/CarouselSlider";
import TabWork from "./components/tabWork/TabWork";
import Table1 from "./components/table/Table1";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Info from "./components/information/Info";
import Customer from "./components/Customer/Customer";
import Navbar3 from "./components/Navbar3/Navbar3";
import FooterWork from "./components/FooterWork/FooterWork";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
        </Switch>
      </Router>
      <h2>halo</h2>
      <Navbar3 />
      <Heading />
      <div className="parent">
        <div className="child-1">
          <CarouselSlider />
        </div>
        <div className="child-2">
          <TabWork />
        </div>
      </div>

      <div className="parent2">
        <div className="kid-1">
          <Info />
        </div>

        <div className="kid-2">
          <Table1 />
        </div>
      </div>

      <Customer />
      <FooterWork />
    </>
  );
}

export default App;
