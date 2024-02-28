import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Marcas() {
    const img = {
        width: '275px',
        height: '200px',
    }
    const back = {
        background: '045ba0',
        borderTop: '1px solid white',
        marginTop: '125px',
        
       
    }
    const h1 = {
        textAlign: 'center',
        paddingBottom: '40px',
        color: 'white',
        paddingTop: '25px',
    }
    const cont = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
    return (
        <Row style={back}>
            <div style={h1}>
                <h1 >Nuestras Marcas:</h1>
            </div>
            <div style={cont}>
                <a> <img style={img} src="src\img\pngwing.com.png" alt="" /> </a>
                <a> <img style={img} src="src\img\Logo Oblita Bordes - 22MAR22.webp" alt="" /> </a>
                <a> <img style={img} src="src\img\logo.png" alt="" /></a>
                <a> <img style={img} src="src\img\logo-grande-3-3-1.png" alt="" /></a>
                <a> <img style={img} src="src\img\Isologotipo_de_Paladini.png" alt="" /></a>
                <a> <img style={img} src="src\img\LOGO1.png" alt="" /></a>
            </div>

        </Row>


    )
}

export default Marcas;