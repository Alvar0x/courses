export type Launch = {
    id: string,
    flight_number: number,
    name: string,
    details: string,
    date_unix: string,
    success: boolean,
    links: {
        patch: {
            small: string,
            large: string
        }
        webcast: string,
        article: string
    }
}
