import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataFromApi } from "../models/DataFromApi";
import { Team } from "../models/Team";
import { TeamService } from "../services/TeamService";

const CarouselLogos = () => {
  const [teams, setTeams] = useState<DataFromApi<Team[]> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await TeamService.getTeams();
        setTeams(data);
      } catch (error) {
        // Obsługa błędu
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center py-3">NBA TEAMS</h1>
      <div id="carouselExampleSlidesOnly" className="row">
        {teams?.data.map((team) => (
          <div className="col">
            <Link to={`/teams/${team.id}`}>
              <div className={`logo ${team.abbreviation}`}></div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselLogos;
