import logo from './logo.svg';
import './App.css';
import {PhotoViewer} from './PhotoViewer/PhotoViewer.js';
import {ImageSelector} from './ImageSelector/ImageSelector.js';

function App() {
  return (
    <div>
      <h1>React Photo Viewer</h1>
      <PhotoViewer src={"https://picsum.photos/id/1037/600/400"}/>
      <ImageSelector/>
    </div>
  );
}

export default App;
