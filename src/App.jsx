import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';

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
         
        </Routes>
      </main>
     
    </div>
  </BrowserRouter>
  )
}

export default App
