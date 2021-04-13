
import React, {Component, useState} from 'react';
import Modal from 'react-bootstrap/Modal';


import Button from 'react-bootstrap/Button';
import ModalDialog from 'react-bootstrap/ModalDialog'

function setShow(value)
{
    this.show = value;
}

const show = false;
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

class CustomModal extends React.Component {
    GetModel()
    {
        {/*const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);*/}

        return (
            <div>
                <ModalDialog show={show} onHide={handleClose}>
                    <ModalDialog.Header closeButton>
                        {/*<Modal.Title>Modal heading</Modal.Title>*/}
                    </ModalDialog.Header>
                    {/* <ModalDialog.Body>Woohoo, you're reading this text in a modal!</ModalDialog.Body>
                <ModalDialog.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </ModalDialog.Footer>*/}
                </ModalDialog>
            </div>
        );
    }
    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.GetModel()}>
                    Launch demo modal
                </Button>
                </div>
        );
    }
}

export default CustomModal

function GetModel()
{
    {/*const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);*/}

    return (
        <div>
            <ModalDialog show={show} onHide={handleClose}>
                <ModalDialog.Header closeButton>
                    {/*<Modal.Title>Modal heading</Modal.Title>*/}
                </ModalDialog.Header>
                {/* <ModalDialog.Body>Woohoo, you're reading this text in a modal!</ModalDialog.Body>
                <ModalDialog.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </ModalDialog.Footer>*/}
            </ModalDialog>
        </div>
    );
}