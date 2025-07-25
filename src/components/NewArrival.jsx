import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Image2 from '../Images/pematto.jpg';
import Image3 from '../Images/spine.jpg';
const products = [
  {
    label: 'NEW',
    category: 'Snacks',
    title: 'Ground Nuts Oil Pack',
    price: 15,
    oldPrice: 22,
    rating: 4,
    quantity: '500g',
    image: '/images/groundnuts.png',
    stock: 'In Stock',
  },
  {
    label: '',
    category: 'Fruit',
    title: 'Red Cherry Serbia',
    price: 6,
    oldPrice: 8,
    rating: 4,
    quantity: '250g',
    image: '/images/cherries.png',
    stock: 'In Stock',
  },
  {
    label: 'TREND',
    category: 'Leaves',
    title: 'Fresh Coriander',
    price: 1,
    oldPrice: null,
    rating: 4,
    quantity: '',
    image: '/images/coriander.png',
    stock: 'In Stock',
  },
  {
    label: '',
    category: 'Chips',
    title: 'Crunchy Potato Chips',
    price: 25,
    oldPrice: null,
    rating: 4,
    quantity: '',
    image: '/images/potato-chips.png',
    stock: 'In Stock',
  },
];

const NewArrival = () => {
  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <div>
          <h3 className="fw-bold">New <span className="text-primary">Arrivals</span></h3>
          <p className="text-muted">Shop online for new arrivals and get free shipping!</p>
        </div>
        <div className="category-links text-muted">
          <span className="text-primary">All</span> / Snack & Spices / Fruits / Vegetables
        </div>
      </div>
      <Row>
        {products.map((item, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card className="arrival-card h-100 text-center">
              <div className="position-relative">
                <Card.Img variant="top" src={Image2} className="arrival-img" />
                {item.label && (
                  <span className="position-absolute top-0 start-0 arrival-label">{item.label}</span>
                )}
              </div>
              <Card.Body>
                <div className="text-muted small">{item.category}</div>
                <Card.Title className="arrival-title">{item.title}</Card.Title>
                <div className="text-warning mb-2">
                  {[...Array(4)].map((_, i) => <FaStar key={i} size={14} />)}
                  <FaStarHalfAlt size={14} />
                </div>
                <div className="mb-1">
                  <strong>${item.price}</strong>{' '}
                  {item.oldPrice && <span className="text-muted text-decoration-line-through">${item.oldPrice}</span>}
                </div>
                <div className={`stock-info ${item.stock === 'Out Of Stock' ? 'text-danger' : 'text-primary'}`}>
                  {item.stock}
                </div>
                <div className="text-muted small">{item.quantity}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap"/>
       
      <Row>
        {products.map((item, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card className="arrival-card h-100 text-center">
              <div className="position-relative">
                <Card.Img variant="top" src={Image3} className="arrival-img" />
                {item.label && (
                  <span className="position-absolute top-0 start-0 arrival-label">{item.label}</span>
                )}
              </div>
              <Card.Body>
                <div className="text-muted small">{item.category}</div>
                <Card.Title className="arrival-title">{item.title}</Card.Title>
                <div className="text-warning mb-2">
                  {[...Array(4)].map((_, i) => <FaStar key={i} size={14} />)}
                  <FaStarHalfAlt size={14} />
                </div>
                <div className="mb-1">
                  <strong>${item.price}</strong>{' '}
                  {item.oldPrice && <span className="text-muted text-decoration-line-through">${item.oldPrice}</span>}
                </div>
                <div className={`stock-info ${item.stock === 'Out Of Stock' ? 'text-danger' : 'text-primary'}`}>
                  {item.stock}
                </div>
                <div className="text-muted small">{item.quantity}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

  );
};

export default NewArrival;
