import logo from './logo.svg';
import './App.css';
import {PhotoViewer} from './PhotoViewer/PhotoViewer.js';

function App() {
  return (
    <div>
      <h1>React Photo Viewer</h1>
      <PhotoViewer src={"https://picsum.photos/id/1015/600/400"}/>
    </div>
  );
}

export default App;
