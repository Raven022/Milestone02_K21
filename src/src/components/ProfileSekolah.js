import "bootstrap/dist/css/bootstrap.css";
import "./ProfileSekolah.css";
import { Container, Row, Table, Col } from "react-bootstrap";
function ProfileSekolah({ data }) {
  const imgPath = data.image;
  return (
    <div className="bg">
      <Container>
        <Row>
          <Col>
            <img src={imgPath} class="school"></img>
          </Col>
          <Col>
            <div class="right">
              <h3>Nama Sekolah</h3>
              <p>{data.namaSekolah}</p>
              <h3>Alamat Sekolah</h3>
              <p>{data.alamatSekolah}</p>
              <h3>Kontak</h3>
              <div>
                <p>{data.kontak.join("\n")}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfileSekolah;
