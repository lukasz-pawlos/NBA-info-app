import { DataFromApi } from "../models/DataFromApi";
import axios, { AxiosResponse } from "axios";
import { StatsQuery } from "../models/StatsQuery";
import { Stat } from "../models/Stat";
import { FullStats } from "../models/FullStats";
const API_URL = 'https://www.balldontlie.io/api/v1';

export class StatsService {


        /**
     * Get array of stats
     * @param queryBody | StatsQuery
     * @returns DataFromApi<FullStats[]>
     */
    static async getStats(queryBody: StatsQuery):Promise<DataFromApi<FullStats[]>> {
        try {
            const response:AxiosResponse<DataFromApi<FullStats[]>, any> = 
            await axios.get<DataFromApi<FullStats[]>>(API_URL + '/stats', {
                params: queryBody
            });
            return response.data
        } catch(error) {
            if (axios.isAxiosError(error)) {
                console.error(error.message)
                throw error;
            }
        }
        throw new Error('An error occurred while fetching the stats.');
    }

    /**
     * Get stats by gameId
     * @param gameId string | number
     * @returns DataFromApi<FullStats[]>
     */
    static async getStatsByGameId(gameId: string | number):Promise<DataFromApi<FullStats[]>> {
        try {
            const response:AxiosResponse<DataFromApi<FullStats[]>, any> = 
            await axios.get<DataFromApi<FullStats[]>>(API_URL + `/stats/game_ids=${gameId}`);
            return response.data
        } catch(error) {
            if (axios.isAxiosError(error)) {
                console.error(error.message)
                throw error;
            }
        }
        throw new Error('An error occurred while fetching the stats.');
    }

    /**
     * Get stats by playerId
     * @param playerId string | number
     * @param season string | number
     * @returns DataFromApi<Stat[]>
     */
    static async getAvgStatsById(playerId: string | number, season: string | number = 2022):Promise<Stat> {
        try {
            const response:AxiosResponse<Stat> = 
            await axios.get<Stat>(API_URL + `/season_averages?player_ids[]=${playerId}&season=${season}`);
            return response.data
        } catch(error) {
            if (axios.isAxiosError(error)) {
                console.error(error.message)
                throw error;
            }
        }
        throw new Error('An error occurred while fetching the stats.');
    }
}