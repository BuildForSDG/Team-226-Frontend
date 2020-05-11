import ReactDOM from 'react-dom';
import React from 'react';
import DialogComponent from './Dialog.jsx';

export default class Dialog {
  constructor(Component, props, options, container, ord) {
    this.promise = new Promise((resolve, reject) => {
      this.$$resolve = resolve;
      this.$$reject = reject;
    });

    this.el = document.createElement('div');
    container.appendChild(this.el);

    this.show(Component, props, options, this.el, ord);
  }

  show(component, props, options, el, ord) {
    ReactDOM.render(
      <DialogComponent
        component={component}
        props={props}
        options={options}
        hide={ (e) => this.hide(e) }
        cancel={ (e) => this.cancel(e) }
        ord={ord}
      />,
      el
    );
  }

  destroy() {
    ReactDOM.unmountComponentAtNode(this.el);
  }

  hide(reason) {
    this.destroy();
    this.$$resolve(reason);
  }

  cancel(reason) {
    this.destroy();
    this.$$reject(reason);
  }
}
