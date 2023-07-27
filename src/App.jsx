import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import FotoAnalogica from './components/FotoAnalogica/FotoAnalogica';
import Reel from './components/Reel/Reel';
import Video from './components/Video/Video';

function App() {
  document.oncontextmenu = function () {
    return false;
  };

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <main>
        <Routes>
            <Route path='/fotoanalogica' element={<FotoAnalogica/>}/>
            <Route path='/reel' element={<Reel/>}/>
            <Route path='/video' element={<Video/>}/>
        </Routes>
      </main>
     
    </div>
  </BrowserRouter>
  )
}

export default App
