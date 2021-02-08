import React from "react"; // import React for access to JSX
import './PhotoViewer.css';

function PhotoViewer() {
    return (
        <div className = "main-photo-view">
            Selected photo:
            <img src = "https://picsum.photos/300/200"></img>
        </div>
    );
}

export {PhotoViewer};