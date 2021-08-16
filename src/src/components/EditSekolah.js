import "bootstrap/dist/css/bootstrap.css";
import "./EditSekolah.css";
import { Container, Row, Table, Col, Button } from "react-bootstrap";
import { useState } from "react";

function EditSekolah({ datan, handleUpdateDataSekolah }) {
  const imgPath = datan.image;
  const [editable, setEditable] = useState(false);

  const [data, upData] = useState(datan);

  const editProfile = () => {
    if (!editable) {
      handleUpdateDataSekolah(data);
      console.log(data);
      console.log(datan);
    }
    setEditable(!editable);
  };

  // Editable Table
  const addBuku = () => {
    let temp = JSON.parse(JSON.stringify(data));
    temp.buku.push({ nama: "", jumlah: 0, keterangan: "" });
    upData(temp);
  };

  const removeBuku = () => {
    let temp = JSON.parse(JSON.stringify(data));
    temp.buku.pop();
    upData(temp);
  };

  const handleChangeBuku = (idxr, key, newdata) => {
    let temp = JSON.parse(JSON.stringify(data));
    temp.buku[idxr][key] = newdata;
    upData(temp);
  };

  const handleChange = (key, newdata) => {
    let temp = JSON.parse(JSON.stringify(data));
    temp[key] = newdata;
    upData(temp);
  };

  return (
    <div className="bg">
      <Container>
        <Row>
          <Col lg={true}>
            <img src={imgPath} class="school"></img>
          </Col>
          <Col lg={true}>
            <div class="right">
              <Col lg={true}>
                <form onSubmit>
                  <h3>Nama Sekolah</h3>
                  {editable ? (
                    <input
                      type="text"
                      value={data.namaSekolah}
                      onChange={(e) => handleChange("namaSekolah", e.target.value)}
                    />
                  ) : (
                    <p>{data.namaSekolah}</p>
                  )}
                  <h3>Alamat Sekolah</h3>
                  {editable ? (
                    <input
                      type="text"
                      value={data.alamatSekolah}
                      onChange={(e) => handleChange("alamatSekolah", e.target.value)}
                    />
                  ) : (
                    <p>{data.alamatSekolah}</p>
                  )}

                  <h3>Kontak</h3>
                  <div>
                    {editable ? (
                      <input
                        type="text"
                        value={data.kontak.join("\n")}
                        onChange={(e) => handleChange("kontak", e.target.value.split("\n"))}
                      />
                    ) : (
                      <p>{data.kontak.join("\n")}</p>
                    )}
                  </div>
                  <h3>Kebutuhan</h3>
                  {editable ? (
                    <input
                      type="text"
                      value={data.kebutuhan}
                      onChange={(e) => handleChange("kebutuhan", e.target.value)}
                    />
                  ) : (
                    <p>{data.kebutuhan}</p>
                  )}

                  <h3>Detail Kebutuhan</h3>
                  {editable ? (
                    <div id="editable-table">
                      <Table striped bordered hover class="table">
                        <thead>
                          <tr>
                            <th>Nama Buku</th>
                            <th>Jumlah</th>
                            <th>Status</th>
                          </tr>
                        </thead>

                        <tbody>
                          {data.buku.map((arr, idxr) => (
                            <tr>
                              {Object.keys(arr).map((el) => (
                                <td>
                                  <input
                                    type="text"
                                    value={arr[el]}
                                    onChange={(e) => handleChangeBuku(idxr, el, e.target.value)}
                                  />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                      <input type="button" onClick={addBuku} value="+" />
                      <input type="button" onClick={removeBuku} value="-" />
                    </div>
                  ) : (
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
                            {Object.values(arr).map((el) => (
                              <td>{el}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  )}
                  <Button onClick={editProfile} class="editButton">
                    {editable ? "Save" : "Edit Profile"}
                  </Button>
                </form>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EditSekolah;
