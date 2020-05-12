import Dialog from './Dialog';

function getOrCreateElement(elementId) {
  let el = document.getElementById(elementId);

  if (!el) {
    el = document.createElement('div');
    document.body.appendChild(el);
  }

  return el;
}

export class DialogService {
  constructor(elementId = 'dialog-container') {
    this.el = getOrCreateElement(elementId);
    this.$$dialogs = [];
  }

  async show(component, props, options = {}) {
    const index = this.$$dialogs.length;
    const dialog = new Dialog(component, props, options, this.el, index + 1);
    this.$$dialogs = [...this.$$dialogs, dialog];

    try {
      return await dialog.promise;
    } catch (reason) {
      return Promise.reject(reason);
    } finally {
      this.$$dialogs.splice(index, 1);
    }
  }

  hide(reason) {
    const dialog = this.$$dialogs[this.$$dialogs.length - 1];
    return dialog && dialog.hide(reason);
  }

  cancel(reason) {
    const dialog = this.$$dialogs[this.$$dialogs.length - 1];
    return dialog && dialog.cancel(reason);
  }
}

export default new DialogService();
