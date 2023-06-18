import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/>}> </Route>
        <Route path="/players" element={ <Home/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
