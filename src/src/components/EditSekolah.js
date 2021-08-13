import "bootstrap/dist/css/bootstrap.css";
import "./EditSekolah.css";
import { Container, Row, Table, Col, Button } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
//import sekolah_1 from './../img/sekolah_1.svg';
function EditSekolah({ data, handleUpdateDataSekolah }) {
  const imgPath = data.image;
  const nama = data.namaSekolah;
  const alamat = data.alamatSekolah;
  const kontak = data.kontak.join("\n");
  const kebutuhan = data.kebutuhan;
  const [showForm, setShowForm] = useState(false);

  const editProfile = () => {
    setShowForm(!showForm);

  }
  
  const submitHandler = () => {
    console.log("a")
  }

  return (
    <div className="bg">
      <Container>
        <Row>
          <Col lg={true}>
            <img src={imgPath} class="school"></img>
          </Col>
          <Col lg={true}>
            <div class="right">
              {showForm && (
                <form className="edit_profile" onSubmit={editProfile}>
                  <div className="form-group" className="isi-nama">
                    <label className="nama">Nama Sekolah</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder={nama}
                      name="nama"
                      id="nama"
                      // onChange={(e) => setDetails({ ...details, email: e.target.value })}
                      // value={details.email}
                    />
                  </div>
                  <div className="form-group" className="isi-alamat">
                    <label className="alamat">Alamat Sekolah</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder={alamat}
                      name="alamat"
                      id="alamat"
                      // onChange={(e) => setDetails({ ...details, password: e.target.value })}
                      // value={details.password}
                    />
                  </div>
                  <div className="form-group" className="isi-telp">
                    <label className="telp">Nomor Telepon</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder={data.kontak[0]}
                      name="telp"
                      id="telp"
                      // onChange={(e) => setDetails({ ...details, password: e.target.value })}
                      // value={details.password}
                    />
                  </div>
                  <div className="form-group" className="isi-email">
                    <label className="email">E-Mail</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder={data.kontak[1]}
                      name="email"
                      id="email"
                      // onChange={(e) => setDetails({ ...details, password: e.target.value })}
                      // value={details.password}
                    />
                  </div>
                  <div className="form-group" className="isi-kebutuhan">
                    <label className="kebutuhan">Kebutuhan</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder={kebutuhan}
                      name="kebutuhan"
                      id="kebutuhan"
                      // onChange={(e) => setDetails({ ...details, password: e.target.value })}
                      // value={details.password}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Save"
                    className="btn btn-primary btn-lg btn-block submit-button"
                  ></input>
              </form>
              )}
              {!showForm && (
                <Col lg={true}>
                  <h3>Nama Sekolah</h3>
                  <p>{nama}</p>
                  <h3>Alamat Sekolah</h3>
                  <p>{alamat}</p>
                  <h3>Kontak</h3>
                  <div>
                    <p>{kontak}</p>
                  </div>
                  <h3>Kebutuhan</h3>
                  <p>{kebutuhan}</p>
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
                <Button onClick={editProfile} class="editButton">Edit Profile</Button>
                </Col>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EditSekolah;
