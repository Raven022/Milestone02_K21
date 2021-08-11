import "bootstrap/dist/css/bootstrap.css";
import "./ProfileSekolah.css";
import { Container, Row, Table, Col } from 'react-bootstrap';
//import sekolah_1 from './../img/sekolah_1.svg';
function ProfileSekolah() {

    return (
        <div className="bg">
            <Container>
                <Row>
                    <Col>
                        <img src={require('./../img/sekolah_1.svg').default} class="school"></img>
                    </Col>
                    <Col>
                        <div class="right">
                            <h3>Nama Sekolah</h3>
                            <p>Sekolah Dasar Islam Terpadu Al-Huda</p>
                            <h3>Alamat Sekolah</h3>
                            <p>Jl. P. Bangka Raya No.1, RT.004/RW.016, Aren Jaya, Kec. Bekasi Tim., Kota Bks, Jawa Barat 17111</p>
                            <h3>Kontak</h3>
                            <div> <p>Telp : (021) 82696958 <br />E-mail : sdital.huda@sch.ac.id</p></div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    );
}
  
export default ProfileSekolah;





