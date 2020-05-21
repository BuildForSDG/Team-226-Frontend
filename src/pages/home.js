import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/home-layout';
import SEO from '../components/seo';

import WhyImage from '../components/home-page/why-image.jsx';
import HeroImage from '../components/home-page/hero-image.jsx';

import '../styles/home.css';

const InfoCard = () => <Col md={4} sm={6} xs={12}>
  <Card style={{ margin: '10px auto' }}>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card content.
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-page">
      <HeroImage/>
      <section className="contents">
        <h3>
          Topping tootsie roll soufflé pudding chocolate cake
          gummi bears candy canes cotton candy chocolate cake.
        </h3>
        <Button className="default-btn" data-testid="export" size="lg" style={ { border: 'none' } }>EXPLORE</Button>
      </section>
      <section className="padded cards">
        <h3>Services</h3>
        <p>Cookie chupa chups toffee cotton candy wafer pastry pie</p>
        <Container>
          <Row>
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </Row>
        </Container>
      </section>
      <section className="padded home-cta">
      <Container>
          <Row>
            <Col md={6} sm={12}>
              <h3>Why Us</h3>
              <p>
                Topping tootsie roll soufflé pudding chocolate cake
                gummi bears candy canes cotton candy chocolate cake.
                Fruitcake icing apple pie bonbon gummies
                cupcake muffin dragée. Gingerbread soufflé soufflé.
              </p>
              <Button className="default-btn" data-testid="export" size="lg" style={ { border: 'none' } }>GET STARTED</Button>
            </Col>
            <Col md={6} sm={12}>
              <WhyImage></WhyImage>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
