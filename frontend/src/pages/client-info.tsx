import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const ClientInfo = () => {
	const get_client_info = gql`
		query GetClientInfo($clientId: String!) {
			getClient(id: $clientId) {
				id
				name
				age
				gender
				additionalInfo {
					company
					email
					phone
					address
				}
			}
		}
	`;

	const params = useParams();

	const { loading, error, data } = useQuery(get_client_info, {
		variables: { clientId: params.clientId },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	console.log(data);

	if (data && data.getClient) {
		const { id, name, age, gender, additionalInfo } = data.getClient;

		return (
			<div className="p-4 bg-white shadow rounded-lg">
				<h1 className="text-xl font-bold">Client Information</h1>
				<p className="border-b px-6 py-3 text-left">
					<strong>ID:</strong> {id}
				</p>
				<p>
					<strong className="">Name:</strong> {name}
				</p>
				<p>
					<strong>Age:</strong> {age}
				</p>
				<p>
					<strong>Gender:</strong> {gender}
				</p>
				<div className="mt-4">
					<h2 className="text-lg font-bold">Additional Information</h2>
					<p>
						<strong>Company:</strong> {additionalInfo.company}
					</p>
					<p>
						<strong>Email:</strong> {additionalInfo.email}
					</p>
					<p>
						<strong>Phone:</strong> {additionalInfo.phone}
					</p>
					<p>
						<strong>Address:</strong> {additionalInfo.address}
					</p>
				</div>
			</div>
		);
	}
	return <p>No client data available.</p>;
};

export default ClientInfo;
