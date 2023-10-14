import { Container, Toast, Col, Row, Button, Form } from "react-bootstrap";
import NavigasiBar from "../components/NavigasiBar";
import Intro from "../components/Intro";
import "../style/landingPage.css";

const Home = () => {
  return (
    <div className="mybg">
      <NavigasiBar />
      <Intro />

      <div className="d-flex justify-content-center align-item-center">
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Cari</Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
      <br></br>
        <Container className="text-white d-flex justify-content-center align-item-center boxMusik">
          <Row>
            <Col>
              <Toast>
                <Toast.Header>
                  <img
                    src={require("../image/jannabi.jpeg")} // Ganti dengan path ke gambar jannabi.jpeg
                    className="rounded me-2"
                    alt=""
                    style={{ width: "50px", height: "50px" }} // Sesuaikan ukuran gambar
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>
                    11 mins ago <i className="fa fa-play"></i>
                  </small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
              </Toast>
            </Col>
          </Row>
        </Container>

        <Container className="text-white d-flex justify-content-center align-item-center boxMusik">
          <Row>
            <Col>
              <Toast>
                <Toast.Header>
                  <img
                    src={require("../image/jannabi.jpeg")} // Ganti dengan path ke gambar jannabi.jpeg
                    className="rounded me-2"
                    alt=""
                    style={{ width: "50px", height: "50px" }} // Sesuaikan ukuran gambar
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
              </Toast>
            </Col>
          </Row>
        </Container>

        <Container className="text-white d-flex justify-content-center align-item-center boxMusik">
          <Row>
            <Col>
              <Toast>
                <Toast.Header>
                  <img
                    src={require("../image/jannabi.jpeg")} // Ganti dengan path ke gambar jannabi.jpeg
                    className="rounded me-2"
                    alt=""
                    style={{ width: "50px", height: "50px" }} // Sesuaikan ukuran gambar
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
              </Toast>
            </Col>
          </Row>
        </Container>

        <Container className="text-white d-flex justify-content-center align-item-center boxMusik">
          <Row>
            <Col>
              <Toast>
                <Toast.Header>
                  <img
                    src={require("../image/jannabi.jpeg")} // Ganti dengan path ke gambar jannabi.jpeg
                    className="rounded me-2"
                    alt=""
                    style={{ width: "50px", height: "50px" }} // Sesuaikan ukuran gambar
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
              </Toast>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
