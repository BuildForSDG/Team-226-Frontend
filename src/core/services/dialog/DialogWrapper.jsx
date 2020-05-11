import React from 'react';
import {
  func, object, node, bool
} from 'prop-types';

export default function DialogWrapper({
  hide, cancel, header, children, footer, canCancel = true
}) {
  return <div className="dialog-component">
    <div className="dialog-component__header">
      <div>{header}</div>
      { canCancel ? <i className="material-icons dialog-component__header--close" onClick={cancel}>close</i> : ''}
    </div>
    <div className="dialog-component__body">{children}</div>
    {footer
      ? <div className="dialog-component__footer">{footer}</div>
      : <div className="dialog-component__footer">
        { canCancel ? <button onClick={cancel}>Cancel</button> : ''}
        <button className="main" onClick={hide}>Apply</button>
      </div>
    }
  </div>;
}

DialogWrapper.propTypes = {
  hide: func,
  cancel: func,
  children: node.isRequired,
  header: object,
  footer: object,
  canCancel: bool
};
