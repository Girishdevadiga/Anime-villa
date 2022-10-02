import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies'
import Manga from './pages/Manga'
import AnimeInfo from './pages/AnimeInfo';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import VidStream from './pages/VidStream';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/movies' element={ <Movies />} />
        <Route path='/manga' element={ <Manga />} />
        <Route path='/anime/:id' element={ <AnimeInfo />} />
        <Route path='/anime/:name/watch/:id' element={ <VidStream />} />
      </Routes>
    </BrowserRouter>
   

  );
}

export default App;
