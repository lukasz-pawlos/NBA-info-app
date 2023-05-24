import axios, { AxiosResponse } from "axios";
import { DataFromApi } from "../models/DataFromApi";
import { Team } from "../models/Team";
const API_URL = 'https://www.balldontlie.io/api/v1/teams';

export class TeamService {

    static async getTeamById(teamId: number | string):Promise<Team> {
        try {
            const response: AxiosResponse<Team, any> =
            await axios.get<Team>(API_URL + `/${teamId}`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error.message)
                throw error;
            }
        }
        throw new Error('An error occurred while fetching the team.');
    }

    static async getTeams():Promise<DataFromApi<Team[]>> {
        try {
            const response: AxiosResponse<DataFromApi<Team[]>, any> =
            await axios.get<DataFromApi<Team[]>>(API_URL);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error.message)
                throw error;
            }
        }
        throw new Error('An error occurred while fetching the team.');
    }
}