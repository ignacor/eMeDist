import React from "react";
import { Col } from "react-bootstrap";
import CardProducto from "./CardProducto";
const ProductoList = ({items}) =>{

    return(
        <>
        {
            items.map((item) => (
                <Col md={3} lg={3} sm={12} key={item.id} >
                    <CardProducto item={item} />
                </Col>
            ))
        }
    </>
    )
}

export default ProductoList