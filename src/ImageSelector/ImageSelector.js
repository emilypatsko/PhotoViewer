import React from "react";
import './ImageSelector.css';

function ImageSelector() {
    const urls = generateImages();
    return (
        <div className = "image-selector">  
            {urls.map(function(url) {
                return <img src = {url}></img>;
            })}         
        </div>
    );
}

function generateImages() {
    const images = [37, 47, 56, 25, 57, 32, 39, 18, 45, 36, 7, 23];
    const urls = [];

    for (let i = 0; i < images.length; i++) {
        urls.push(`https://picsum.photos/id/10${images[i].toString()}/300/200`);
    }

    return urls;
}

export {ImageSelector};