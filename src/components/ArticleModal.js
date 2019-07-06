import React, { Component, Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ArticleModal extends Component {

    openUrl = () => {
        window.location = this.props.url;
    }

    render() {
        return (
            <Fragment>
                <Modal
                    show={true}
                    onHide={this.props.handleHide}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                        {this.props.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.content}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleHide}>
                        CLOSE
                        </Button>
                        <Button id="redirect-url-button" onClick={this.openUrl}>
                        MAIN ARTICLE
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}
