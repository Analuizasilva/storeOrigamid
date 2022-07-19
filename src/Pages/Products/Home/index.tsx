import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData(url) {
      const response = await fetch(url);
      const json = await response.json();
      setProducts(json);
    }
    fetchData("https://ranekapi.origamid.dev/json/api/produto");
  }, [products]);

  return (
    <>
      {products ? (
        <Container>
          <h1>Products</h1>
          <Row>
            {products.map((product: any, i) => {
              return (
                <Card style={{ width: "18rem" }} key={i} className={"m-2"}>
                  <Link key={product.id} to={`product/${product.id}`}>
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
          <Link to={`/contacts`}>
            <Button>Contacts</Button>
          </Link>
        </Container>
      ) : null}
    </>
  );
};
export default Home;
