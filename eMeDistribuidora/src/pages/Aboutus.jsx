import Navbarsxd from "../componentes/Navs";
import Footerxd from "../componentes/Footer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Aboutus() {

    const img = {
        width: '100%',
        height: '100%',
        borderRadius: '00% 00%  00%  00%'
    }
    const back = {
        backgroundColor: '#045ba0',
    }
    const h1 = {
        textAlign: 'center',
        color:'white'
    }
    const us= {
        color:'white',
        border: 'solid #bae0fd',
        borderRadius:'15px',
        backgroundColor:'#0c416e'
    }
    return (
        <>
            <Navbarsxd />
            <Row style={back}>
                <Col xs><div> <img style={img} src="src\img\png-clipart-mover-truck-truck-freight-transport-service.png" alt="" /></div>

                </Col>
                <Col style={us} xs>
                    <div>
                    <h1 style={h1}>Somos una distribuidora familiar cordobesa que opera desde 2019.</h1>
                    <h2>Tel: +54 3574 40 1330</h2>
                    <h2>E-mail: Ignaciocoro07@gmail.com</h2>
                    <h2>Estamos Ubicados en:</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.478885031402!2d-63.412618824456466!3d-31.151983883519275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94331a1959458b63%3A0x56100b3d532f8352!2sBelisario%20Roldan%20491%2C%20Villa%20Santa%20Rosa%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1708216018294!5m2!1ses!2sar" width="600" height="450"  ></iframe>
                </div>
                </Col>

            </Row>
            <Footerxd />
        </>

    )
}

export default Aboutus