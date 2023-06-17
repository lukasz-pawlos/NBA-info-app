import axios, { AxiosResponse } from "axios";
import { DataFromApi } from "../models/DataFromApi";
import { Game } from "../models/Game";
import { GameQuery } from "../models/GameQuery";
const API_URL = 'https://www.balldontlie.io/api/v1/games';

export class GameService {
    
    /**
     * Get array of games
     * @param queryBody GameQuery
     * @returns DataFromApi<Game[]>
     */
    static async getGames(queryBody: GameQuery):Promise<DataFromApi<Game[]>> {
        try {
            console.log(queryBody)
            const response:AxiosResponse<DataFromApi<Game[]>, any> =
            await axios.get<DataFromApi<Game[]>>(API_URL,{
                params:
                    queryBody});
            return response.data
        } catch(error) {
            if (axios.isAxiosError(error)) {
                console.error(error.message)
                throw error;
            }
        }
        throw new Error('An error occurred while fetching the game.');
    }

    /**
     * Get selected games by gameId
     * @param gameId string | number
     * @returns Game
     */
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