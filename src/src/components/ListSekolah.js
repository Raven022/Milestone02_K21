import "bootstrap/dist/css/bootstrap.css";
import "./ListSekolah.css";

function List({ dataSekolah }) {
  return (
    <div className="bg-image" id="content">
      <div className="container-lg">
        <h1 className="cari-sekolah">
          <br></br>
          CARI SEKOLAH/PANTI ASUHAN YANG MEMBUTUHKAN BUKU!{" "}
        </h1>
        <div className="searchbar" class="row label">
          <div class="col-7">
            <div className="form-group" className="isi-email">
              <label className="email-address"></label>
              <input className="form-control form-control-lg" placeholder="Nama Sekolah" />
            </div>
          </div>
          <div class="col-3">
            <div className="form-group">
              <label className="password"></label>
              <input className="form-control form-control-lg" placeholder="Kota" />
            </div>
          </div>
          <div class="col-1">
            <a className="btn btn-lg btn-primary cari" href="list_sekolah" role="button">
              CARI
            </a>
          </div>
        </div>

        <table id="simple-board">
          <tbody>
            <tr id="row0" className="tableheader">
              <td id="cell0-0">
                <p className="sekolah-panti title">Nama Sekolah/Panti Asuhan </p>
              </td>
              <td id="cell0-1">
                <p className="domisili title">Domisili</p>
              </td>
              <td id="cell0-2">
                <p className="jenis-buku title">Jenis buku yang dibutuhkan</p>
              </td>
            </tr>

            {/* Body */}
            {dataSekolah.map((data) => (
              <tr id="row1" className="tablebody">
                <td id="cell1-0">
                  <a className="sekolah" href={"http://localhost:3000/profile_sekolah/" + data.id}>
                    {data.namaSekolah}
                  </a>
                </td>
                <td id="cell1-1">
                  <p className="kota">{data.alamatSekolah}</p>
                </td>
                <td id="cell1-2">
                  <p className="buku-title">{data.kebutuhan}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="row min-vh-100 align-items-center align-content-center"></div>
      </div>
    </div>
  );
}

export default List;
