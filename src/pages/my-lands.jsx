import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import notificationService from '../core/services/notification';

import LoggedHeader from '../components/dashboard/logged-header';
import Sidebar from '../components/dashboard/sidebar';
import ViewLand from '../components/view-land/view-land';
import CreateLand from '../components/create-land/create-land';
import landService from '../core/services/land-service';

import '../styles/my-land.css';

function MyLand() {
  const [lands, setLands] = useState([]);
  const test = [1, 2, 3, 4, 5, 6, 7, 8];
  const deleteLand = () => {
    notificationService
      .showError({
        title: 'Delete Land',
        message: 'Are you sure you want to delete?',
        resolveLabel: 'Delete',
        rejectLabel: 'Cancel'
      })
      // eslint-disable-next-line no-console
      .then(() => console.log('Land deleted'));
  };

  useEffect(() => {
    landService.getUserLands().then((data) => setLands(data));
  }, []);
  console.log(lands);
  return (
    <div>
      <LoggedHeader siteTitle="Farm Voice" />
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9} className="right-component">
          <div className="resources-container">
            <div className="btn-new-container">
              <Button className="default-btn new-resource-btn" data-testid="newLand" size="sm" onClick={() => CreateLand('Create Land')}>
                NEW
              </Button>
            </div>
            <Row>
              { lands.length > 0
                ? lands.map((item) => (
                <Col key={item} lg={4} sm={6} className="single-land">
                  <Card bg="light" text="dark">
                    <Card.Header onClick={ViewLand}>
                      700 <sup>2</sup> m - <span className="medium-text">Rent</span>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>The Land title here</Card.Title>
                      <div className="medium-text">
                        Cameroon, South-West, Tiko
                        <br />0 <strong>XAF</strong>
                        <br />
                      </div>
                      <div className="land-icon-section">
                          <span className="edit-text" onClick={() => CreateLand('Edit Land')}>Edit</span>
                          <span className="del-text medium-text" onClick={deleteLand}>
                            Delete
                          </span>
                        </div>
                    </Card.Body>
                  </Card>
                </Col>
                ))
                : <p className="no-land">You do not have any land listings yet!</p>
            }
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MyLand;
