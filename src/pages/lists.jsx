import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { navigate } from 'gatsby';

import LoggedHeader from '../components/dashboard/logged-header';
import Sidebar from '../components/dashboard/sidebar';
import notificationService from '../core/services/notification';
import CreateList from '../components/create-list/creste-list';
import ViewList from '../components/view-list/view-list';
import listService from '../core/services/list-service';
import httpLoader from '../core/services/http-loader';

import '../styles/resources.css';

function Lists() {
  const [lists, setLists] = useState([]);
  const deleteResource = () => {
    notificationService
      .showError({
        title: 'Delete List',
        message: 'Are you sure you want to delete?',
        resolveLabel: 'Delete',
        rejectLabel: 'Cancel'
      });
  };

  useEffect(() => {
    async function getLands() {
      try {
        await httpLoader.onLoad(
          () => listService.getUserList().then((data) => setLists(data)), {
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
            <div className="btn-new">
              <Button className="default-btn new-resource-btn" data-testid="newResource" size="sm" onClick={() => CreateList('Create List')}>
                NEW
              </Button>
            </div>
            {lists.length > 0
              ? <div>
            {lists.map((item) => (
                <div key={item.id} className="single-resource">
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
            ))}
            </div>
              : <p className="no-land">You do not have any lists yet!</p>}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Lists;
