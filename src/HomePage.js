import React, {Component, useState} from 'react';
import ImageGallery from 'react-image-gallery';
import pic1 from './Images/01.JPG';
import pic2 from './Images/02.JPG';
import pic3 from './Images/03.JPG';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BookSelectHouse from "./BookSelectHouse";



class HomePage extends Component{
    render() {
        return(
            <div>
            <div className='mygallery'>
           <MyGallery/>
            </div>
                <text className='myText'>
                    RockBolig provides renting possibilities. There is place to accommodate 15 students in big villa consisting of three attached houses.
                    <br/><br/>
                    Below is description of the villa:
                    <br/><br/>
                    A true gem in an attractive area Strandkær: This fantastic villa built in 1852 is filled with history, soul and charm – and if the walls could speak, yes there were many good stories to pick up. The large villa is situated on a big 4600 m2 double plot surrounded by beautiful old trees, and is like the house packed with history. The house was originally listed as a four-story property, and over the years it  has been modernized and beautified the home to the utmost. Each m2 has undergone a radical transformation from 1996 until today. Everything is done with utmost accuracy and with respect to the original architecture of the house.
                    <br/><br/>
                    The garden has many years behind it like the house. And here the students can go on adventures in the surrounding “forest”. The stunning large bushes and high trees complement the beautiful style of the property. In the garden you will find peace with comfort of fire place  and the small pond in the middle of the garden next to the old hanging arrow will cement the fantastic atmosphere.
                    <br/><br/>
                    From the garden further into the property which consists of nothing less than 404 m2. This is divided into many rooms and good living rooms as well as 4 bathrooms. The large kitchen area with the beautiful white kitchen invites quality time with the large “family”. In the kitchen and living room there are tiles – with underfloor heating and from the family room exit to a lovely terrace facing the garden. On to the cozy living room with the wonderfully beautiful window part overlooking the garden and with a cozy fireplace. Via the French door you enter another large living room where there is good opportunity to hold some good dinner parties. On the first floor we find the the rooms. Here you can especially highlight the bedroom and the “living room” which has access to the most beautiful balcony overlooking the garden. The property is in a super attractive neighborhood close to supermarket and 17 mins bike ride from VIA.
                    <br/><br/>
                    Rooms comes totally furnished and all new students gets a bicycle to go to VIA. There are also facilities for washing and drying clothes as well as playing badminton in front garden.
                    <br/><br/>
                    This accommodation MUST be experienced
                </text>
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
