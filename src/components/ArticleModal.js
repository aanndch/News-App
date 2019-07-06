import React, { Component, Fragment } from 'react';
import { Modal, Button } from 'react-bootsrap';

export default class ArticleModal extends Component {
    render() {
        return (
            <Fragment>
                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    dialogClassName="modal-90w"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                        Custom Modal Styling
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                        unde commodi aspernatur enim, consectetur. Cumque deleniti
                        temporibus ipsam atque a dolores quisquam quisquam adipisci
                        possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
                        quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
                        Mollitia reiciendis porro quo magni incidunt dolore amet atque
                        facilis ipsum deleniti rem!
                        </p>
                    </Modal.Body>
                </Modal>
            </Fragment>
        )
    }
}
