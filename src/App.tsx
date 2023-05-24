import React , { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { PlayerService } from './services/PlayerService';
import { DataFromApi } from './models/DataFromApi';
import { StatsService } from './services/StatsService';
import { StatsQuery } from './models/StatsQuery';
import { Stat } from './models/Stat';

function App() {

  const [serviceData, setServiceData] = useState<DataFromApi<Stat[]> | undefined>(undefined);

  useEffect(() => {
    const getData = async () => {
      const query = new StatsQuery(237)
      query.setPage(2)
      try {
        const fetchedData = await StatsService.getStats(query);
        fetchedData !== undefined ? setServiceData(fetchedData) : console.log("No data")
      } catch (error) {
        // Handle error
      }
    };

    getData();
  }, []);

  function add() {
    //@ts-ignore
    console.log(serviceData)
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
