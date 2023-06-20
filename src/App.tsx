import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Teams from './components/pages/Teams';
import Team from './components/pages/Team';
import NavBar from './components/NavBar';
import Favs from './components/pages/Favs';
import Players from './components/pages/Players';
import Player from './components/pages/Player';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={ <Home/>}> </Route>
        <Route path="/teams" element={ <Teams/>}> </Route>
        <Route path="/favs" element={ <Favs/>}> </Route>
        <Route path="/players" element={ <Players/>}> </Route>
        <Route path="/teams/:id" element={ <Team/>}> </Route>
        <Route path="/players/:id" element={ <Player/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
