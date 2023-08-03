import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import FotoAnalogica from './components/FotoAnalogica/FotoAnalogica';
import Reel from './components/Reel/Reel';
import Video from './components/Video/Video';
import FotoDigital from './components/FotoDigital/FotoDigital';
import FotoDigitalList from './components/FotoDigitalList/FotoDigitalList';

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
            <Route path='/fotodigital' element={<FotoDigital type={'fotodig'} />}/>
            <Route path='/fotodigital/:idCategory' element={<FotoDigitalList type={'fdcat'}/>} />
            <Route path='/fotoanalogica' element={<FotoAnalogica/>}/>
            <Route path='/reel' element={<Reel/>}/>
            <Route path='/fotodigital/diariodeviaje'  element={<FotoDigital type={'ddviajes'} />} />
            <Route path='/fotodigital/retratos/:idCategory' element={<FotoDigitalList type={'sub'} />} />
            <Route path='/fotodigital/fotoperiodismo/:idCategory' element={<FotoDigitalList type={'sub'} />} />
            <Route path='/fotodigital/diariodeviaje/:idCategory' element={<FotoDigitalList type={'ddvcat'} />} />
            <Route path='/video' element={<Video/>}/>
        </Routes>
      </main>
     
    </div>
  </BrowserRouter>
  )
}

export default App
