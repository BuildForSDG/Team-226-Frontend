import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

import DialogWrapper from '../../core/services/dialog/DialogWrapper.jsx';
import Modal from '../../core/services/dialog';
import '../../styles/view-land.css';

const ViewLand = () => {
  Modal.show(({ hide, cancel }) => (
    <DialogWrapper
      header={
        <span className="resource-modal-title">
          Some Land title here <Badge variant="success">For Rent</Badge>
        </span>
      }
      footer={
        <Button className="default-btn" data-testid="doneeResource" size="sm" onClick={hide}>
          DONE
        </Button>
      }
      hide={hide}
      cancel={cancel}
    >
      <div className="resource-modal-body">
        <Card className="land-modal-body">
          <Card.Body>
            <p>
              <strong>Size: </strong> 700 <sup>2</sup> m
            </p>
            <p>
              <strong>Cost: </strong> 0 XAF
            </p>
            <p>
              <strong>Location: </strong> Cameroon, South-West - Tiko
            </p>
            <p>
              <strong>Lease rate: </strong> Per month
            </p>
            <p>
              <strong>Visibility: </strong> Private
            </p>
          </Card.Body>
        </Card>
      </div>
    </DialogWrapper>
  ));
};

export default ViewLand;
