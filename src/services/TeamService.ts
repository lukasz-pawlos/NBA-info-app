import axios, { AxiosResponse } from "axios";
import { DataFromApi } from "../models/DataFromApi";
import { Team } from "../models/Team";
const API_URL = 'https://www.balldontlie.io/api/v1/teams';

export class TeamService {

    /**
     * Get selected team by teamId
     * @param teamId string | number
     * @returns Team
     */
    static async getTeamById(teamId: number | string): Promise<Team> {
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

    /**
     * Get  all teams
     * @returns DataFromApi<Team[]>
     */
    static async getTeams(): Promise<DataFromApi<Team[]>> {
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

    /**
     * Function to add FavTeam from array from LocalStorage
     * @param teamId 
     * 
     */
    static addTeamToFavList(teamId: Number | String | undefined) {
        const existingArray = localStorage.getItem('favTeams');

        let newArray: any[] = [];
        if (existingArray) {
            try {
                if (!existingArray.includes(`${teamId}`)) {
                    console.log(23432)
                    newArray = JSON.parse(existingArray);
                }
            } catch (error) {
                console.error(`Error parsing existing array: ${error}`);
                return;
            }
        }
        console.log(newArray)
        newArray.push(teamId);
        localStorage.setItem('favTeams', JSON.stringify(newArray));
    }


    /**
     * Function to remove FavTeam from array from LocalStorage
     * @param teamId 
     * 
     */
    static rmvTeamfromFavList(teamId: Number | String | undefined) {
        const existingArray = localStorage.getItem('favTeams');

        let newArray: any[] = [];
        if (existingArray) {
            try {
                if (existingArray.includes(`${teamId}`))
                    newArray = JSON.parse(existingArray);
            } catch (error) {
                console.error(`Error parsing existing array: ${error}`);
                return;
            }
        }
        newArray = newArray.filter(id => id !== teamId);
        localStorage.setItem('favTeams', JSON.stringify(newArray));
    }

    static isTeamInFavList(teamId: Number | String | undefined) {
        const existingArray = localStorage.getItem('favTeams');
        if (existingArray ) {
            if (!existingArray.includes(`${teamId}`))
                return true;
                return false;
        }
    }
}