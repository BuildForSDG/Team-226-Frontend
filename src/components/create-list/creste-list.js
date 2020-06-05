import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import DialogWrapper from '../../core/services/dialog/DialogWrapper.jsx';
import Modal from '../../core/services/dialog';
import '../../styles/create-resource.css';

const CreateList = (title) => {
  Modal.show(({ hide, cancel }) => (
    <DialogWrapper
      header={<span className="resource-modal-title">{title}</span>}
      footer={
      <div className="create-resource-footer vertical-component">
        <Button className="cancel-btn" data-testid="cancelresource" size="sm" onClick={cancel}>CANCEL</Button>
        <Button className="default-btn" data-testid="saveCreateResource" size="sm" onClick={hide}>SAVE</Button>
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
        </Form>
      </div>
    </DialogWrapper>
  ));
};

CreateList.propTypes = {
  title: PropTypes.string
};

export default CreateList;
