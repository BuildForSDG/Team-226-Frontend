import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import LoggedHeader from '../components/dashboard/logged-header';
import Sidebar from '../components/dashboard/sidebar';

import '../styles/my-land.css';

function MyLand() {
  const test = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <LoggedHeader siteTitle="Farm Voice" />
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9} className="right-component">
          <div className="resources-container">
            <div className="btn-new">
              <Button className="default-btn new-resource-btn" data-testid="newLand" size="sm">
                NEW
              </Button>
            </div>
            <Row>
              {test.map((item) => (
                  <Col key={item} lg={4} sm={6} className="single-land">
                    <Card bg="light" text="dark">
                      <Card.Header>700 <sup>2</sup> M - <span className="medium-text">Rent</span></Card.Header>
                      <Card.Body>
                        <Card.Title>The Land title here</Card.Title>
                        <Card.Text className="medium-text">
                          Cameroon, South-West, Tiko
                          <br />
                          0 <strong>XAF</strong>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MyLand;
