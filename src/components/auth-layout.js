import React from 'react';
import PropTypes from 'prop-types';

import '../styles/auth-layout.css';

const AuthLayout = ({ children }) => (
    <div className="auth-container">
      <main>{children}</main>
    </div>
);

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthLayout;
