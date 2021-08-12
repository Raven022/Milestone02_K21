import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { useState } from "react";

// Komponen Website
import Navbars from "./components/Navbars";
import Home from "./components/Home";
import About from "./components/About";
import LoginPage from "./components/loginPage";
import EditSekolah from "./components/EditSekolah";
import ProfileSekolah from "./components/ProfileSekolah";
import ListSekolah from "./components/ListSekolah";

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
      <Navbars user={user} Logout={Logout} />
      {/* Konten */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/list_sekolah">
          <ListSekolah />
        </Route>
        <Route exact path="/login">
          {user.name == "" ? <LoginPage Login={Login} error={error} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/profile_sekolah">
          <ProfileSekolah />
        </Route>
        <Route exact path="/edit_sekolah">
          <EditSekolah />
        </Route>
      </Switch>
    </Router>
  );
}
// Home, List Sekolah, Login, About, Profile Sekolah, Edit Sekolah
export default App;

// ########## Request iqi #########
// const dataSekolah = [{
//   email_1: "1@1.com",
//   data: {
//     image: './../img/sekolah_1.svg',
//     namaSekolah: "Sekolah Dasar Isla Terpadu Al-Huda",
//     alamatSekolah: "Jl. P. Bangka Raya No.1, RT.004/RW.016, Aren Jaya, Kec. Bekasi Tim., Kota Bks, Jawa Barat 17111",
//     kontak: <p>Telp : (021) 82696958 <br />E-mail : sdital.huda@sch.ac.id</p>,
//     kebutuhan: "Membutuhkan buku matematika dan IPA kelas 2-4 SD, Membutuhkan buku IPS kelas 5 sd",
//     row_1: <tr>
//       <td>Matematika Kelas 3 SD</td>
//       <td>40</td>
//       <td>Belum Terpenuhi</td>
//     </tr>,
//     row_2: <tr>
//       <td>IPA Terpadu Kelas 4 SD</td>
//       <td>36</td>
//       <td>Belum Terpenuhi</td>
//     </tr>
//   }
// },
// {
//   email_2: "2@2.com",
//   data: {
//     image: './../ img / sekolah_2.jpg',
//     namaSekolah: "Sekolah Dasar YPWKS 2",
//     alamatSekolah: "Komplek Krakatau Steel, Jl. Gabus No.13, Kebondalem, Kec. Purwakarta, Kota Cilegon, Banten 42433",
//     kontak: <p>Telp : (0254) 385351</p>,
//     kebutuhan: "Membutuhkan buku Bahasa Inggris kelas 4 SD",
//     row_1: <tr>
//       <td>Bahasa Inggris Kelas 4 SD</td>
//       <td>90</td>
//       <td>Belum Terpenuhi</td>
//     </tr>
//   }
// }
// ]