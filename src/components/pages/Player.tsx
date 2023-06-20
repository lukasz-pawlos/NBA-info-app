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
    const params = new StatsQuery(id);
    let newStat: DataFromApi<FullStats[]>;

    useEffect(() => {
        // @ts-ignore
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
        console.log(params)
        console.log(fullStats?.meta.next_page)
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
                            <td >{stats?.fgm.toString()}</td>
                            <td >{stats?.fga.toString()}</td>
                            <td >{stats?.fg3m.toString()}</td>
                            <td >{stats?.fg3a.toString()}</td>
                            <td >{stats?.ftm.toString()}</td>
                            <td >{stats?.fta.toString()}</td>
                            <td >{stats?.oreb.toString()}</td>
                            <td >{stats?.dreb.toString()}</td>
                            <td >{stats?.reb.toString()}</td>
                            <td >{stats?.ast.toString()}</td>
                            <td >{stats?.stl.toString()}</td>
                            <td >{stats?.blk.toString()}</td>
                            <td >{stats?.turnover.toString()}</td>
                            <td >{stats?.pf.toString()}</td>
                            <td >{stats?.pts.toString()}</td>
                            <td >{stats?.fg_pct.toString()}</td>
                            <td >{stats?.fg3_pct.toString()}</td>
                            <td >{stats?.ft_pct.toString()}</td>
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
                            <td>{stat.game.date.toString().slice(0, -14)}</td>
                            <td >{stat?.min}</td>
                            <td >{stat?.fgm.toString()}</td>
                            <td >{stat?.fga.toString()}</td>
                            <td >{stat?.fg3m.toString()}</td>
                            <td >{stat?.fg3a.toString()}</td>
                            <td >{stat?.ftm.toString()}</td>
                            <td >{stat?.fta.toString()}</td>
                            <td >{stat?.oreb.toString()}</td>
                            <td >{stat?.dreb.toString()}</td>
                            <td >{stat?.reb.toString()}</td>
                            <td >{stat?.ast.toString()}</td>
                            <td >{stat?.stl.toString()}</td>
                            <td >{stat?.blk.toString()}</td>
                            <td >{stat?.turnover.toString()}</td>
                            <td >{stat?.pf.toString()}</td>
                            <td >{stat?.pts.toString()}</td>
                            <td >{stats?.fg_pct.toString()}</td>
                            <td >{stat?.fg3_pct.toString()}</td>
                            <td >{stat?.ft_pct.toString()}</td>
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
