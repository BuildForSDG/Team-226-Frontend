import React from 'react';
import { func, string } from 'prop-types';
import className from 'classname';
import DialogWrapper from '../dialog/DialogWrapper.jsx';

export const SUCCESS_NOTIFICATION = 'success';
export const ERROR_NOTIFICATION = 'error';
export const WARNING_NOTIFICATION = 'warning';
export const INFO_NOTIFICATION = 'info';

function showFooter(resolveLabel, rejectLabel, hide, cancel) {
  return <div>
    {rejectLabel ? <button onClick={cancel}>{rejectLabel}</button> : ''}
    {resolveLabel ? <button className="main" onClick={hide}>{resolveLabel}</button> : ''}
  </div>;
}

export default function Notification({
  hide, cancel, title, message, type, resolveLabel, rejectLabel
}) {
  return <span className={className({
    'notification-dialog': true,
    [SUCCESS_NOTIFICATION]: SUCCESS_NOTIFICATION === type,
    [WARNING_NOTIFICATION]: WARNING_NOTIFICATION === type,
    [ERROR_NOTIFICATION]: ERROR_NOTIFICATION === type,
    [INFO_NOTIFICATION]: INFO_NOTIFICATION === type
  })}>
      <DialogWrapper
        hide={hide}
        cancel={cancel}
        canCancel={!!rejectLabel}
        header = {
        <h3>{title}</h3>
        }
        footer={showFooter(resolveLabel, rejectLabel, hide, cancel)}
      >
        <p>{message}</p>
      </DialogWrapper>
    </span>;
}

Notification.propTypes = {
  hide: func,
  cancel: func,
  title: string,
  message: string,
  type: string,
  resolveLabel: string,
  rejectLabel: string
};
