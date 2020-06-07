import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';

import DialogWrapper from '../../core/services/dialog/DialogWrapper.jsx';
import Modal from '../../core/services/dialog';
import CreateCategory from '../create-category/create-category';
import { encodeToParams } from '../../core/utils';
import notificationService from '../../core/services/notification';
import httpLoader from '../../core/services/http-loader';
import resourceService from '../../core/services/resource-service';
import '../../styles/create-resource.css';

const CreateResource = (title) => {
  const create = async (data) => {
    try {
      const { response } = await httpLoader.onLoad(
        resourceService.createResource(encodeToParams(data)), {
          400: () => notificationService.showWarning({
            title: 'Error',
            message:
              'The Email address you specified has already been taken. Please verify that you typed it correctly or proceed to sign in.',
            rejectLabel: 'close'
          })
        }
      );

      if (response === 'success') {
        notificationService
          .showSuccess({
            title: 'Registration Successfull',
            message: 'Your account was successfully created. You can now login',
            resolveLabel: 'Login'
          });
        // .then(() => alert('Done'));
      } else {
        notificationService.showWarning({
          title: 'Error occured',
          message: 'There was an error registering. Please check your inputs and try again',
          resolveLabel: 'close'
        });
      }
      return response;
    } catch (e) {
      return e;
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      create({
        first_name: form.formGridFirstName.value,
        last_name: form.formGridLastName.value,
        email: form.formGridEmail.value,
        password: form.formGridPassword.value,
        password2: form.formGridPassword.value
      });
    }
  };
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
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>
              Title <span className="red">*</span>
            </Form.Label>
            <Form.Control data-testid="titleInput" size="sm" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Category <span className="red">*</span>
              <Badge className="new-category" variant="success" onClick={() => CreateCategory('Create Category')}>Add</Badge>
            </Form.Label>
            <Form.Control as="select" data-testid="categoryInput">
              <option></option>
              <option>Some category</option>
              <option>another category</option>
              <option>third category</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="4" data-testid="descriptionInput" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Visibility</Form.Label>
            <Form.Control as="select" data-testid="visibilityInput">
              <option></option>
              <option>Everyone</option>
              <option>Registered Users</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Video</Form.Label>
            <InputGroup size="sm">
              <Form.Control data-testid="videoInput" required />
              <InputGroup.Append>
                <Button className="default-btn" data-testid="addResource">
                  ADD
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <div className="vertical-component">
            <p className="small-text create-resource-video">Some video here</p>
            <span className="small-text delete-x">X</span>
          </div>
          <div className="vertical-component">
            <p className="small-text create-resource-video">Some video here</p>
            <span className="small-text delete-x">X</span>
          </div>
        </Form>
      </div>
    </DialogWrapper>
  ));
};

CreateResource.propTypes = {
  title: PropTypes.string
};

export default CreateResource;
