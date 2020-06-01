import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import LoggedHeader from '../components/dashboard/logged-header';
import Sidebar from '../components/dashboard/sidebar';
import notificationService from '../core/services/notification';
import CreateList from '../components/create-list/creste-list';
import ViewList from '../components/view-list/view-list';

import '../styles/resources.css';

function MyLand() {
  const deleteResource = () => {
    notificationService
      .showError({
        title: 'Delete List',
        message: 'Are you sure you want to delete?',
        resolveLabel: 'Delete',
        rejectLabel: 'Cancel'
      })
      // eslint-disable-next-line no-console
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
              <Button className="default-btn new-resource-btn" data-testid="newResource" size="sm" onClick={() => CreateList('Create List')}>
                NEW
              </Button>
            </div>
            <div className="single-resource">
              <div className="vertical-component">
                <p className="resource-tit" onClick={ViewList}>
                  List name some long name here
                </p>
                <p className="medium-text">19-05-2020</p>
              </div>
              <div className="vertical-component">
                <p className="medium-text grey-text">12 Resources</p>
                <div className="icon-section">
                  <p className="edit-text" onClick={() => CreateList('Edit List')}>Edit</p>
                  <p className="del-text" onClick={deleteResource}>
                    Delete
                  </p>
                </div>
              </div>
            </div>
            <div className="single-resource">
              <div className="vertical-component">
                <p className="resource-tit" onClick={ViewList}>
                  List name some long name here
                </p>
                <p className="medium-text">19-05-2020</p>
              </div>
              <div className="vertical-component">
                <p className="medium-text grey-text">0 Resources</p>
                <div className="icon-section">
                  <p className="edit-text" onClick={() => CreateList('Edit List')}>Edit</p>
                  <p className="del-text" onClick={deleteResource}>
                    Delete
                  </p>
                </div>
              </div>
            </div>
            <div className="single-resource">
              <div className="vertical-component">
                <p className="resource-tit" onClick={ViewList}>
                  List name some long name here
                </p>
                <p className="medium-text">19-05-2020</p>
              </div>
              <div className="vertical-component">
                <p className="medium-text grey-text">3 Resources</p>
                <div className="icon-section">
                  <p className="edit-text" onClick={() => CreateList('Edit List')}>Edit</p>
                  <p className="del-text" onClick={deleteResource}>
                    Delete
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MyLand;
