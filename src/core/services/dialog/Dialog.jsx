import React from 'react';
import {
  elementType, object, func, number
} from 'prop-types';
import './Dialog.css';

export default function Dialog({
  component: Component,
  props,
  hide,
  cancel,
  ord
}) {
  return <div className="dialog-wrapper" style={{ zIndex: ord * 99 }}>
    <Component {...props} hide={hide} cancel={cancel} />
  </div>;
}

Dialog.propTypes = {
  component: elementType,
  props: object,
  hide: func,
  cancel: func,
  ord: number
};
