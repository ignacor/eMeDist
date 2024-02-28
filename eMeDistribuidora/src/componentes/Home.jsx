import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  const back = {
    backgroundColor :'#b8ebff',
    width :'100.6%',
    height : '100.6%',
  }
  const img = {
    width :'100%',
    height : '100%',
  }
  const h1 = {
    textAlign: 'center',
    paddingTop:'150px',

  }
  const p = {
    textAlign: 'center',
    paddingTop:'100px',
    fontSize:'20px'


  }
  return (
      <Row style={back}>
        <Col xs><div style={h1}><h1>Todos los productos a la comodidad de tu negocio a un excelente precio.</h1></div>
         
        </Col>
        <Col xs><img style={img} src="src\img\eme-letter-logo-design-on-white-background-eme-creative-initials-circle-logo-concept-eme-letter-design-vector.jpg" alt="" /></Col>

      </Row>
  );
}

export default Home;