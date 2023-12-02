import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

import { removeFromWishlist } from '../redux/slices/wishlistSlice';

function Wishlist() {
  const wishListarray=useSelector((state)=>state.wishlistReducer)
  console.log(wishListarray);
  const dispatch=useDispatch()

  const handleWishlist=(item) =>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
      

  }
  return (
    <div  >
      <Row className='ms-3 me-3' style={{marginTop:'90px'}} >
      
       {wishListarray?.length>0?
       wishListarray?.map((item)=>(
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={item.image} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title className='fw-bolder'>{item.title.slice(0,20)}...</Card.Title>
        <Card.Text>
          <p >{item.description.slice(0,40)}...</p>
          <p className='fw-bolder'>Price: $ {item.price}</p>
        </Card.Text>
        <div  className='d-flex justify-content-between align-items-center'>
<Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-danger rounded"><i class="fa-solid fa-trash"></i></Button>
        <Button onClick={()=>handleWishlist(item)} variant="outline-success rounded"><i class="fa-solid fa-cart-plus"></i></Button>
        </div>
        
      </Card.Body>
    </Card>
      </Col>

       ))
       
        

    :
    <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
      <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="no image" height={'300px'} />
      <h4 className='text-danger mt-3'>Your Wishlist is empty</h4>
      <button className='btn btn-success rounded mt-3'> <Link style={{textDecoration:'none',color:'white'}} to={'/'}>Back to Home</Link> </button>
    </div>
}      

      
    </Row>
    </div>
  )
}

export default Wishlist