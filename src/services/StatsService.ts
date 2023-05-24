import { DataFromApi } from "../models/DataFromApi";
import axios, { AxiosResponse } from "axios";
import { StatsQuery } from "../models/StatsQuery";
import { Stat } from "../models/Stat";
const API_URL = 'https://www.balldontlie.io/api/v1';

export class StatsService {

    static async getStats(queryBody: StatsQuery):Promise<DataFromApi<Stat[]>> {
        try {
            const response:AxiosResponse<DataFromApi<Stat[]>, any> = 
            await axios.get<DataFromApi<Stat[]>>(API_URL + '/stats', {
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

    static async getStatsByGameId(gameId: string | number):Promise<DataFromApi<Stat[]>> {
        try {
            const response:AxiosResponse<DataFromApi<Stat[]>, any> = 
            await axios.get<DataFromApi<Stat[]>>(API_URL + `/stats/game_ids=${gameId}`);
            return response.data
        } catch(error) {
            if (axios.isAxiosError(error)) {
                console.error(error.message)
                throw error;
            }
        }
        throw new Error('An error occurred while fetching the stats.');
    }

    static async getAvgStatsById(playerId: string | number, season: string | number):Promise<Stat> {
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