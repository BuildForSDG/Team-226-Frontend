import NotificationService from '../notification';

function checkConnection() {
  return {
    title: 'Unable to reach our server',
    message: 'We were unable to reach our server. Please verify your internet connection and try again.',
    resolveLabel: 'OK'
  };
}

function genericErrorPage(code) {
  switch (code) {
    case 500:
    case 400:
      return {
        title: 'Something\'s gone very wrong!',
        message: 'We will try to fix this as soon as possible.'
      };
    case 503:
    case 504:
      return {
        title: 'Server unavilable',
        message: 'For some reason, our server seems to be unavailable, we are looking into it right now. Please try again shortly'
      };
    default:
      return {
        title: 'O-ohh',
        message: 'Something\'s gone really wrong'
      };
  }
}

function signInPage() {
  return {
    title: 'Sign In Required',
    message: 'You need to be logged into our site in order to a access this resource. Please sign in to procedd'
  };
}

function forbiddenPage() {
  return {
    title: 'Access Denied',
    message: 'You do not have permissions to view this resource. If you think this is a mistake. Please contact support for more help'
  };
}

function notFoundPage() {
  return {
    title: 'Awww... Not Found',
    message: 'The resource you just tried to access was not found. Please verify and try again.'
  };
}

const defaultErrorHandlingMap = {
  '-1': checkConnection,
  0: checkConnection,
  400: genericErrorPage,
  500: genericErrorPage,
  503: genericErrorPage,
  504: genericErrorPage,
  401: signInPage,
  403: forbiddenPage,
  404: notFoundPage,
  default: genericErrorPage
};

function handle(object) {
  return NotificationService.showError({ rejectLabel: 'close', ...object });
}

export default function handlError(httpError, options) {
  const errorStatus = httpError.status;
  const handler = options[errorStatus]
    || (() => handle(defaultErrorHandlingMap[errorStatus]))
    || defaultErrorHandlingMap.default;
  return handler(errorStatus, httpError) || Promise.reject(httpError);
}
