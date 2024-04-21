import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Tags from "./Tags";

function BasicExample({ imagen, nombre, descripcion }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="imgperrito" variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
      </Card.Body>
      <Tags texto={"ver ficha"} color={"light"} />
    </Card>
  );
}

export default BasicExample;
