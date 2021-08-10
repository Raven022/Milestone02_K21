import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { useState } from "react";

// Komponen Website
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import LoginPage from "./components/loginPage";

function App() {
  // List Akun
  const listUser = [
    { email: "1@1.com", name: "satusatu", password: "satu" },
    { email: "2@2.com", name: "duadua", password: "dua" },
  ];

  // Variable user dan error
  const [user, setUser] = useState({ email: "", name: "" });
  const [error, setError] = useState("");

  // Fungsi Login dan Logout
  const Login = (details) => {
    console.log(details);
    for (const dataUser of listUser) {
      if (details.email === dataUser.email && details.password === dataUser.password) {
        setUser({ email: dataUser.email, name: dataUser.name });
        setError("");
        break;
      }
    }
    if (user.email === "" && user.name === "") {
      setError("email atau password salah");
    }
  };

  const Logout = () => {
    setUser({ email: "", name: "" });
    console.log(user);
  };

  // Web
  return (
    <Router>
      <Navbar user={user} Logout={Logout} />
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
          {user.name == "" ? <LoginPage Login={Login} error={error} /> : <Redirect to="/" />}
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
