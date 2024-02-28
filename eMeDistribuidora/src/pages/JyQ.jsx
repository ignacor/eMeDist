import ProductoListCont from "../ProductosJYQ/ProductoListCont";
import Navbarsxd from "../componentes/Navs";
import Footerxd from "../componentes/Footer";

function JyQ () {
const cont ={
    backgroundColor:'#045ba0',
}
    return (
        <>
        <Navbarsxd/>
        <div style={cont}>
        <ProductoListCont/>

        </div>
        <Footerxd/>
        </>
    )
}

export default JyQ;