import React from 'react';
import PropTypes, { node } from 'prop-types';
import './Tutorial.css';

const Tutorial = (props) => <div className="tutorial">
    <div className="action flex">
    { props.children }
    </div>
    <article className="usage flex">
      { props.usage }
    </article>
  </div>;

Tutorial.propTypes = {
  children: node.isRequired,
  usage: PropTypes.element
};

export default Tutorial;
