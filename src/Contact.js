import React, {Component} from 'react';

import MapContainer from "./MapContainer";

class ContactPage extends Component{

    render() {
        return (
<div>
    <div className="contactInfo">
        <h2> Contact us</h2>
        <span className="lineBreak">Owner: Hiren A. Bhatt</span>
        <span className="lineBreak">Email: firmhorsens@outlook.com</span>
        </div>
    <div>
        <strong> Location:</strong><span> Stevedorevej 17</span>
        <MapContainer />
    </div>
</div>
        );
    }
}
export default ContactPage

