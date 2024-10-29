import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Favourites = () => {
  return (
    <Container fluid style={{ backgroundColor: '#BF005F', padding: '20px 0' }}>
      <div style={{ backgroundColor: '#800040', padding: '30px 20px' }}>
        <h1 className="text-light text-center mb-4">My Favourites</h1>
        <div className="d-flex justify-content-center">
          <input
            type="text"
            placeholder="Search title, author or keyword"
            style={{ width: '100%', maxWidth: '350px', height: '35px', padding: '5px 10px', marginRight: '10px' }}
          />
          <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '27px', color: '#FF409F' }}></i>
        </div>
      </div>
      <Row className="justify-content-center mt-4">
        {[
          { title: 'Stuck with a Billionaire', imgSrc: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-12/cover_md.jpeg?itok=onVqDA6t' },
          { title: 'The Granite Key', imgSrc: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/2024-09/81Pn%2B4whIVL._SL1500_.jpg?itok=UMuOt1Nu' },
          { title: 'Uncovering Lily', imgSrc: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-09/61UigRw8j4L._SL1500_.jpg?itok=UFkaQscY' },
          { title: 'Remember', imgSrc: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/2024-07/91JczhKzCrL._SL1500_.jpg?itok=6VNlPSEp' },
          { title: 'The Making of a Matchmaker', imgSrc: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-02/51BWlPvGsHL.jpg?itok=4Sfl4CNM' },
          { title: 'Healing Her Heart', imgSrc: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/2018-09/LauraScott_HealingHerHeart_2500.jpg?itok=qOEQEyJx' },
          { title: 'Siddhartha', imgSrc: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-cust-3520.jpg?itok=DFVxY1zk' },
          { title: 'Billionaire Boss Protector', imgSrc: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-10/81yLAj-dOjL._SL1500_.jpg?itok=6xu7KrJD' },
          { title: "Gulliver's Travels", imgSrc: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-cust-6763.jpg?itok=jN1kvJdQ' },
          { title: 'The Man in the Iron Mask', imgSrc: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-cust-3354.jpg?itok=1uQPBG29' }
        ].map((book, index) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index} className="d-flex flex-column align-items-center mt-4">
            <img className="img-fluid shadow-lg" style={{ maxHeight: '300px' }} src={book.imgSrc} alt={book.title} />
            <h5 className="mt-3 text-light text-center">{book.title}</h5>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Favourites;
