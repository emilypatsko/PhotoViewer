import React, { useState } from "react";
import './ImageSelector.css';

function ImageSelector() {

    // Declare a new state variable, call it currentImg
    // Here the state number is the element of the images array currently displayed
    const [currentImg, setCurrentImg] = useState(0);

    const urls = getImageUrls();
    return (
        <div className = "image-selector-container">
            <p>Selected image: <a href={urls[currentImg]}>{urls[currentImg]}</a></p>
            <div className = "image-selector">                 
                {urls.map(function(url) {                    
                    return <img src = {url} className = {`${currentImg==urls.indexOf(url) ? "selected-img" : ""}`} onClick = {() => {
                        setCurrentImg(urls.indexOf(url))
                    }
                    }/>;
                })}         
            </div>
        </div>
    );
}

function getImageUrls() {
    const images = [37, 47, 56, 25, 57, 32, 39, 18, 45, 36, 15, 23];
    const urls = [];

    for (let i = 0; i < images.length; i++) {
        urls.push(`https://picsum.photos/id/10${images[i].toString()}/300/200`);
    }

    return urls;
}

export {ImageSelector};