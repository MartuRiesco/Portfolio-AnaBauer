import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Reel from './components/Reel/Reel';
import Video from './components/Video/Video'
import FotoDigital from './components/FotoDigital/FotoDigital';
import FotoDigitalList from './components/FotoDigitalList/FotoDigitalList';
import SobreMi from './components/SobreMi/SobreMi';
import Index from './components/Index/Index';

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
          <Route path='/' element={<Index/>}></Route>
            <Route path='/fotodigital' element={<FotoDigital type={'fotodig'} />}/>
            <Route path='/fotodigital/:idCategory' element={<FotoDigitalList type={'fdcat'}/>} />
            <Route path='/fotoanalogica' element={<FotoDigitalList type={'fotoan'} />}/>
            <Route path='/reel' element={<Reel/>}/>
            <Route path='/fotodigital/diariodeviaje'  element={<FotoDigital type={'ddviajes'} />} />
            <Route path='/fotodigital/retratos/:idCategory' element={<FotoDigitalList type={'sub'} />} />
            <Route path='/fotodigital/fotoperiodismo/:idCategory' element={<FotoDigitalList type={'sub'} />} />
            <Route path='/fotodigital/diariodeviaje/:idCategory' element={<FotoDigitalList type={'ddvcat'} />} />
            <Route path='/cine' element={<Video />}/>
            <Route path='/sobremi' element={<SobreMi/>}/>
        </Routes>
      </main>
     
    </div>
  </BrowserRouter>
  )
}

export default App
