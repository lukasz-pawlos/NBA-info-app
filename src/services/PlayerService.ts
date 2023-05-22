import axios, { AxiosResponse } from "axios";
import { Player } from "../models/Player";
import { DataFromApi } from "../models/DataFromApi";
const API_URL = 'https://www.balldontlie.io/api/v1/players';

export class PlayerService {

    /**
     * Get array of players
     * @param search optional
     * @returns DataFromApi<Player[]>
     */
    static async getPlayers(search: String = ""):Promise<DataFromApi<Player[]>> {
        try {
            const response: AxiosResponse<DataFromApi<Player[]>, any> =
            await axios.get<DataFromApi<Player[]>>(API_URL + `/?search=${search}`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error.message)
                throw error;
            }
        }
        throw new Error('An error occurred while fetching the players.');
    }

    /**
     * Get selected player by PlayerId
     * @param PlayerId
     * @returns Player
     */
    static async getPlayerById(PlayerId: Number | String):Promise<Player> {
        try {
            const response: AxiosResponse<Player> = 
            await axios.get<Player>(API_URL + `/${PlayerId}`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error.message)
                throw error;
            }
        }
        throw new Error('An error occurred while fetching the player.');
    }

    /**
     * Function to add FavPlayer to array in LocalStorage
     * @param PlayerId 
     *  
     */
    static addPlayerToFavList(PlayerId: Number | String | undefined) {
        const existingArray = localStorage.getItem('favPlayers');
        
        let newArray: any[] = [];
        if (existingArray) {
            try {
                if(existingArray.includes(`${PlayerId}`))
                {
                    newArray = JSON.parse(existingArray);
                    if (Array.isArray(newArray)) {
                        console.error('Existing value is not an array.');
                        return;
                    }
                }
            } catch (error) {
                console.error(`Error parsing existing array: ${error}`);
                return;
            }
        }
        newArray.push(PlayerId);
        localStorage.setItem('favPlayers', JSON.stringify(newArray));
    }

    /**
     * Function to remove FavPlayer from array from LocalStorage
     * @param PlayerId 
     * 
     */
    static rmvPlayerfromFavList(PlayerId: Number | String) {
        const existingArray = localStorage.getItem('favPlayers');
        
        let newArray: any[] = [];
        if (existingArray) {
            try {
                if(existingArray.includes(`${PlayerId}`))
                    newArray = JSON.parse(existingArray);
            } catch (error) {
                console.error(`Error parsing existing array: ${error}`);
                return;
            }
        }
        newArray = newArray.filter(id => id !== PlayerId);
        localStorage.setItem('favPlayers', JSON.stringify(newArray));
    }
}