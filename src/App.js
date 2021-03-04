import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Search from "./SearchPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* HOME PAGE*/}
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
        </Switch>
        <Footer />
      </Router>

      {/* Banner */}
      {/* cards */}
      {/* footer */}

      {/* SEARCH */}
    </div>
  );
}

export default App;
