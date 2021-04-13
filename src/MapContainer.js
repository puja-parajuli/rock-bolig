import React, {Component} from "react";
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";

const mapStyles = {
    width: '50%',
    height: '50%'
};

const iniLat = 55.847325;
const iniLng = 9.837784;
const sdvLat = 55.845961;
const sdvLng = 9.836821;


export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: iniLat,
                    lng: iniLng
                }}>
                <Marker position={{ lat: sdvLat, lng: sdvLng}} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDnW4XYakkTWqVvLrTkP5RFzXvLuMMBrxw'
})(MapContainer);
