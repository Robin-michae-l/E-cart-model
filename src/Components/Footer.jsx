import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div
    style={{ height: "300px",color:'white' }}
    className="d-flex justify-content-center align-items-center w-100 flex-column bg-dark"
  >
    <div className="d-flex justify-content-evenly align-items-center w-100">
      <div className="websites" style={{ width: "400px" }}>
        <h4 className="mb-3" style={{overflowY:'hidden'}}>
        <i class="fa-sharp fa-solid fa-cart-shopping me-2"></i>
       E-CART
        </h4>
        <h6>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          numquam aliquam provident repellendus dicta totam neque! Ad impedit
          qui facere vel illum consequuntur tempore excepturi alias! A
          voluptatibus iure ducimus.
        </h6>
      </div>
      <div className="links d-flex flex-column">
        <h4 className="mb-3" style={{overflowY:'hidden',color:'black'}}  >Links</h4>
        <Link to={"/"}   style={{ textDecoration: "none", color: "red" }}>
          Home Page
        </Link>

        <Link to={"/cart"}  style={{ textDecoration: "none", color: "green" }}>
         Cart
        </Link>

        <Link
          to={"/wishlist"}
        
          style={{ textDecoration: "none", color: "blue" }}
        >
          WishList
        </Link>
      </div>

      <div className="guides d-flex flex-column">
        <h4 className="mb-3">Guides</h4>

        <Link
          to={"https://react.dev/"}
          style={{ textDecoration: "none", color: "white" }}
        >
          React
        </Link>

        <Link
          to={"https://react-bootstrap.netlify.app/"}
          style={{ textDecoration: "none", color: "white" }}
        >
          React Bootstrap
        </Link>

        <Link
          to={"https://bootswatch.com/"}
          style={{ textDecoration: "none", color: "white" }}
        >
          Bootswatch
        </Link>
      </div>
      <div className="contacts d-flex flex-column">
        <h4 className="mb-3" style={{overflowY:'hidden'}}>Contact Us</h4>
        <div className="d-flex mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Email ID"
          />
          <button className="btn btn-warning ms-2 d-flex justify-content-center align-items-center p-3">Subscribe</button>
        </div>
        <div className="d-flex justify-content-evenly align-items-center">
          <Link
            to={"https://www.instagram.com/"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <i class="fa-brands fa-instagram fa-2x"></i>
          </Link>

          <Link
            to={"https://twitter.com/"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <i class="fa-brands fa-twitter fa-2x"></i>
          </Link>

          <Link
            to={"https://in.linkedin.com/"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <i class="fa-brands fa-linkedin fa-2x"></i>
          </Link>

          <Link
            to={"https://www.facebook.com/"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <i class="fa-brands fa-facebook fa-2x"></i>
          </Link>
        </div>
      </div>
    </div>
    <p className="mt-5" style={{color:'darkviolet'}}>Copyright 2023 E-cart Built with React</p>
  </div>
  )
}

export default Footer