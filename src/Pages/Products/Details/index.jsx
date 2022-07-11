import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData(url) {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setProduct(data);
        });
    }
    fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  return (
    <>
      {product ? (
        <Container>
          <h1>{product.nome}</h1>
          <img style={{ width: "18rem" }} src={product.fotos[0].src}></img>
          <p><strong style={{ fontSize: "15px" }}>Description:</strong> {product.descricao}</p>
          <p><strong style={{ fontSize: "15px" }}>Price:</strong> R${product.preco}</p>
        </Container>
      ) : null}
    </>
  );
};
export default Product;
