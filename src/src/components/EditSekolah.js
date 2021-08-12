import "bootstrap/dist/css/bootstrap.css";
import "./EditSekolah.css";
import { Container, Row, Table, Col, Button } from "react-bootstrap";
//import sekolah_1 from './../img/sekolah_1.svg';
function EditSekolah({ data, handleUpdateDataSekolah }) {
  const imgPath = data.image;
  return (
    <div className="bg">
      <Container>
        <Row>
          <Col lg={true}>
            <img src={imgPath} class="school"></img>
          </Col>
          <Col lg={true}>
            <div class="right">
              <h3>Nama Sekolah</h3>
              <p>{data.namaSekolah}</p>
              <h3>Alamat Sekolah</h3>
              <p>{data.alamatSekolah}</p>
              <h3>Kontak</h3>
              <div>
                <p>{data.kontak.join("\n")}</p>
              </div>
              <h3>Kebutuhan</h3>
              <p>{data.kebutuhan}</p>
              <h3>Riwayat Donasi</h3>
              <Table striped bordered hover class="table">
                <thead>
                  <tr>
                    <th>Nama Buku</th>
                    <th>Jumlah</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.buku.map((arr) => (
                    <tr>
                      {arr.map((el) => (
                        <td>{el}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <Button>Edit Profile</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EditSekolah;
