import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Imge1  from '../Images/image.png';
import Image2 from '../Images/img3.png';

const PromotionalCard = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="mb-4">
          <div className="promo-card promo-snack d-flex align-items-center justify-content-between">
            <img src={Imge1} alt="Tasty Snack" className="promo-img" />
            <div className="promo-text text-end">
              <h4>Tasty Snack<br />& Fast food</h4>
              <p>The flavour of<br />something special</p>
              <Button variant="outline-dark" size="sm">Shop Now</Button>
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="promo-card promo-fruit d-flex align-items-center justify-content-between">
            <img src={Image2}alt="Fresh Fruits" className="promo-img" />
            <div className="promo-text text-end">
              <h4>Fresh Fruits<br />& Vegetables</h4>
              <p>A healthy meal for every one</p>
              <Button variant="outline-dark" size="sm">Shop Now</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    
  );
};

export default PromotionalCard;
