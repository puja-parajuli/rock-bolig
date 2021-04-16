import React, {Component} from 'react';
import imgPlanDrawing from '../Images/Plantegning.jpg';

class HorsensRental extends Component{

    render() {
        return (
            <ResponsiveImage
                src={imgPlanDrawing}
                width={ 1200 }
                height={ 1000 } />
        );
    }
}
export default HorsensRental

function ResponsiveImage( { src, width, height } ) {
    return (
        <div
            style={ {
                width,
            } }
            className="image-container">
            <div style={ {
                paddingBottom: ( height / width * 100 ) + '%'
            } } />
            <img
                src={ src }
                className="image-container-image" />
        </div>
    );
}

