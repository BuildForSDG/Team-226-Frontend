import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import LoggedHeader from '../components/dashboard/logged-header';
import Sidebar from '../components/dashboard/sidebar';
import DialogWrapper from '../core/services/dialog/DialogWrapper.jsx';
import Modal from '../core/services/dialog';
import notificationService from '../core/services/notification';

import '../styles/resources.css';

function Resources() {
  const viewResource = () => {
    Modal.show(
      ({ hide, cancel }) => <DialogWrapper
        header={<span className="resource-modal-title">Resource name some long name here</span>}
        hide={hide}
        cancel={cancel}
      >
        <div className="resource-modal-body">
        <p className="medium-text">19-05-2020 - Categoty name</p>
        <p className="">
          Fruitcake tart carrot cake jelly beans chocolate Sweet roll cupcake tart pastry.
          Chocolate marzipanpuddinglollipop. Muffin ice cream gummies chupa chups halvah
          toffee candy canes cand. Fruitcake tart carrot cake jelly
          beans chocolate Sweet roll cupcake tart pastry. Chocolate marzipanpudding lollipop.
          Muffin ice cream gummies chupa chups halvah toffee candy canes cand.
        </p>
        <iframe width="100%" height="278" src="https://www.youtube.com/embed/helEv0kGHd4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
        <p className="">
          Fruitcake tart carrot cake jelly beans chocolate Sweet roll cupcake tart pastry.
          Chocolate marzipanpuddinglollipop. Muffin ice cream gummies chupa chups halvah
          toffee candy canes cand. Fruitcake tart carrot cake jelly
          beans chocolate Sweet roll cupcake tart pastry. Chocolate marzipanpudding lollipop.
          Muffin ice cream gummies chupa chups halvah toffee candy canes cand.
        </p>
        </div>
      </DialogWrapper>
    ).then((reason) => {
      // When the dialog is submitted
      // eslint-disable-next-line no-console
      console.log(reason);
    }).catch((reason) => {
      // When the dialog is cancelled
      // eslint-disable-next-line no-console
      console.log(reason);
    });
  };

  const deleteResource = () => {
    notificationService.showError({
      title: 'Delete Resource',
      message: 'Are you sure you want to delete?',
      resolveLabel: 'Delete',
      rejectLabel: 'Cancel'
    // eslint-disable-next-line no-console
    }).then(() => console.log('Resource deleted'));
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
              <Button className="default-btn new-resource-btn" data-testid="newResource" size="sm">
                NEW
              </Button>
            </div>
            <div className="single-resource">
              <div className="vertical-component">
                <p className="resource-tit" onClick={viewResource}>
                  Resource name some long name here
                </p>
                <p className="medium-text">19-05-2020</p>
              </div>
              <p className="medium-text single-resource-descr">
              Fruitcake tart carrot cake jelly beans chocolate Sweet roll cupcake tart pastry.
              Chocolate marzipanpuddinglollipop. Muffin ice cream gummies chupa chups halvah
              toffee candy canes cand. Fruitcake tart carrot cake jelly
              beans chocolate Sweet roll cupcake tart pastry. Chocolate marzipanpudding lollipop.
              Muffin ice cream gummies chupa chups halvah toffee candy canes cand.
              </p>
              <div className="vertical-component">
                <p className="medium-text grey-text">categoty name</p>
                <div className="icon-section">
                  <p className="edit-text">Edit</p>
                  <p className="del-text" onClick={deleteResource}>Delete</p>
                </div>
              </div>
            </div>
            <div className="single-resource">
              <div className="vertical-component">
              <p className="resource-tit">
                  Resource name some long name here
                </p>
                <p className="medium-text">19-05-2020</p>
              </div>
              <p className="medium-text single-resource-descr">
              Fruitcake tart carrot cake jelly beans chocolate Sweet roll cupcake tart pastry.
              Chocolate marzipanpuddinglollipop. Muffin ice cream gummies chupa chups halvah
              toffee candy canes cand. Fruitcake tart carrot cake jelly
              beans chocolate Sweet roll cupcake tart pastry. Chocolate marzipanpudding lollipop.
              Muffin ice cream gummies chupa chups halvah toffee candy canes cand.
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
              <p className="resource-tit">
                  Resource name some long name here
                </p>
                <p className="medium-text">19-05-2020</p>
              </div>
              <p className="medium-text single-resource-descr">
              Fruitcake tart carrot cake jelly beans chocolate Sweet roll cupcake tart pastry.
              Chocolate marzipanpuddinglollipop. Muffin ice cream gummies chupa chups halvah
              toffee candy canes cand. Fruitcake tart carrot cake jelly
              beans chocolate Sweet roll cupcake tart pastry. Chocolate marzipanpudding lollipop.
              Muffin ice cream gummies chupa chups halvah toffee candy canes cand.
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
