
export default defineEventHandler(async (event) => {
    const {ping} = getQuery(event) as {ping: string | undefined;};

    return {pong: ping ?? "N/A"};
});