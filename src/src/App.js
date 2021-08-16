import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";

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
    { email: "1@1.com", name: "satusatu", password: "satu", id: 0 },
    { email: "2@2.com", name: "duadua", password: "dua", id: 1 },
  ];

  // list Data sekolah
  const [dataSekolah, updateDataSekolah] = useState([
    {
      id: 0,
      image:
        "https://cdn.discordapp.com/attachments/777233158130892873/874417989758357504/unknown.png",
      namaSekolah: "Sekolah Dasar Islam Terpadu Al-Huda",
      alamatSekolah:
        "Jl. P. Bangka Raya No.1, RT.004/RW.016, Aren Jaya, Kec. Bekasi Tim., Kota Bks, Jawa Barat 17111",
      kontak: ["Telp : (021) 82696958", "E-mail : sdital.huda@sch.ac.id"],
      kebutuhan:
        "Membutuhkan buku matematika dan IPA kelas 2-4 SD, Membutuhkan buku IPS kelas 5 sd",
      buku: [
        { nama: "Matematika Kelas 3 SD", jumlah: 40, keterangan: "Belum Terpenuhi" },
        { nama: "IPA Terpadu Kelas 4 SD", jumlah: 36, keterangan: "Belum Terpenuhi" },
      ],
    },
    {
      id: 1,
      image:
        "https://cdn.discordapp.com/attachments/777233158130892873/875367272779243570/sekolah_2.jpg",
      namaSekolah: "Sekolah Dasar YPWKS 2",
      alamatSekolah:
        "Komplek Krakatau Steel, Jl. Gabus No.13, Kebondalem, Kec. Purwakarta, Kota Cilegon, Banten 42433",
      kontak: ["Telp : (0254) 385351"],
      kebutuhan: "Membutuhkan buku Bahasa Inggris kelas 4 SD",
      buku: [{ nama: "Bahasa Ingris Kelas 4 SD", jumlah: 90, keterangan: "Belum Terpenuhi" }],
    },
  ]);

  // penghandle update dataSekolah
  const handleUpdateDataSekolah = (adata) => {
    let temp = JSON.parse(JSON.stringify(dataSekolah));
    temp[user.id] = adata;
    updateDataSekolah(temp);
  };

  // Variable user dan error
  const [user, setUser] = useState({ email: "", name: "", id: -1 });
  const [error, setError] = useState("");

  const GetProfileSekolah = () => {
    let { id } = useParams();
    return <ProfileSekolah data={dataSekolah[id]} />;
  };

  // Fungsi Login dan Logout
  const Login = (details) => {
    console.log(details);
    for (const dataUser of listUser) {
      if (details.email === dataUser.email && details.password === dataUser.password) {
        setUser({ email: dataUser.email, name: dataUser.name, id: dataUser.id });
        setError("");
        break;
      }
    }
    if (user.email === "" && user.name === "" && user.id === -1) {
      setError("email atau password salah");
    }
  };

  const Logout = () => {
    setUser({ email: "", name: "" });
    console.log(user);
  };

  // Get local storage
  useEffect(() => {
    const userData = window.localStorage.getItem("userdata");
    const sekolahData = window.localStorage.getItem("sekolahdata");

    if (userData !== null) {
      setUser(JSON.parse(userData));
    }
    if (sekolahData !== null) {
      updateDataSekolah(JSON.parse(sekolahData));
    }
  }, []);

  // Save Local Storage
  useEffect(() => {
    window.localStorage.setItem("userdata", JSON.stringify(user));
    window.localStorage.setItem("sekolahdata", JSON.stringify(dataSekolah));
  });

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
          <ListSekolah dataSekolah={dataSekolah} />
        </Route>
        <Route exact path="/login">
          {user.name == "" ? <LoginPage Login={Login} error={error} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/profile_sekolah/:id" children={<GetProfileSekolah />}></Route>
        <Route exact path="/edit_sekolah">
          {user.name == "" ? (
            <Redirect to="/" />
          ) : (
            <EditSekolah
              datan={dataSekolah[user.id]}
              handleUpdateDataSekolah={handleUpdateDataSekolah}
            />
          )}
        </Route>
      </Switch>
    </Router>
  );
}
// Home, List Sekolah, Login, About, Profile Sekolah, Edit Sekolah
export default App;
