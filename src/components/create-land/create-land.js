import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';

import DialogWrapper from '../../core/services/dialog/DialogWrapper.jsx';
import Modal from '../../core/services/dialog';
import '../../styles/create-resource.css';

const CreateLand = (title) => {
  Modal.show(({ hide, cancel }) => (
    <DialogWrapper
      header={<span className="resource-modal-title">{title}</span>}
      footer={
        <div className="create-resource-footer vertical-component">
          <Button className="cancel-btn" data-testid="cancelresource" size="sm" onClick={cancel}>
            CANCEL
          </Button>
          <Button className="default-btn" data-testid="saveCreateResource" size="sm" onClick={hide}>
            SAVE
          </Button>
        </div>
      }
      hide={hide}
      cancel={cancel}
    >
      <div className="resource-create-body">
        <Form noValidate>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control data-testid="titleInput" size="sm" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Land Type</Form.Label>
            <Form.Control as="select" size="sm" data-testid="landType">
              <option></option>
              <option>For Rent</option>
              <option>For Sale</option>
            </Form.Control>
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Size <sup>2</sup></Form.Label>
              <Form.Control data-testid="sizeInput" type="number" size="sm" required />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Measurement</Form.Label>
              <Form.Control as="select" size="sm" data-testid="measurementInput">
                <option></option>
                <option>M</option>
                <option>Km</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Price</Form.Label>
              <Form.Control data-testid="priceInput" type="number" size="sm" required />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Currency</Form.Label>
              <Form.Control as="select" size="sm" data-testid="currencyInput">
                <option></option>
                <option>XAF</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control data-testid="locationInput" size="sm" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Visibility</Form.Label>
            <Form.Control as="select" size="sm" data-testid="visibilityInput">
              <option></option>
              <option>Everyone</option>
              <option>Registered Users</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Lease rate</Form.Label>
            <Form.Control as="select" size="sm" data-testid="leaseInput">
              <option></option>
              <option>Hour</option>
              <option>Day</option>
              <option>Week</option>
              <option>Month</option>
              <option>Year</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    </DialogWrapper>
  ));
};

CreateLand.propTypes = {
  title: PropTypes.string
};

export default CreateLand;
