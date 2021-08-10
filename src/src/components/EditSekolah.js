import "bootstrap/dist/css/bootstrap.css";
import "./EditSekolah.css";
import { Container, Row, Table, Col, Button } from 'react-bootstrap';
//import sekolah_1 from './../img/sekolah_1.svg';
function EditSekolah() {

    return (
        <div className="bg">
            <Container>
                <Row>
                    <Col lg={true}>
                        <img src={require('./../img/sekolah_1.svg').default} class="school"></img>
                    </Col>
                    <Col lg={true}>
                        <div class="right">
                            <h3>Nama Sekolah</h3>
                            <p>Sekolah Dasar Islam Terpadu Al-Huda</p>
                            <h3>Alamat Sekolah</h3>
                            <p>Jl. P. Bangka Raya No.1, RT.004/RW.016, Aren Jaya, Kec. Bekasi Tim., Kota Bks, Jawa Barat 17111</p>
                            <h3>Kontak</h3>
                            <div> <p>Telp : (021) 82696958 <br />E-mail : sdital.huda@sch.ac.id</p></div>
                            <h3>Kebutuhan</h3>
                            <p>Membutuhkan buku matematika dan IPA kelas 2-4 SD, Membutuhkan buku IPS kelas 5 sd</p>
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
                                    <tr>
                                        <td>Matematika Kelas 3 SD</td>
                                        <td>40</td>
                                        <td>Belum Terpenuhi</td>
                                    </tr>
                                    <tr>
                                        <td>IPA Terpadu Kelas 4 SD</td>
                                        <td>36</td>
                                        <td>Belum Terpenuhi</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <Button>Edit Profile</Button>
                    </Col>
                </Row>
            </Container>

        </div >
    );
}

export default EditSekolah;





