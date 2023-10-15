
import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  Card,
} from "react-bootstrap";
import "../style/landingPage.css";
import axios from "axios";

const Content = () => {
  const url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getDataProduct = () => {
    axios
      .get(url)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getDataProduct();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredProducts = product.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setProduct(filteredProducts);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-item-center cari-barang">
        <Form inline onSubmit={handleSearch}>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Cari</Button>
            </Col>
          </Row>
        </Form>
      </div>

      <div className="row justify-content-center align-item-center daftar-barang">
        {product.map((product) => (
          <Card style={{ width: "18rem", margin: "15px" }} key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Content;
