import React from 'react';
import { Badge, Button, Card, CardImg, CardTitle, Col, Container, Row } from 'react-bootstrap';
import '../assets/Css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



export default function ProductList({products, addToCart, cart, openCart}){

  return (
   <>
   {/* ============= Product List ============ */}
      <section>
          <Row className=' bg-dark text-white py-2 sticky-top g-0'>
            <Col xxl={11} xl={11} lg={11} md={11} sm={12}>
              <h1 className='text-center '>Product List</h1>
            </Col>
            <Col >
            <FontAwesomeIcon className='fs-4 pt-3 ps-3 text-primary' icon={faCartShopping} style={{cursor:'pointer'}} onClick={()=>openCart()} /><Badge  bg='white' className='text-dark'>{cart}</Badge>
            </Col>
          </Row>
          <Container>
            <Row>
              {products.map((items,index)=>(
                <Col key={index} xxl={3} xl={4} lg={4} md={4} sm={12} className='my-3'>
                  <Card className='shadow bg-light'>
                    <CardImg className='p-3' variant='top' src={items.product_image} width={'600px'} height={'250px '} />
                    <Card.Body>
                      <CardTitle className='fw-bolder text-secondary'>{items.product_name}</CardTitle>
                      <Card.Text><span className='fw-bold'>Price :</span> ₹{items.product_price}</Card.Text>
                    </Card.Body>  
                    <Card.Footer>
                      <Button onClick={()=>addToCart(items.id)}>
                        Add To Cart
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
      </section>
   </> 
  )
};

