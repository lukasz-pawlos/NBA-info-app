import axios, { AxiosResponse } from "axios";
import { DataFromApi } from "../models/DataFromApi";
import { Game } from "../models/Game";
const API_URL = 'https://www.balldontlie.io/api/v1/games';

export class GameService {
    
    static async getGames(teamId: string | number):Promise<DataFromApi<Game[]>> {
        try {
            const response:AxiosResponse<DataFromApi<Game[]>, any> =
            await axios.get<DataFromApi<Game[]>>(API_URL+ `/team_ids=${teamId}`);
            return response.data
        } catch(error) {
            if (axios.isAxiosError(error)) {
                console.error(error.message)
                throw error;
            }
        }
        throw new Error('An error occurred while fetching the game.');
    }

    static async getGameById(gameId: string | number):Promise<Game> {
        try {
            const response:AxiosResponse<Game> =
            await axios.get<Game>(API_URL + `/${gameId}`)
            return response.data
        } catch(error) {
            if (axios.isAxiosError(error)) {
                console.error(error.message)
                throw error;
            }
    }
    throw new Error('An error occurred while fetching the game.');
    }
}