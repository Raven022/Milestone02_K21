import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Komponen Website
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Konten */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/list_sekolah">
          <h1>List Sekolah</h1>
        </Route>
        <Route exact path="/login">
          <h1>Login</h1>
        </Route>
        <Route exact path="/profile_sekolah">
          <h1>Profile Sekolah</h1>
        </Route>
        <Route exact path="/edit_sekolah">
          <h1>Edit Sekolah</h1>
        </Route>
      </Switch>
    </Router>
  );
}
// Home, List Sekolah, Login, About, Profile Sekolah, Edit Sekolah
export default App;
