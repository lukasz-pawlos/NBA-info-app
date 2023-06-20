import { Link, useParams } from 'react-router-dom';
import SectionInput from '../SectionInput';
import { GameService } from '../../services/GameService';
import { GameQuery } from '../../models/GameQuery';
import { Game } from '../../models/Game';
import { DataFromApi } from '../../models/DataFromApi';
import { useEffect, useState } from 'react';
import { TeamService } from '../../services/TeamService';
import { StatsService } from '../../services/StatsService';
import { StatsQuery } from '../../models/StatsQuery';
import { Stat } from '../../models/Stat';
import { FullStats } from '../../models/FullStats';

const Player = () => {
    const { id } = useParams();

    const [stats, setStats] = useState<Stat | null>(null);
    const [fullStats, setFullStats] = useState<DataFromApi<FullStats[]> | null>(null);
    const [isInStorage, setisInStorage] = useState<DataFromApi<Stat[]> | null>(null);
    const params = new StatsQuery(id);
    let newStat: DataFromApi<FullStats[]>;

    useEffect(() => {
        // @ts-ignore
        setisInStorage(TeamService.isTeamInFavList(id))
        const fetchDataAVG = async () => {
            try {
                // @ts-ignore
                const data = await StatsService.getAvgStatsById(id);
                // @ts-ignore
                console.log(data.data[0])
                // @ts-ignore
                setStats(data.data[0]);
            } catch (error) {
                // Obsługa błędu
            }
        };

        fetchDataAVG();
        fetchData();
    }, []);

    function changeisInStorage() {
        !isInStorage ? TeamService.rmvTeamfromFavList(id) : TeamService.addTeamToFavList(id);
        // @ts-ignore
        setisInStorage(!isInStorage);
    }

    const fetchData = async () => {
        try {
            const data = await StatsService.getStats(params);
            newStat = {
                data: fullStats ? fullStats.data.concat(data.data) : data.data,
                meta: data.meta,
            };
            setFullStats(newStat);
            console.log(stats);
        } catch (error) {
            // Obsługa błędu
        }
    };

    function getMore() {
        ///console.log(stats?.meta.next_page)
        // @ts-ignore
        params.setPage(fullStats?.meta.next_page);
        fetchData();
    }

    return (
        <div>
            <SectionInput />
            <div className="container text-center">
                <h1>{fullStats?.data[0].player.first_name} {fullStats?.data[0].player.last_name}</h1>
                <h2>{fullStats?.data[0].team.full_name}</h2>
                <div className={`logo ${fullStats?.data[0].team.abbreviation}`}></div>
            </div>

            <div>

            </div>
            <div className='px-2 table-responsive'>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th >min</th>
                            <th >fgm</th>
                            <th >fga</th>
                            <th >fg3m</th>
                            <th >fg3a</th>
                            <th >ftm</th>
                            <th >fta</th>
                            <th >oreb</th>
                            <th >dreb</th>
                            <th >reb</th>
                            <th >ast</th>
                            <th >stl</th>
                            <th >blk</th>
                            <th >trv</th>
                            <th >pf</th>
                            <th >pts</th>
                            <th >fg_pct</th>
                            <th >fg3_pct</th>
                            <th >ft_pct</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >{stats?.min}</td>
                            <td >{stats?.fgm !== null ? stats?.fgm.toString() : 0}</td>
                            <td >{stats?.fga !== null ? stats?.fga.toString(): 0}</td>
                            <td >{stats?.fg3m !== null ? stats?.fg3m.toString(): 0}</td>
                            <td >{stats?.fg3a !== null ? stats?.fg3a.toString(): 0}</td>
                            <td >{stats?.ftm !== null ? stats?.ftm.toString(): 0}</td>
                            <td >{stats?.fta !== null ? stats?.fta.toString(): 0}</td>
                            <td >{stats?.oreb !== null ? stats?.oreb.toString(): 0}</td>
                            <td >{stats?.dreb !== null ? stats?.dreb.toString(): 0}</td>
                            <td >{stats?.reb !== null ? stats?.reb.toString(): 0}</td>
                            <td >{stats?.ast !== null ? stats?.ast.toString(): 0}</td>
                            <td >{stats?.stl !== null ? stats?.stl.toString(): 0}</td>
                            <td >{stats?.blk !== null ? stats?.blk.toString(): 0}</td>
                            <td >{stats?.turnover !== null ? stats?.turnover.toString(): 0}</td>
                            <td >{stats?.pf !== null ? stats?.pf.toString(): 0}</td>
                            <td >{stats?.pts !== null ? stats?.pts.toString(): 0}</td>
                            <td >{stats?.fg_pct !== null ? stats?.fg_pct.toString(): 0}</td>
                            <td >{stats?.fg3_pct !== null ? stats?.fg3_pct.toString(): 0}</td>
                            <td >{stats?.ft_pct !== null ? stats?.ft_pct.toString(): 0}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='text-center'>
                    <h1>Games stats</h1>
                </div>

                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Score</th>
                            <th>Date</th>
                            <th >min</th>
                            <th >fgm</th>
                            <th >fga</th>
                            <th >fg3m</th>
                            <th >fg3a</th>
                            <th >ftm</th>
                            <th >fta</th>
                            <th >oreb</th>
                            <th >dreb</th>
                            <th >reb</th>
                            <th >ast</th>
                            <th >stl</th>
                            <th >blk</th>
                            <th >trv</th>
                            <th >pf</th>
                            <th >pts</th>
                            <th >fg_pct</th>
                            <th >fg3_pct</th>
                            <th >ft_pct</th>
                        </tr>
                    </thead>
                    <tbody>
                    {fullStats?.data.map((stat) => (
                        <tr>
                            <td>{stat.game.home_team_score.toString()} - {stat.game.visitor_team_score.toString()}</td>
                            <td >{stat?.min}</td>
                            <td>{stat?.game.date.toString().slice(0, -14)}</td>
                            <td >{stat?.fgm !== null ? stat?.fgm.toString() : 0}</td>
                            <td >{stat?.fga !== null ? stat?.fga.toString(): 0}</td>
                            <td >{stat?.fg3m !== null ? stat?.fg3m.toString(): 0}</td>
                            <td >{stat?.fg3a !== null ? stat?.fg3a.toString(): 0}</td>
                            <td >{stat?.ftm !== null ? stat?.ftm.toString(): 0}</td>
                            <td >{stat?.fta !== null ? stat?.fta.toString(): 0}</td>
                            <td >{stat?.oreb !== null ? stat?.oreb.toString(): 0}</td>
                            <td >{stat?.dreb !== null ? stat?.dreb.toString(): 0}</td>
                            <td >{stat?.reb !== null ? stat?.reb.toString(): 0}</td>
                            <td >{stat?.ast !== null ? stat?.ast.toString(): 0}</td>
                            <td >{stat?.stl !== null ? stat?.stl.toString(): 0}</td>
                            <td >{stat?.blk !== null ? stat?.blk.toString(): 0}</td>
                            <td >{stat?.turnover !== null ? stat?.turnover.toString(): 0}</td>
                            <td >{stat?.pf !== null ? stat?.pf.toString(): 0}</td>
                            <td >{stat?.pts !== null ? stat?.pts.toString(): 0}</td>
                            <td >{stat?.fg_pct !== null ? stat?.fg_pct.toString(): 0}</td>
                            <td >{stat?.fg3_pct !== null ? stat?.fg3_pct.toString(): 0}</td>
                            <td >{stat?.ft_pct !== null ? stat?.ft_pct.toString(): 0}</td>
                        </tr>))}
                    </tbody>
                </table>
                <div className='text-center'>
                    <button
                        className='btn btn-lg btn-dark'
                        onClick={getMore}
                        disabled={params.page === fullStats?.meta.next_page}>
                        Get more </button>
                </div>
            </div>
        </div>
    );
};

export default Player;
