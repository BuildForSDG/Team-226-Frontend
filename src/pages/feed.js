import React from 'react';
import { navigate } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LoggedHeader from '../components/dashboard/logged-header';
import currentUser from '../core/services/current-user';
import '../styles/feed.css';

const Feed = () => {
  if (!currentUser.isLoggedIn()) {
    navigate('/');
  }
  return (
    <div>
      <LoggedHeader siteTitle="Farm Voice" />
      <Container className="feed-container">
        <Row>
          <Col md={{ span: 7 }} className="main-container">
            <h4 className="feed-title">Feed</h4>
            <div className="single-feed"></div>
          </Col>
          <Col md={{ span: 4, offset: 1 }} className="main-container">
            <h4 className="feed-title">Trending</h4>
            <div className="single-trending">
              <p className="trend-title">Some title here Some title here</p>
              <p className="medium-text grey trend-description">
                Some description here some long description Some description here some long
                escription.Some description here some long description Some description here
                some long description
              </p>
            </div>
            <div className="single-trending">
              <p className="trend-title">Some title here Some title here</p>
              <p className="medium-text grey trend-description">
                Some description here some long description Some description here some long
                escription.Some description here some long description Some description here
                some long description
              </p>
            </div>
            <div className="single-trending">
              <p className="trend-title">Some title here Some title here</p>
              <p className="medium-text grey trend-description">
                Some description here some long description Some description here some long
                escription.Some description here some long description Some description here
                some long description
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feed;
