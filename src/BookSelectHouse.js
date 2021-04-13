import React, {Component} from 'react';
import Plandrawing1 from './Images/Plandrawing1.PNG';

import ImageMapper from 'react-image-mapper';
import MapContainer from "./MapContainer";

const URL = Plandrawing1
const MAP = {
    name: "my-map",
    areas: [
        { name: "1", id:"1", shape: "poly", coords: [50,50,215,50,215,200,50,200], preFillColor: "light gray", strokeColor:"black",
        },
       /* { name: "2", shape: "poly", coords: [219,118,220,210,283,210,284,119], preFillColor: "pink"  },
        { name: "3", shape: "poly", coords: [381,241,383,94,462,53,457,282], fillColor: "yellow"  },
        { name: "4", shape: "poly", coords: [245,285,290,285,274,239,249,238], preFillColor: "red"  },
        { name: "5", shape: "circle", coords: [170, 100, 25 ] },
         name: "1", shape: "poly", coords: [50,50,225,50,200,200,60,200], preFillColor: "light gray", fillColor: "gray" ,*/
    ]
}


class BookSelectHouse extends Component {
    render() {
        return (
                           <div className="choosehouse">
                    <ImageMapper src={URL} map={MAP} width={500}
                                 onClick={area => clicked(area)}
                                 onMouseMove={area=> hover(area)}
                    />
                </div>
        );
    }
}

function hover(area) {
area.strokeColor= "red";
}
function clicked(area) {
alert("clicked " + area.name);
}
function enterArea(area) {
    this.setState({ hoveredArea: area });
}

function leaveArea(area) {
    this.setState({ hoveredArea: null });
}

function sgetTipPosition(area) {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
}

export default BookSelectHouse
