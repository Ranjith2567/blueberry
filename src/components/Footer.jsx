import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import Imge1 from '../Images/logo1.png';
import Img2 from '../Images/android.png';
import Img3 from '../Images/apple.png';

const Footer = () => {
  return (
    <>
      <div className="brand-directory py-4">
        <Container>
          <Row>
            <Col md={3}>
              <strong>Jewellery :</strong><br />
              Necklace | Earrings | Couple Rings | Pendants | Crystal | Bangles | Bracelets | Nose Pin | Chain | Earrings | Couple Rings
            </Col>
            <Col md={3}>
              <strong>Fashion :</strong><br />
              T-Shirt | Short & Jeans | Jacket | Dress & Frock | Inner Wear | Hosiery
            </Col>
            <Col md={3}>
              <strong>Footwear :</strong><br />
              Sport | Formal | Boots | Casual | Cowboy Shoes | Safety Shoes | Party Wear Shoes | Branded | First Copy | Long Shoes
            </Col>
            <Col md={3}>
              <strong>Cosmetics :</strong><br />
              Shampoo | Body Wash | Face Wash | Makeup Kit | Liner | Lipstick | Perfume | Body Shop | Scrub | Hair Gel | Hair Colors | Hair Dye | Sunscreen | Skin Lotion
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="footer-area py-5">
        <Container>
          <Row className="text-start">
            <Col md={3}>
              <div className="footer-logo mb-3">
                <img src={Imge1} alt="logo" width={30} />{' '}
           
              </div>
              <p className="text-muted">
                BlueBerry is the biggest market of grocery products. Get your daily needs from our store.
              </p>
              <div className="store-links d-flex gap-2 mt-3">
                <img src={Img2} alt="Google Play" width={120} />
                <img src={Img3} alt="App Store" width={120} />
              </div>
            </Col>

            <Col md={2}>
              <h6>Category</h6>
              <ul className="list-unstyled text-muted">
                <li>Dairy & Milk</li>
                <li>Snack & Spice</li>
                <li>Fast Food</li>
                <li>Juice & Drinks</li>
                <li>Bakery</li>
                <li>Seafood</li>
              </ul>
            </Col>

            <Col md={2}>
              <h6>Company</h6>
              <ul className="list-unstyled text-muted">
                <li>About us</li>
                <li>Delivery</li>
                <li>Legal Notice</li>
                <li>Terms & conditions</li>
                <li>Secure payment</li>
                <li>Contact us</li>
              </ul>
            </Col>

            <Col md={2}>
              <h6>Account</h6>
              <ul className="list-unstyled text-muted">
                <li>Sign In</li>
                <li>View Cart</li>
                <li>Return Policy</li>
                <li>Become a Vendor</li>
                <li>Affiliate Program</li>
                <li>Payments</li>
              </ul>
            </Col>

            <Col md={3}>
              <h6>Contact</h6>
              <ul className="list-unstyled text-muted">
                <li><MdLocationOn /> 971 Lajamni, Motavarachha, Surat, Gujarat, Bharat 394101.</li>
                <li><BsWhatsapp /> +00 9876543210</li>
                <li><MdEmail /> example@email.com</li>
              </ul>
              <div className="social-icons d-flex gap-3 mt-2">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
