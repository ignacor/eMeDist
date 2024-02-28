import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Marcas from '../componentes/Marcas';
import Navbarsxd from '../componentes/Navs';
function Principal() {
    const containes = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
    }
    const cont = {
        backgroundColor:' #045ba0',
    }
    const h1 = {
        paddingTop: '25vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
    }
    const xd = {
        backgroundColor: '#e0effe',
        borderColor: 'white',
        marginLeft:'50px',
        marginRight:'50px',
        marginTop:'100px',
        color:'black',
    }
    return (
        <div style={cont}>
            <Navbarsxd/>
            <div style={h1}>
                <h1>eMe Distribuidora.</h1>
            </div>
            <div style={containes}>
                <h5>Todos nuestros productos a la comodidad de tu negocio.</h5>
            </div>
            <ButtonGroup  style={containes}
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
            >
                <Button style={xd} href='panes'>Productos</Button>
                <Button style={xd} href='sobrenosotros'>Conocenos</Button>
            </ButtonGroup>
            <Marcas/>
        </div>
    )
}

export default Principal;