import { Link, useParams } from 'react-router-dom';
import SectionInput from '../SectionInput';
import { GameService } from '../../services/GameService';
import { GameQuery } from '../../models/GameQuery';
import { Game } from '../../models/Game';
import { DataFromApi } from '../../models/DataFromApi';
import { useEffect, useState } from 'react';

const Team = () => {
    const { id } = useParams();

    const [stats, setTeams] = useState<DataFromApi<Game[]> | null>(null);
    const params = new GameQuery(id);
    let newStat: DataFromApi<Game[]>;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GameService.getGames(params);
                setTeams(data);
            } catch (error) {
                // Obsługa błędu
            }
        };

        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await GameService.getGames(params);
            newStat = {
                data: stats ? stats.data.concat(data.data) : data.data,
                meta: data.meta,
            };
            setTeams(newStat);
            console.log(stats);
        } catch (error) {
            // Obsługa błędu
        }
    };

    function getMore() {
        console.log(params)
        console.log(stats?.meta.next_page)
        // @ts-ignore
        params.setPage(stats?.meta.next_page);
        fetchData();
    }

    return (
        <div>
            <SectionInput />
            <div className="container">
                {stats?.data[0].home_team.id == id ?
                    <div className={`logo ${stats?.data[0].home_team.abbreviation}`}></div> :
                    <div className={`logo ${stats?.data[0].visitor_team.abbreviation}`}></div>
                }
            </div>
            <div>
                <h1 className='text-center'>{stats?.data[0].home_team.id == id ?
                    stats?.data[0].home_team.full_name :
                    stats?.data[0].visitor_team.full_name
                }</h1>
            </div>

            <div className='px-2'>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Home Team</th>
                            <th scope="col">Visitor Team</th>
                            <th scope="col">Date</th>
                            <th scope="col">Home score</th>
                            <th scope="col">Visitor score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stats?.data.map((stat) => (
                            <tr>
                                <td>
                                    <Link className={
                                        stat.home_team_score > stat.visitor_team_score ?
                                            "text-success text-decoration-none" : "text-danger text-decoration-none"
                                    } to={`/teams/${stat.home_team.id}`}>
                                        {stat.home_team.full_name}
                                    </Link>
                                </td>
                                <td>
                                    <Link className={
                                        stat.home_team_score < stat.visitor_team_score ?
                                            "text-success text-decoration-none" : "text-danger text-decoration-none"
                                    } to={`/teams/${stat.home_team.id}`}>
                                        {stat.visitor_team.full_name}
                                    </Link>
                                </td>
                                <td>{stat.date.toString().slice(0, -14)}</td>
                                <td className={
                                    stat.home_team_score > stat.visitor_team_score ?
                                        "text-success" : "text-danger"
                                }>{stat.home_team_score.toString()}</td>
                                <td className={
                                    stat.home_team_score < stat.visitor_team_score ?
                                        "text-success" : "text-danger"
                                }>{stat.visitor_team_score.toString()}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                <div className='text-center'>
                    <button
                        className='btn btn-lg btn-dark'
                        onClick={getMore}
                        disabled={params.page === stats?.meta.next_page}>
                        Get more </button>
                </div>

            </div>
        </div>
    );
};

export default Team;
