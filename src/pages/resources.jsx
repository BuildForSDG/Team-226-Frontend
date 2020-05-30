import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import LoggedHeader from '../components/dashboard/logged-header';
import Sidebar from '../components/dashboard/sidebar';
import notificationService from '../core/services/notification';
import CreateResource from '../components/create-resource/create-resource';
import ViewResource from '../components/view-resource/view-resource';

import '../styles/resources.css';

function Resources() {
  const deleteResource = () => {
    notificationService
      .showError({
        title: 'Delete Resource',
        message: 'Are you sure you want to delete?',
        resolveLabel: 'Delete',
        rejectLabel: 'Cancel'
        // eslint-disable-next-line no-console
      })
      .then(() => console.log('Resource deleted'));
  };

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
              <Button className="default-btn new-resource-btn" data-testid="newResource" size="sm" onClick={() => CreateResource('Create Resource')}>
                NEW
              </Button>
            </div>
            <div className="single-resource">
              <div className="vertical-component">
                <p className="resource-tit" onClick={ViewResource}>
                  Resource name some long name here
                </p>
                <p className="medium-text">19-05-2020</p>
              </div>
              <p className="medium-text single-resource-descr">
              Fruitcake tart carrot cake jelly beans chocolate Sweet roll cupcake tart pastry.
              Chocolate marzipanpuddinglollipop. Muffin ice cream gummies chupa chups halvah
              toffee candy canes cand. Fruitcake tart carrot cake jelly beans chocolate Sweet
              roll cupcake tart pastry. Chocolate marzipanpudding lollipop. Muffin
              ice cream gummies chupa chups halvah toffee candy canes cand.
              </p>
              <div className="vertical-component">
                <p className="medium-text grey-text">categoty name</p>
                <div className="icon-section">
                  <p className="edit-text" onClick={() => CreateResource('Edit Resource')}>Edit</p>
                  <p className="del-text" onClick={deleteResource}>
                    Delete
                  </p>
                </div>
              </div>
            </div>
            <div className="single-resource">
              <div className="vertical-component">
                <p className="resource-tit">Resource name some long name here</p>
                <p className="medium-text">19-05-2020</p>
              </div>
              <p className="medium-text single-resource-descr">
              Fruitcake tart carrot cake jelly beans chocolate Sweet roll cupcake tart pastry.
              Chocolate marzipanpuddinglollipop. Muffin ice cream gummies chupa chups halvah
              toffee candy canes cand. Fruitcake tart carrot cake jelly beans chocolate Sweet
              roll cupcake tart pastry. Chocolate marzipanpudding lollipop. Muffin
              ice cream gummies chupa chups halvah toffee candy canes cand.
              </p>
              <div className="vertical-component">
                <p className="medium-text grey-text">categoty name</p>
                <div className="icon-section">
                  <p className="edit-text">Edit</p>
                  <p className="del-text">Delete</p>
                </div>
              </div>
            </div>
            <div className="single-resource">
              <div className="vertical-component">
                <p className="resource-tit">Resource name some long name here</p>
                <p className="medium-text">19-05-2020</p>
              </div>
              <p className="medium-text single-resource-descr">
              Fruitcake tart carrot cake jelly beans chocolate Sweet roll cupcake tart pastry.
              Chocolate marzipanpuddinglollipop. Muffin ice cream gummies chupa chups halvah
              toffee candy canes cand. Fruitcake tart carrot cake jelly beans chocolate Sweet
              roll cupcake tart pastry. Chocolate marzipanpudding lollipop. Muffin
              ice cream gummies chupa chups halvah toffee candy canes cand.
              </p>
              <div className="vertical-component">
                <p className="medium-text grey-text">categoty name</p>
                <div className="icon-section">
                  <p className="edit-text">Edit</p>
                  <p className="del-text">Delete</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Resources;
