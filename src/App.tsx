import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Teams from './components/pages/Teams';
import Team from './components/pages/Team';
import NavBar from './components/NavBar';
import Favs from './components/pages/Favs';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={ <Home/>}> </Route>
        <Route path="/teams" element={ <Teams/>}> </Route>
        <Route path="/favs" element={ <Favs/>}> </Route>
        <Route path="/teams/:id" element={ <Team/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
