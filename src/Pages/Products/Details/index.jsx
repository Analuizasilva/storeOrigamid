import React, { useEffect } from "react";
import { useState } from "react";
import { Badge, Card, Container, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useParams } from "react-router-dom";
import Loading from "../../../Components/Loading/index.tsx"

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      }
      catch(mensageError){
        setError("A data update error occurred")
      }
      finally {setLoading(false)}
    }

    fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if(loading) return <Loading/>;
  if(error) return <p>{error}</p>

  return (
    <>
      {product ? (
      <Container>
        <h1>{product.nome}</h1>
        <Row style={{ placeContent:"center"}}>
        <Card style={{ width: "20rem"}} >    
          {<Card.Img style={{height: "20rem"}}  variant="top" src={product.fotos[0].src} />}
        <Card.Body style={{ textAlign:"justify"  }} >
          <Card.Title></Card.Title>
          <Card.Text>   
           <strong style={{ fontSize: "15px" }}>Description:</strong> {product.descricao}
          </Card.Text>
          <Card.Text>   
          <h4>
            <Badge bg="success">R$ {product.preco}</Badge>
          </h4> 
          </Card.Text>
        </Card.Body>
      </Card>
      </Row>        
      </Container>
      ) : null}
    </>
  );
};
export default Product;
