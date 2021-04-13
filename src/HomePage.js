import React, {Component, useState} from 'react';
import ImageGallery from 'react-image-gallery';
import pic1 from './Images/01.JPG';
import pic2 from './Images/02.JPG';
import pic3 from './Images/03.JPG';
import Plandrawing1 from './Images/Plandrawing1.PNG';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BookSelectHouse from "./BookSelectHouse";
import CustomModal from "./Modal";


class HomePage extends Component{
    render() {
        return(
            <div>
            <div className='mygallery'>
           {  /*<MyGallery/>-->*/ }
            </div>
                <div className='bookNow'>
                    {/* <img src={Plandrawing1} />*/}
                    <CustomModal/>
                    <span>Book and secure a place to live now!</span>
                </div>
            </div>
        )
    }
}
export default HomePage

const images = [
    {
        original: pic1,
        thumbnail: pic1,
    },
    {
        original: pic2,
        thumbnail: pic2,
    },
    {
        original: pic3,
        thumbnail: pic3,
    },
];


function MyGallery() {
    return <ImageGallery items={images}  />;
}

function GetModel()
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Book Now
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><BookSelectHouse /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
