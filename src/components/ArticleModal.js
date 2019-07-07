import React from "react";
import { Modal, Button } from "react-bootstrap";
import { string, func } from "prop-types";

const openUrl = url => {
  window.location = url;
};

const ArticleModal = props => (
  <Modal show={true} onHide={props.handleHide}>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{props.content}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleHide}>
        CLOSE
      </Button>
      <Button id="redirect-url-button" onClick={() => openUrl(props.url)}>
        MAIN ARTICLE
      </Button>
    </Modal.Footer>
  </Modal>
);

ArticleModal.propTypes = {
  title: string.isRequired,
  content: string,
  url: string.isRequired,
  handleHide: func.isRequired
};

ArticleModal.defaultProps = {
  title: "Article Title",
  content: "Article Content",
  url: "Article URL",
  handleHide: () => {}
};

export default ArticleModal;
