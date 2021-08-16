import "bootstrap/dist/css/bootstrap.css";
import "./ListSekolah.css";
import { Container, Row, Col, Button } from "react-bootstrap";
function List({ dataSekolah }) {
  return (
    <div className="bg">
      <Container>
        <Row>
          <h1 className="cari-sekolah">CARI SEKOLAH/PANTI ASUHAN YANG MEMBUTUHKAN BUKU! </h1>
          <Row className="login_box">
            <Col md={7}>
              <div className="form-group">
                <input className="form-control form-control-lg" placeholder="Nama Sekolah" />
              </div>
            </Col>
            <Col md={4}>
              <div className="form-group form-kota">
                <input className="form-control form-control-lg" placeholder="Kota" />
              </div>
            </Col>
            <Col md={1}>
              <Button class="CariButton" className="cari">
                Cari
              </Button>
            </Col>
          </Row>
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
                    <a
                      className="sekolah"
                      href={"http://localhost:3000/profile_sekolah/" + data.id}
                    >
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
        </Row>
      </Container>
    </div>
  );
}

export default List;
