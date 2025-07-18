// import React from 'react'
import { Container, Row, Col, Dropdown, InputGroup, FormControl, Navbar, Nav, Button } from 'react-bootstrap'
import {FaUser, FaHeart, FaShoppingCart, FaSearch}from 'react-icons/fa';
import { FaThLarge } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import LogoImg from '../Images/logo1.png'; 
import VegImg from '../Images/pics.png';
import Images from '../Images/cater1.jpg';
import '../App.css';
const Deed = () => {
  return (
<header>
      {/* Top Bar */}
      <div className="bg-dark text-white py-2 px-3 d-flex justify-content-between align-items-center">
        <div>Flat 50% Off On Grocery Shop.</div>
        <div>
          <span className="me-3">Help?</span>
          <span className="me-3">Track Order</span>
          <Dropdown className="d-inline me-3">
           images <Dropdown.Toggle variant="dark" size="sm">
              Language
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Tamil</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="d-inline">
            <Dropdown.Toggle variant="dark" size="sm">
              Currency
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>INR</Dropdown.Item>
              <Dropdown.Item>USD</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
{/* Main Header */}
      <Container className="py-3">
        <Row className="align-items-center">
          {/* Logo */}
          <Col md={2}>
            <img src={LogoImg} className='m2' />
           
          </Col>

          {/* Dropdown + Search */}
          <Col md={6}>
            <InputGroup>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">Vegetables</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Fruits</Dropdown.Item>
                  <Dropdown.Item>Dairy</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <FormControl placeholder="Search products..." />
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </Col>
          {/* Icons */}
          <Col md={4} className="text-end">
            <span className="me-4">
              <FaUser className="me-1" /> <small>Account</small><strong>Login</strong>
            </span>
            <span className="me-4">
              <FaHeart className="me-1" /> <small>3 Items</small><strong>Wishlist</strong>
            </span>
            <span className="me-2">
              <FaShoppingCart className="me-1" /> <small>4 Items</small><strong>Cart</strong>
            </span>
          </Col>
        </Row>
      </Container>
<Navbar bg="light" expand="lg" className="border-bottom">
      <Container>
        {/* Left Icon */}
        <Navbar.Brand href="#" className="d-flex align-items-center me-4">
          <FaThLarge className="text-dark" />
        </Navbar.Brand>
        {/* Main Nav Links */}
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Categories</Nav.Link>
          <Nav.Link href="#">Products</Nav.Link>
          <Nav.Link href="#">Pages</Nav.Link>
          <Nav.Link href="#">Blog</Nav.Link>
          <Nav.Link href="#">Offers</Nav.Link>
        </Nav>

        {/* Location Dropdown */}
        <Dropdown align="end">
          <Dropdown.Toggle
            variant="outline-light"
            id="location-dropdown"
            className="d-flex align-items-center"
            style={{ border: '1px solid #ddd', padding: '5px 10px' }}
          >
            <FaMapMarkerAlt className="me-1 text-primary" />
           <span>location</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Surat</Dropdown.Item>
            <Dropdown.Item>Chennai</Dropdown.Item>
            <Dropdown.Item>Mumbai</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
<div className='j3'>
  <p >Flat 30% off</p>
  <h2>Explore <span className='text-primary'>organic</span><br />& Fresh Vegetables
  <br />
<Button variant="outline-dark">Shop Now</Button>
</h2>
</div>
<img src={VegImg} className='img1' />

    <div className='pnk1'>
      <img src={Images} className="image" />
    </div>
  <h1 className='pv1'>Explore<br/>
  <span>Categories</span>
    </h1>
    
</header>
  )
}

export default Deed;