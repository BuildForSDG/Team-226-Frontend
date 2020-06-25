import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { navigate } from 'gatsby';

import notificationService from '../core/services/notification';
import LoggedHeader from '../components/dashboard/logged-header';
import httpLoader from '../core/services/http-loader';

import Sidebar from '../components/dashboard/sidebar';
import ViewLand from '../components/view-land/view-land';
import CreateLand from '../components/create-land/create-land';
import landService from '../core/services/land-service';

import '../styles/my-land.css';

const deleteMyLand = async (landId) => {
  try {
    const { response } = await httpLoader.onLoad(landService.deleteLand(landId), {
      400: () => notificationService.showWarning({
        title: 'Error',
        message: 'There is no land listing with this title available.',
        rejectLabel: 'close'
      })
    });
    if (response === undefined) {
      notificationService.showSuccess({
        title: 'Land Deleted',
        message: 'You successfully deleted a land listing',
        resolveLabel: 'Refresh'
      }).then(() => window.location.reload());
    } else {
      notificationService.showWarning({
        title: 'Error occured',
        message: 'There was an error deleting this land listing. Please try again',
        resolveLabel: 'close'
      });
    }
    return true;
  } catch (e) {
    return e;
  }
};

function MyLand() {
  const [lands, setLands] = useState([]);
  const deleteLand = (landId) => {
    notificationService
      .showError({
        title: 'Delete Land',
        message: 'Are you sure you want to delete?',
        resolveLabel: 'Delete',
        rejectLabel: 'Cancel'
      })
      .then(() => deleteMyLand(landId));
  };

  useEffect(() => {
    async function getLands() {
      try {
        await httpLoader.onLoad(
          () => landService.getUserLand().then((data) => setLands(data)), {
            401: () => notificationService.showWarning({
              title: 'Error',
              message: 'Your session has expired, please login to continue!',
              resolveLabel: 'Login'
            }).then(() => navigate('sign-in'))
          }
        );
        return true;
      } catch (e) {
        return e;
      }
    }

    getLands();
  }, []);
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
              <Button
                className="default-btn new-resource-btn"
                data-testid="newLand"
                size="sm"
                onClick={() => CreateLand('Create Land')}
              >
                NEW
              </Button>
            </div>
            <Row>
              {lands.length > 0 ? (
                lands.map((item) => (
                  <Col key={item.id + item.title} lg={4} sm={6} className="single-land">
                    <Card bg="light" text="dark">
                      <Card.Header onClick={() => ViewLand(item)}>
                        {item.size} <sup>2</sup> {item.size_unit_measurement} -{' '}
                        <span className="medium-text">{item.for_type === 'FR' ? 'Free' : 'Rent'}</span>
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <div className="medium-text">
                          {item.location}
                          <br />
                          {item.for_type === 'FR' ? '0' : item.cost} <strong>{item.currency}</strong>
                          <br />
                        </div>
                        <div className="land-icon-section">
                          <span className="edit-text" onClick={() => CreateLand('Edit Land', item)}>
                            Edit
                          </span>
                          <span className="del-text medium-text" onClick={() => deleteLand(item.id)}>
                            Delete
                          </span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p className="no-land">You do not have any land listings yet!</p>
              )}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MyLand;
