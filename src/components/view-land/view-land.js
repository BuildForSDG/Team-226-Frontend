import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

import DialogWrapper from '../../core/services/dialog/DialogWrapper.jsx';
import Modal from '../../core/services/dialog';
import '../../styles/view-land.css';

const formatDate = (input) => {
  const date = new Date(input);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

const ViewLand = (land) => {
  Modal.show(({ hide, cancel }) => (
    <DialogWrapper
      header={
        <span className="resource-modal-title">
          {land.title} <Badge variant="success">{land.for_type === 'FR' ? 'Free' : 'Rent'}</Badge>
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
              <strong>Size: </strong> {land.size} <sup>2</sup> {land.size_unit_measurement}
            </p>
            <p>
              <strong>Cost: </strong> {land.cost} {land.currency}
            </p>
            <p>
              <strong>Location: </strong> {land.location}
            </p>
            <p>
              <strong>Lease rate: </strong> Per {land.lease_rate_periodicity}
            </p>
            <p>
              <strong>Visibility: </strong> {land.visibility}
            </p>
            <p>
              <strong>Date Created: </strong> {formatDate(land.date_created)}
            </p>
            <p>
              <strong>Lastly Updated: </strong> {formatDate(land.date_updated)}
            </p>
          </Card.Body>
        </Card>
      </div>
    </DialogWrapper>
  ));
};

export default ViewLand;
