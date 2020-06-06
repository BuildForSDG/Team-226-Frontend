/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-montserrat';

import Header from './dashboard/logged-header';
import './layout.css';

const Loggedlayout = ({ children }) => (
    <>
      <Header siteTitle="Farm Voice" />
      <div>
        <main>{children}</main>
        <footer style={{
          background: '#eee',
          padding: '20px',
          textAlign: 'center',
          fontSize: '12px'
        }}>
          Farm Voice © {new Date().getFullYear()}
        </footer>
      </div>
    </>
);

Loggedlayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Loggedlayout;
