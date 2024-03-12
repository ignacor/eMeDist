import React, {useState, useEffect, useContext} from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ProductoList from "./ProductoList";
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const ProductoListCont = () =>{
const [items, setItems] = useState([])


useEffect( () => {
    const db = getFirestore();

    const Distribuidora = collection( db, "Fiambres y Quesos")

   getDocs(Distribuidora )
        .then(snapshot => {
          const alldata =  snapshot.docs.map(document => ({id: document.id, ...document.data()}))
           setItems(alldata)
        })

}, [])

const h1 = {
    textAlign:'center',
    color:'white'
}

    return(
        <>

        <Container>
        <h1 style={h1}>Fiambres y Quesos</h1>
        <Row>
            {
                items.length > 0 &&
                <ProductoList items={items} />
            }
        </Row>
    </Container>
    </>
    )
}
export default ProductoListCont