export class GameQuery {
    'page': number | null;
    'per_page': number | null;
    'dates': Date | null;
    'seasons[]': number | null;
    'team_ids[]': number | null;
    'start_date': Date | null;
    'end_date': Date | null;


    constructor(
        team_ids?: number,
        dates?: Date,
        start_date?: Date,
        end_date?: Date,
        page?: number,
        per_page?: number,
        seasons?: number) {
            this.page = page || null;
            this.per_page = per_page || null;
            this.dates = dates || null;
            this["seasons[]"]= seasons || 2022;
            this["team_ids[]"] = team_ids || null;
            this.start_date = start_date || null;
            this.end_date = end_date || null;
        }

    setPage(page: number) {
        this.page = page;
    }

    setSeasons(season: number) {
        this["seasons[]"]= season
    }

    setPerPage(per_page: number) {
        this.per_page = per_page;
    }

    setDateRange(start_date: Date, end_date: Date) {
        this.start_date = start_date;
        this.end_date = end_date;
    }

    setDates(dates: Date) {
        this.dates = dates;
    }
}