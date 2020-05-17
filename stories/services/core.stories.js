import React from 'react';

import Tutorial from '../Tutorial.jsx';
import Modal from '../../src/core/services/dialog';
import LoaderService from '../../src/core/services/http-loader';
import NotificationService from '../../src/core/services/notification';
import DialogWrapper from '../../src/core/services/dialog/DialogWrapper.jsx';

function openDialog() {
  Modal.show(
    ({ hide, cancel, name }) => <DialogWrapper
      header={<span>Title for your Dialog Goes Right Here</span>}
      hide={hide}
      cancel={cancel}
    >
      <div> And the main content goes here. It could be anything you want it to be. Anything.</div>
      <article>
        {name}
      </article>
    </DialogWrapper>,
    { name: 'It can receive properties' }
  ).then((reason) => {
    // When the dialog is submitted
    // eslint-disable-next-line no-console
    console.log(reason);
  }).catch((reason) => {
    // When the dialog is cancelled
    // eslint-disable-next-line no-console
    console.log(reason);
  });
}

function openLoader() {
  LoaderService
    .onLoad(new Promise((resolve) => setTimeout(() => resolve(3000), 1000)));
}

function openSaver() {
  LoaderService
    .onSave(new Promise((resolve) => setTimeout(() => resolve(3000), 1000)));
}

function showWithError() {
  const error = new Error('error');
  error.status = '403';
  LoaderService
    .onSave(new Promise((resolve, reject) => setTimeout(() => reject(error), 1000)));
}

function showNotification() {
  return NotificationService.showSuccess({
    title: 'Specify the title',
    message: 'And also the message. You can specify which button to appear by specify the resolve and reject label properties',
    resolveLabel: 'Click me to close'
  });
}

function showError() {
  return NotificationService.showError({
    title: 'Specify the title for an error notification',
    message: ' you can as well show warning and show info',
    rejectLabel: 'Click me to cancel'
  });
}

export default {
  title: 'Services'
};

export const Dialog = () => <Tutorial
  usage = {
    <div>
      Check story tab below to see how to use this service. <br /><br /><br />
      Styling within the Dialog is completely left to the pserson using it.
    </div>
  }
>
  <h1>Dialog Service</h1>
  <h4>Click Button to test the dialog service</h4>
  <button onClick={openDialog}>Open Dialog</button>
</Tutorial>;

export const Loader = () => <Tutorial
  usage = {
    <div>
      Check story tab below to see how to use this service. <br /><br /><br />
    </div>
  }
>
  <h1>Loader Service</h1>
  <h4>Click Button to test the loader service</h4>
  <button onClick={openLoader}>Open Loader</button>
  <h4>can also be on save</h4>
  <button onClick={openSaver}>Open Saver</button>
  <h4>Loader which throws an error</h4>
  <button onClick={showWithError}>Open Error loader</button>
</Tutorial>;

export const Notification = () => <Tutorial
  usage = {
    <div>
      Check story tab below to see how to use this service. <br /><br /><br />
      methods include: showNotification, showError, showWarning, showSuccess
    </div>
  }
>
  <h1>Loader Service</h1>
  <h4>Click Button to test the notification service</h4>
  <button onClick={showNotification}>Show</button>
  <h4>can also be an error notification</h4>
  <button onClick={showError}>Open Error notification</button>
</Tutorial>;
