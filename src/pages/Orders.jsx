import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Orders = () => {
  return (
    <Container fluid style={{ padding: 0 }}>
      <div style={{ backgroundColor: '#80D4DB', padding: '40px 0' }}>
        <h1 className="text-dark text-center mb-4">My Orders</h1>
      </div>

      <Row className="justify-content-start mt-4 mx-0 g-0">
        <Col xs={10} md={5} lg={4} className="d-flex align-items-center" style={{width:'400px',marginLeft:'400px'}}>
          <img src="https://manybooks.net/sites/default/files/styles/220x330_ebook/public/webform/ebook_feature_application/10281/ebook-cover-with-award.jpg?itok=1lY0QKtK" alt="Order cover" className="img-fluid shadow" style={{ maxHeight: '200px', objectFit: 'cover' }}/>
        </Col>
        <Col xs={10} md={6} lg={5} className="d-flex flex-column align-items-start ps-2" style={{marginLeft:'-200px'}}>
  <p className="mb-0">Delivered on Oct 27, 2024</p>
  <h3>Of Dreams and Angels</h3>
  <p>by Jared Morrison</p>
<p>A heart-rending tale of a man who dreams through the eyes of a woman he's never met, setting out to find love that might be a figment of his imagination.</p>
<p className='text-success'>paid Rs.499</p>
<p>order ID: <span className='text-warning'>OD23245656677788787311334</span></p>
</Col>

      </Row>
      <Row className="justify-content-start mt-4 mx-0 g-0">
        <Col xs={10} md={5} lg={4} className="d-flex align-items-center" style={{width:'400px',marginLeft:'400px'}}>
          <img src="https://manybooks.net/sites/default/files/styles/220x330_ebook/public/2024-10/81HoTvo-nXL._SY466_.jpg?itok=2a3UY8Tq" alt="Order cover" className="img-fluid shadow" style={{ maxHeight: '200px', objectFit: 'cover' }}/>
        </Col>
        <Col xs={10} md={6} lg={5} className="d-flex flex-column align-items-start ps-2" style={{marginLeft:'-200px'}}>
  <p className="mb-0">Delivered on Feb 2, 2024</p>
  <h3>Genies and Gibberish</h3>
  <p>by Elizabeth Pantley</p>
<p>Whenever this group chooses a book, magic happens. The mystery comes to life, and they find themselves part of the story.</p>
<p className='text-success'>paid Rs.580</p>
<p>order ID: <span className='text-warning'>OD2983239290321111234</span></p>
</Col>

      </Row>
      <Row className="justify-content-start mt-4 mx-0 g-0">
        <Col xs={10} md={5} lg={4} className="d-flex align-items-center" style={{width:'400px',marginLeft:'400px'}}>
          <img src="https://manybooks.net/sites/default/files/styles/220x330_ebook/public/webform/ebook_feature_application/10211/becoming-becca-solomon-cover-front-final-25-07-24.jpg?itok=pR8p-omz"
            alt="Order cover" className="img-fluid shadow" style={{ maxHeight: '200px', objectFit: 'cover' }} />
        </Col>
        <Col xs={10} md={6} lg={5} className="d-flex flex-column align-items-start ps-2" style={{marginLeft:'-200px'}}>
  <p className="mb-0">Delivered on Dec 11, 2023</p>
  <h3>Becoming Becca Solomon</h3>
  <p>by Dahlia Moore</p>
<p>Can a daughter ever truly be free of her mother’s shadow? Becoming Becca Solomon is a poignant exploration of a courageous woman’s pursuit of self-fulfillment </p>
<p className='text-success'>paid Rs.790</p>
<p>order ID: <span className='text-warning'>OD1234567890</span></p>
</Col>

      </Row>
      <Row className="justify-content-start mt-4 mx-0 g-0">
        <Col xs={10} md={5} lg={4} className="d-flex align-items-center" style={{width:'400px',marginLeft:'400px'}}>
          <img src="https://manybooks.net/sites/default/files/styles/220x330_ebook/public/webform/ebook_feature_application/10278/the-eagle-leader-ebook-%281.jpg?itok=6jerT02y"
            alt="Order cover" className="img-fluid shadow" style={{ maxHeight: '200px', objectFit: 'cover' }} />
        </Col>
        <Col xs={10} md={6} lg={5} className="d-flex flex-column align-items-start ps-2" style={{marginLeft:'-200px'}}>
  <p className="mb-0">Delivered on Sept 24, 2023</p>
  <h3>The Eagle Leader</h3>
  <p>by Leon Tates</p>
<p>Drawing inspiration from the eagle's keen vision and adaptability, "The Eagle Leader" provides a transformative roadmap for management professionals.  </p>
<p className='text-success'>paid Rs.387</p>
<p>order ID: <span className='text-warning'>OD72189329329434</span></p>
</Col>

      </Row>
    </Container>
  );
};

export default Orders;
