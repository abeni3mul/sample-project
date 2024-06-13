export const typeDefs = `
	type Query {
		clients: [Client],
		getClient(id: String!): Client
	}

	type Client {
		id: ID!
		name: String!
		age: Int!
		gender: String
		additionalInfo: AdditionalInfo
	}

	type AdditionalInfo {
		company: String
		email: String
		phone: String
		address: String
	}
`;
