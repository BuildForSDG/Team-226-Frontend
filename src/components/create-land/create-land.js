import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import { navigate } from 'gatsby';

import httpLoader from '../../core/services/http-loader';
import notificationService from '../../core/services/notification';
import landService from '../../core/services/land-service';
import { encodeToParams } from '../../core/utils';
import DialogWrapper from '../../core/services/dialog/DialogWrapper.jsx';
import Modal from '../../core/services/dialog';
import '../../styles/create-resource.css';

const create = async (data) => {
  try {
    const { response } = await httpLoader
      .onLoad(
        landService.createLand(encodeToParams(data)),
        {
          400: () => notificationService.showWarning({
            title: 'Error',
            message: 'There is a land listing with this title. Please verify the title and try again.',
            rejectLabel: 'close'
          })
        }
      );
    if (response === undefined) {
      notificationService.showSuccess({
        title: 'Land Created',
        message: 'You successfully created a new land Listing',
        resolveLabel: 'Done'
      });
    } else {
      notificationService.showWarning({
        title: 'Error occured',
        message: 'There was an error creating a new land listing. Please check your inputs and try again',
        resolveLabel: 'close'
      });
    }
    return response;
  } catch (e) { return e; }
};

const CreateLand = (title) => {
  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      create({
        title: form.formTitle.value,
        size: form.formSize.value,
        size_unit_measurement: form.formMeasurement.value,
        location: form.formLocation.value,
        cost: form.formPrice.value,
        currency: form.formCurrency.value,
        for_type: form.formLandType.value,
        visiility: form.formVisibility.value,
        lease_rate_periodicity: form.formLease.value
      });
    } else {
      notificationService.showError({
        title: 'Error occured',
        message: 'Please check if you have entered all required fields!',
        resolveLabel: 'close'
      });
    }
  };

  Modal.show(({ hide, cancel }) => (
    <DialogWrapper
      header={<span className="resource-modal-title">{title}</span>}
      footer={<div></div>}
      hide={hide}
      cancel={cancel}
    >
      <div className="resource-create-body">
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>
              Title <span className="red">*</span>
            </Form.Label>
            <Form.Control data-testid="titleInput" size="sm" required />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formSize">
              <Form.Label>
                Size <sup>2</sup> <span className="red">*</span>
              </Form.Label>
              <Form.Control data-testid="sizeInput" type="number" size="sm" required />
            </Form.Group>
            <Form.Group as={Col} controlId="formMeasurement">
              <Form.Label>Measurement</Form.Label>
              <Form.Control as="select" size="sm" data-testid="measurementInput">
                <option></option>
                <option value="M">M</option>
                <option value="KM">Km</option>
                <option value="ML">Mile</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formLocation">
            <Form.Label>
              Location <span className="red">*</span>
            </Form.Label>
            <Form.Control data-testid="locationInput" size="sm" placeholder="Country / Region / state" required />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control data-testid="priceInput" type="number" size="sm" />
            </Form.Group>
            <Form.Group as={Col} controlId="formCurrency">
              <Form.Label>Currency</Form.Label>
              <Form.Control as="select" size="sm" data-testid="currencyInput">
                <option></option>
                <option>XAF</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formLandType">
            <Form.Label>Land Type</Form.Label>
            <Form.Control as="select" size="sm" data-testid="landType">
              <option></option>
              <option value="FR">For Free</option>
              <option value="LE">For Rent</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formVisibility">
            <Form.Label>Visibility</Form.Label>
            <Form.Control as="select" size="sm" data-testid="visibilityInput">
              <option></option>
              <option value="PU">Everyone</option>
              <option value="PR">Registered Users</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formLease">
            <Form.Label>Lease rate</Form.Label>
            <Form.Control as="select" size="sm" data-testid="leaseInput">
              <option></option>
              <option value="h">Hour</option>
              <option value="d">Day</option>
              <option value="w">Week</option>
              <option value="m">Month</option>
              <option value="y">Year</option>
            </Form.Control>
          </Form.Group>
          <div className=" vertical-component">
            <Button className="cancel-btn" data-testid="cancelresource" size="sm" onClick={() => {
              cancel();
              navigate('/my-lands');
            }}>
              CANCEL
            </Button>
            <Button className="default-btn" type="submit" data-testid="saveCreateResource" size="sm">
              SAVE
            </Button>
          </div>
        </Form>
      </div>
    </DialogWrapper>
  ));
};

CreateLand.propTypes = {
  title: PropTypes.string
};

export default CreateLand;
