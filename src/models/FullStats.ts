import { Game } from "./Game";
import { Player } from "./Player";
import { Team } from "./Team";

export class FullStats {
    id: number | string;
    ast: number | string;
    blk: number | string;
    dreb: number | string;
    fg3_pct: number | string;
    fg3a: number | string;
    fg3m: number | string;
    fg_pct: number | string;
    fga: number | string;
    fgm: number | string;
    ft_pct: number | string;
    fta: number | string;
    ftm: number | string;
    game: Game
    min: number | string;
    oreb: number | string;
    pf: number | string;
    player: Player;
    pts: number | string;
    reb: number | string;
    stl: number | string;
    team: Team;
    turnover: number | string;
}