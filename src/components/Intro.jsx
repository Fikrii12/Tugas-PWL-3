import { Container, Row, Col } from "react-bootstrap";
import "../style/landingPage.css";

const Intro = () => {
  return (
    <div className="judul">
      <Container className="text-white d-flex justify-content-center align-item-center">
        <Row>
          <Col>
            <div className="title">MASAK APA AJA BISA</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;