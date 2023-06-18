import { useEffect, useState } from "react";
import { TeamService } from "../../services/TeamService";
import { Team } from "../../models/Team";
import SectionInput from "../SectionInput";
import { Link } from "react-router-dom";

const Favs = () => {
    const [teams, setTeams] = useState<Team[] | null>(null);
    let numberList: number[]

    async function fetchData() {
        // @ts-ignore
        numberList = JSON.parse(localStorage.getItem('favTeams')).map((str) => parseInt(str, 10))
        let teamsList: Team[] = []
        for (const item of numberList) {
            console.log(item)
            try {
                const data = await TeamService.getTeamById(item);
                teamsList.push(data);
            } catch (error) {
                // Obsługa błędu
            }
        }
        setTeams(teamsList)
    };

    useEffect(() => {
        fetchData();
    }, []);

    function remove(id:Number) {
        console.log(`${id}`)
        // @ts-ignore
        TeamService.rmvTeamfromFavList(id.toString)
        // @ts-ignore
        //setTeams(teams.filter(item => item.id !== id))
    }

    return (
        <div>
            <SectionInput></SectionInput>
            <div className="row">
                {teams?.map((team) => (
                    <div className="col flex-column align-items-center">
                        <Link to={`/teams/${team.id}`}>
                            <div className={`logo ${team.abbreviation}`}></div>
                        </Link>
                        <div className="text-center">
                            <button
                                type="button"
                                className="btn btn-outline-dark"
                                onClick={()=>remove(team.id)}
                            >
                                RM
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favs;