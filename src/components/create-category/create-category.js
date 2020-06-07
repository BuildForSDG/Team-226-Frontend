import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import DialogWrapper from '../../core/services/dialog/DialogWrapper.jsx';
import Modal from '../../core/services/dialog';
import { encodeToParams } from '../../core/utils';
import notificationService from '../../core/services/notification';
import httpLoader from '../../core/services/http-loader';
import categoryService from '../../core/services/category-service';

import '../../styles/create-resource.css';

const CreateCategory = (title) => {
  const create = async (categoryTitle) => {
    try {
      const { response } = await httpLoader.onLoad(
        categoryService.createCategory(encodeToParams(categoryTitle)), {
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
            title: 'Category Created',
            message: 'Your category was successfully created.',
            resolveLabel: 'Done'
          });
        // .then(() => alert('Done'));
      } else {
        notificationService.showWarning({
          title: 'Error occured',
          message: 'There was an error creating your category. Please check the title and try again',
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
        title: form.formGridTitle.value
      });
    }
  };
  Modal.show(({ hide, cancel }) => (
    <DialogWrapper
      header={<span className="resource-modal-title">{title}</span>}
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
            <Button className="cancel-btn" data-testid="cancelresource" size="sm" onClick={cancel}>CANCEL</Button>
            <Button className="default-btn" data-testid="saveCreateResource" size="sm">SAVE</Button>
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
