import React from 'react';
import Card from 'react-bootstrap/Card';
import Tag from './Tags';



function MyCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.url} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>{props.descripcion}</Card.Text>
      </Card.Body>
      <Tag bg={props.bg} raza={props.raza}/>
    </Card>
  );
}

export default MyCard;