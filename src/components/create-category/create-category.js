import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import DialogWrapper from '../../core/services/dialog/DialogWrapper.jsx';
import Modal from '../../core/services/dialog';

import '../../styles/create-resource.css';

const CreateCategory = (title) => {
  Modal.show(({ hide, cancel }) => (
    <DialogWrapper
      header={<span className="resource-modal-title">{title}</span>}
      footer={<div></div>}
      hide={hide}
      cancel={cancel}
    >
      <div className="resource-create-body">
        <Form>
          <Form.Group controlId="formGridTitle">
            <Form.Label>Name</Form.Label>
            <Form.Control data-testid="categoryInput" size="sm" required />
          </Form.Group>
          <div className="vertical-component">
            <Button className="cancel-btn" data-testid="cancelresource" size="sm" onClick={cancel}>
              CANCEL
            </Button>
            <Button className="default-btn" data-testid="saveCreateResource" size="sm" onClick={hide}>
              SAVE
            </Button>
          </div>
        </Form>
      </div>
    </DialogWrapper>
  ));
};

CreateCategory.propTypes = {
  title: PropTypes.string
};

export default CreateCategory;
