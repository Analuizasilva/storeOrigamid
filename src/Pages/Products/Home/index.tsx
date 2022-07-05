import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import ProductDetail from "../Details";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(products);
  return (
    <>
      <h1>Products</h1>
      {products ? (
        <Container>
          <Row>
            {products.map((product: any, i) => {
              return (
                <Card style={{ width: "18rem" }} key={i} className={"m-2"}>
                  <Link key={product.id} to={`Details/${product.id}`}>
                    {<Card.Img variant="top" src={product.fotos[0].src} />}
                  </Link>

                  <Card.Body>
                    <Card.Title>{product.nome}</Card.Title>
                    <Card.Text>R$ {product.preco}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
      ) : null}
      <Link to={`Details`}>
        <Button>Contacts</Button>
      </Link>
    </>
  );
};
export default Home;
