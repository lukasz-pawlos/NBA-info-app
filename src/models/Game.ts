import { Team } from "./Team"

export class Game {
    id: Number;
    date: Date;
    home_team_score: Number;
    visitor_team_score: Number;
    season: Number;
    period: Number;
    status: String;
    time: String;
    postseason: Boolean;
    home_team: Team;
    visitor_team: Team;
}
