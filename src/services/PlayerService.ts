import axios from "axios";
import { Player } from "../models/Player";
import { DataFromApi } from "../models/DataFromApi";
const API_URL = 'https://www.balldontlie.io/api/v1/players';


export class PlayerService {

    static async getPlayers(search: String = "") {
        try {
            const { data } = await axios.
            get<DataFromApi<Player>>(API_URL+ `/?search=${search}`);
            console.log(data);
            //return data; //For test
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }

    static async getPlayerById(PlayerId: Number | String){
        try {
            const { data } = await axios.get<DataFromApi<Player>>(API_URL + `/${PlayerId}`);
            console.log(data);
            //return data; //For test
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    }
/*
    static async createCoach(Coach:CreateCoachClass ){
        try {
            await axios.post<CoachClass>(API_URL, Coach);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
        }
    } */
}