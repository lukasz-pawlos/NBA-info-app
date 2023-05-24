import React , { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { PlayerService } from './services/PlayerService';
import { DataFromApi } from './models/DataFromApi';
import { StatsService } from './services/StatsService';
import { StatsQuery } from './models/StatsQuery';
import { Stat } from './models/Stat';
import { TeamService } from './services/TeamService';
import { Team } from './models/Team';

function App() {

  const [serviceData, setServiceData] = useState<Team | undefined>(undefined);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await TeamService.getTeamById(14);
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
    TeamService.addTeamToFavList(serviceData?.id)
  }

  function rmv() {
    //@ts-ignore
    TeamService.rmvTeamfromFavList(serviceData.id)
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
