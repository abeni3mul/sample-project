import { ApolloServer } from "@apollo/server";
import { readFileSync } from "fs";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 5004 },
});

console.log(`🚀  Server ready at: ${url}`);
