import { readFileSync } from "fs";
// Load and parse the JSON data
const { clients } = JSON.parse(readFileSync("./src/data.json", "utf8"));
export const resolvers = {
    Query: {
        clients: () => clients,
    },
};
