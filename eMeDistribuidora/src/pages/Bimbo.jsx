import ProductListContainer from "../ProductosBimbo/Productlistcontainer";
import Navbarsxd from "../componentes/Navs";
import Footerxd from "../componentes/Footer";

function Bimbo () {
const cont ={
    backgroundColor:'#045ba0',
}
    return (
        <>
        <Navbarsxd/>
        <div style={cont}>
        <ProductListContainer/>

        </div>
        <Footerxd/>
        </>
    )
}

export default Bimbo;