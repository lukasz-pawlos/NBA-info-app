import { useEffect, useState } from "react";
import { DataFromApi } from "../../models/DataFromApi";
import { PlayerService } from "../../services/PlayerService";
import { Player } from "../../models/Player";
import { Link } from "react-router-dom";

const Players = () => {
    const [inputValue, setInputValue] = useState('');
    const [players, setPlayers] = useState<DataFromApi<Player[]> | null>(null);
    const [page, setPage] = useState(1);
    let newplayers: DataFromApi<Player[]>;

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
        // @ts-ignore
        setPage(1);
    };

    async function fetchData() {
        try {
            const data = await PlayerService.getPlayers(inputValue, page);
            setPlayers(data);
        } catch (error) {
            // Obsługa błędu
        }
    };

    const fetchDataBtn = async () => {
        try {
            const data = await PlayerService.getPlayers(inputValue, page);
            newplayers = {
                data: players ? players.data.concat(data.data) : data.data,
                meta: data.meta,
            };
            setPlayers(newplayers);
        } catch (error) {
            // Obsługa błędu
        }
    };

    useEffect(() => {
        fetchData();
    }, [inputValue]);

    function getMore() {
        // @ts-ignore
        setPage(players?.meta.next_page);
        fetchDataBtn();
    }


    return (
        <div>

            <div>
                <div
                    className="bg-image d-flex flex-column justify-content-center align-items-center"
                    // @ts-ignore
                    style={{
                        // @ts-ignore
                        backgroundImage: `url(http://localhost:3000/backg.png)`,
                        height: '80vh'
                    }}
                >

                    <div>
                        <h1 className="text-white fs-1 py-4">Find your player</h1>
                        <input type="text"
                            className="form-control"
                            placeholder="playerID"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div><h1 className="text-center">Players</h1></div>

                <div className='px-2 conteiner'>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Player</th>
                                <th scope="col">Team</th>
                                <th scope="col">Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players?.data.map((player) => (
                                <tr>
                                    <td>
                                        <Link
                                            className="text-white text-decoration-none"
                                            to={`/players/${player.id}`}
                                        >
                                            {player.first_name} {player.last_name}
                                        </Link>
                                    </td>
                                    <td>
                                        <Link
                                            className="text-white text-decoration-none"
                                            to={`/teams/${player.team.id}`}
                                        >
                                            {player.team.full_name}
                                        </Link>
                                    </td>
                                    <td >{player.position}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                    <div className='text-center'>
                        <button
                            className='btn btn-lg btn-dark'
                            onClick={getMore}
                            disabled={players?.meta.total_pages === page}>
                            Get more </button>
                    </div>

                </div>
            </div>
        </div >

    );
}

export default Players;