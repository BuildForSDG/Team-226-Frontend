import Modal from '../dialog/index';
import Loader from './Loader.jsx';
import handleHttpError from '../http-error-handler';
// const defaultLoaderOptions = {
//   handleError: true
// };


async function showSpinner(message, fn, options = {}, handleError = true) {
  function fxn(f) {
    return typeof f === 'function' ? f() : f;
  }

  try {
    return await Modal.show(Loader, { message, fn: () => fxn(fn) });
  } catch (e) {
    return handleError ? handleHttpError(e, options) : Promise.reject(e);
  }
}

function onLoad(fn, options, message = 'Loading...') {
  return showSpinner(message, fn, options);
}

function onLoadWithoutErrorHandling(fn, options, message = 'Loading...') {
  return showSpinner(message, fn, options, false);
}

function onSave(fn, options, message = 'Saving...') {
  return showSpinner(message, fn, options);
}

function onSaveWithoutErrorHandling(fn, options, message = 'Saving...') {
  return showSpinner(message, fn, options, false);
}


export default {
  onLoad,
  onLoadWithoutErrorHandling,
  onSave,
  onSaveWithoutErrorHandling
};
