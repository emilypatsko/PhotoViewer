import React from "react";
import './ImageSelector.css';

function ImageSelector(props) {

    return (
        <div className = "image-selector-container">
            <p>Selected image: <a href={props.urls[props.currentImg]}>{props.urls[props.currentImg]}</a></p>
            <div className = "image-selector">                 
                {props.urls.map(function(url, index) {
                    return <img src = {url} 
                                alt = {`img-${index}`}
                                key = {index}
                                className = {`${props.currentImg==props.urls.indexOf(url) ? "selected-img" : ""}`}
                                onClick = {() => props.setCurrentImg(props.urls.indexOf(url))}
                            />                    
                })}         
            </div>
        </div>
    );
}

export {ImageSelector};
