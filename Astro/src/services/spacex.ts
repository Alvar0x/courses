import type { Launch } from "../types/Launch";

export async function getLatestLaunches() {
    const result = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'desc',
                },
                limit: 12,
            },
        }),
    });

    const resultJSON: { docs: Launch[] } = await result.json();

    return resultJSON.docs;
}

export async function getOldestLaunches() {
    const result = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc',
                },
                limit: 12,
            },
        }),
    });

    const resultJSON: { docs: Launch[] } = await result.json();

    return resultJSON.docs;
}

export async function getLaunchByID({ id }: { id: string | undefined }) {
    const result = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
    const launch: Launch = await result.json();
    return launch;
}