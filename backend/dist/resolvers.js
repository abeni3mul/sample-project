import { readFileSync } from "fs";
const { clients } = JSON.parse(readFileSync("./src/data.json", "utf8"));
export const resolvers = {
    Query: {
        clients: () => clients,
        getClient: (_, { id }) => clients.find((c) => c.id === id),
    },
};
