import { faCartFlatbed, faClose, faDeleteLeft, faMinus, faPlus, faTrash, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardImg, CardTitle, Col, Container, Modal, Row, Toast, ToastContainer } from 'react-bootstrap'

export default function Cart({cart, openProducts }) {

  // Storesthe cart product details in state
  const[showProducts, setShowProducts] = useState([])
  // conditon for toaster and modal
  const[showPaymentModal, setShowPaymentModal] = useState(false)
  const[showToast, setShowToast] = useState(false)
 
  useEffect(()=>{
    // /reduce the mutltiple product
    const multipleData = cart.reduce((data, items) => {

      const existing = data.find((grouped_item) => grouped_item.id === items.id);
      
      if (existing) {
        existing.quantity += 1;
      } else {
        data.push({ ...items, quantity: 1 });
      }

      return data;
    }, []);

    // update returned value in state
    setShowProducts(multipleData)
  },[cart])

 

  // increse the quantitiy
  const increment = (id) =>{
    
    const increase = showProducts.map((items) => {
      if (items.id === id) {
          items.quantity += 1;
      }
      return items;
    })
  
    setShowProducts(increase);
  }

  // placing the order
  const placeOrder = () =>{
      setShowToast(true)
      setTimeout(()=>{
        setShowToast(false)
      },[2000])
      setShowPaymentModal(false)
      setShowProducts([])
  }

  // calculating the total amount
  const amount = showProducts.reduce((total,items)=>total + items.quantity * items.product_price,0)

  const paymentModal = () =>{
      if(amount === 0){
        alert("No Products")
      }else{
        setShowPaymentModal(true)
      }
  }

  const clearCart = () =>{
    setShowProducts([])
  }

  const deleteIncart = (id) => {
    const showData = showProducts.map((items) => {
      if (items.id === id) {
        if (items.quantity > 1) {
          items.quantity -= 1;
        } else {
          return null;
        }
      }
      return items;
    }).filter(Boolean);
  
    setShowProducts(showData);
  }
  
  

  return (
    <>
    {/* =========== Cart Section ============ */}
        <section>
            <h2 className='text-center fw-bold bg-secondary text-warning py-2'>My Cart</h2>
            <Container fluid>
              <h3>Total Items In Your Cart : {showProducts.length}</h3>
              <Button className='text-end' onClick={()=>openProducts(showProducts.length)}>Continue Shopping</Button>
            </Container>
            <hr/>
            <Container fluid>
              <Row>
                <Col lg={6} md={6}>
                  <h2 className='text-decoration-underline'>Products In Cart</h2>
                </Col>
                <Col lg={6} md={6} className='text-end'>
                  <p onClick={paymentModal}>Total Amount : <Button>{amount}</Button></p><br/>
                  <Button variant='danger' onClick={clearCart}>Clear All</Button>
                </Col>
              
              {/* Modal to show order details */}
              <Modal show={showPaymentModal} onHide={()=>setShowPaymentModal(false)} backdrop="static" >
                <Modal.Header closeButton>
                  <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {showProducts.map((data)=>(
                    <p><span className='fw-bold fs-5'>Prodct Name :</span>{data.product_name}</p>
                  ))}
                    <p><span className='fw-bold fs-5'>Total :</span> {amount}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='danger' onClick={()=>setShowPaymentModal(false)} className='mx-2'>Close</Button>
                  <Button variant='primary' onClick={placeOrder} className='mx-2'>Place Order</Button>
                </Modal.Footer>
              </Modal>
              {/* Toaster Forsucesss message */}
              <ToastContainer position='middle-center'>
                <Toast show={showToast} className='fs-5 text-success d-flex justify-content-between'>
                  <p className='my-3 ps-3'>Order Placed Succesfully</p>
                  <FontAwesomeIcon onClick={()=>setShowToast(false)} icon={faX} className='pt-4 pe-3 text-danger' style={{cursor:'pointer'}} />
                </Toast>
              </ToastContainer>
             </Row>

             {/* if initialy the cart have no data it shows empty */}
             {showProducts.length === 0 && <p className='fw-bold text-underline fs-4 text-secondary'>No Products in Cart</p>}

            <Row>
              {/* mapping the products */}
              {showProducts.map((items,index)=>(
                <Col key={index} xxl={3} xl={4} lg={4} md={4} sm={12} className='my-3'>
                  <Card className='shadow bg-light' >
                    <CardImg className='p-3' variant='top' src={items.product_image} width={'600px'} height={'200px '} />
                    <Card.Body>
                      <CardTitle className='fw-bolder text-secondary'>{items.product_name}</CardTitle>
                      <Card.Text><span className='fw-bold'>Price :</span> ₹{items.product_price}</Card.Text>
                      <Card.Text>Quantity : {items.quantity} </Card.Text>
                      </Card.Body>  
                      <Card.Footer>
                        <Button variant='danger' className='mx-2' onClick={()=>deleteIncart(items.id)}><FontAwesomeIcon icon={items.quantity > 1 ? faMinus : faTrash } /></Button>
                        <Button onClick={()=>increment(items.id)}><FontAwesomeIcon icon={faPlus} /></Button>
                      </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
    </>
  )
}
