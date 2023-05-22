export class DataFromApi<Type> {
    data: Type;
    meta: {
        total_pages: Number;
        current_page: Number;
        next_page: Number;
        per_page: Number;
        total_count: Number;
      }
}