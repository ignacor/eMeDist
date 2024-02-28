import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const CardProducto = ({ item }) => {
  const container = {
    border:' 2px solid black',
    borderRadius:' 25px',
    width: '18rem'
  }
  const containercard = {
   backgroundColor :'#B5B5B5',
   border:' 2px solid #B5B5B5',
    borderRadius:' 25px',
  }
    return (
      
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name} </Card.Title>
      </Card.Body>

        <ListGroup className="list-group-flush">
        <ListGroup.Item>$ {item.precio}</ListGroup.Item>
      </ListGroup>
      <ListGroup className="list-group-flush">
      </ListGroup>
      
    </Card>
    );
}

export default CardProducto