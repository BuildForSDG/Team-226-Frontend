import Modal from '../dialog';
import Notification, {
  SUCCESS_NOTIFICATION, INFO_NOTIFICATION, ERROR_NOTIFICATION, WARNING_NOTIFICATION
} from './Notification.jsx';

function showNotification({
  title, message, resolveLabel, rejectLabel
}, type = INFO_NOTIFICATION) {
  return Modal.show(Notification, {
    title, message, type, resolveLabel, rejectLabel
  });
}

function showSuccess(options) {
  return showNotification(options, SUCCESS_NOTIFICATION);
}

function showError(options) {
  return showNotification(options, ERROR_NOTIFICATION);
}

function showWarning(options) {
  return showNotification(options, WARNING_NOTIFICATION);
}

export default {
  showNotification,
  showError,
  showWarning,
  showSuccess
};
