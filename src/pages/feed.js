import React from 'react';
import { navigate } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Loggedlayout from '../components/logged-layout';
import currentUser from '../core/services/current-user';
import profile from '../images/home-farmer.jpg';
import '../styles/feed.css';

const Feed = () => {
  if (!currentUser.isLoggedIn()) {
    navigate('/');
  }
  const test = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Loggedlayout>
      <Container className="feed-container">
        <Row>
          <Col md={{ span: 7 }} className="main-container">
          <div className="btn-new-container">
              <Button className="default-btn new-resource-btn" data-testid="newPost" size="sm">
                New Post
              </Button>
            </div>
            {test.map((item) => (
              <div key={item} className="single-feed">
                <div className="feed-top-section">
                  <div className="vertical-alignment feed-user-section">
                    <img alt="user profile" src={profile} className="feed-profile" />
                    <p className="medium-text margin-bottom-5 feed-name">
                      Jane Doe <br /> <span className="grey small-text">04-06-2020</span>
                    </p>
                  </div>
                  <p className="margin-bottom-5 single-feed-title">Article title here Article title here</p>
                </div>
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/1v5DU1brzVw?list=RDMMhelEv0kGHd4"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="feed-bottom-section">
                  <div className="vertical-alignment">
                    <p className="margin-bottom-5">Comments</p>
                    <p className="margin-bottom-5 medium-text grey">24 Comments</p>
                  </div>
                  <Form.Group>
                    <Form.Control
                      className="comment-input"
                      data-testid="commentInput"
                      size="sm"
                      placeholder="Enter your comment..."
                    />
                  </Form.Group>
                </div>
              </div>
            ))}
          </Col>
          <Col md={{ span: 4, offset: 1 }} className="main-container">
            <h4 className="feed-title">Trending</h4>
            <div className="single-trending">
              <p className="trend-title">Some title here Some title here</p>
              <p className="medium-text grey trend-description">
                Some description here some long description Some description here some
                long escription.Some description
                here some long description Some description here some long description
              </p>
            </div>
            <div className="single-trending">
              <p className="trend-title">Some title here Some title here</p>
              <p className="medium-text grey trend-description">
                Some description here some long description Some description here some
                long escription.Some description
                here some long description Some description here some long description
              </p>
            </div>
            <div className="single-trending">
              <p className="trend-title">Some title here Some title here</p>
              <p className="medium-text grey trend-description">
                Some description here some long description Some description here some
                long escription.Some description
                here some long description Some description here some long description
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Loggedlayout>
  );
};

export default Feed;
