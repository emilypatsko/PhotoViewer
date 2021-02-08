import React from "react"; // import React for access to JSX
import './PhotoViewer.css';

function PhotoViewer(props) {
    return (
        <div className = "main-photo-view">
            Selected photo:
            <img src = {props.src}></img>
        </div>
    );
}

export {PhotoViewer};