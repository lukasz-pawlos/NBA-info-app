import React , { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { PlayerService } from './services/PlayerService';
import { Player } from './models/Player';
import { DataFromApi } from './models/DataFromApi';

function App() {

  const [serviceData, setServiceData] = useState<Player | undefined>(undefined);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await PlayerService.getPlayerById(213);
        fetchedData !== undefined ? setServiceData(fetchedData) : console.log("No data")
      } catch (error) {
        // Handle error
      }
    };

    getData();
  }, []);

  function add() {
    //@ts-ignore
    PlayerService.addPlayerToFavList(serviceData.id);
  }

  function rmv() {
    //@ts-ignore
    PlayerService.rmvPlayerfromFavList(serviceData.id);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={add}>
        Button add
      </button>
      <button onClick={rmv}>
        Button rmv
      </button>
    </div>
  );
}

export default App;
