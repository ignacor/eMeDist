import React from "react";
import { Col } from "react-bootstrap";
import CardProduct from "./CardProduct";
const ProductList = ({items}) =>{

    return(
        <>
        {
            items.map((item) => (
                <Col md={3} lg={3} sm={12} key={item.id} >
                    <CardProduct item={item} />
                </Col>
            ))
        }
    </>
    )
}

export default ProductList