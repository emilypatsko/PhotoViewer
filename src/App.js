import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import {PhotoViewer} from './PhotoViewer/PhotoViewer.js';
import {ImageSelector} from './ImageSelector/ImageSelector.js';

function App() {

  const [currentImg, setCurrentImg] = useState(0);
  const urls = getImageUrls();

  return (
    <div>
      <h1>React Photo Viewer</h1>
      <PhotoViewer src = {urls[currentImg]}/>
      <ImageSelector urls = {urls} currentImg = {currentImg} setCurrentImg = {setCurrentImg}/>
    </div>
  );
}

function getImageUrls() {
  const images = [37, 47, 56, 25, 57, 32, 39, 18, 45, 36, 15, 23];
  const urls = [];

  for (let i = 0; i < images.length; i++) {
      urls.push(`https://picsum.photos/id/10${images[i].toString()}/600/400`);
  }

  return urls;
}

// export default App;
export {App, getImageUrls};
