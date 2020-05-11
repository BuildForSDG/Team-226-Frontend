import React from 'react';
import { func, string } from 'prop-types';
import IMG from '../../../images/loading.svg';

export default function Loader({
  hide, cancel, fn, message
}) {
  fn().then(hide).catch(cancel);
  return (<div className="loader-dialog">
    <img src={IMG} alt="loading..."/>
    { message }
  </div>);
}

Loader.propTypes = {
  hide: func,
  cancel: func,
  message: string,
  fn: func
};
