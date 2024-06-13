import { useState } from "react";

import FilterSelect from "../components/filter.component";
import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

function Listing() {
	const navigate = useNavigate();

	const [sortBy, setSortBy] = useState("name");

	const get_clients = gql`
		query GetClients {
			clients {
				id
				name
				age
			}
		}
	`;

	const { loading, error, data } = useQuery(get_clients);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	console.log(data);

	return (
		<div className="">
			<div className=" gap-10 pt-4">
				<div className=" py-4 px-12">
					<div className="flex items-center justify-end gap-20">
						<FilterSelect
							description="Sort By:"
							id="sort"
							onChange={(e) => setSortBy(e.target.value)}
						>
							<option value="name" selected>
								Name
							</option>
							<option value="age">Age</option>
						</FilterSelect>
					</div>
				</div>
				<div className="border-2 border-gray-800 rounded-lg flex-1">
					<table
						className="w-full
					"
					>
						<thead className="bg-gray-800 text-white">
							<tr>
								<th className="px-6 py-3 text-left">Name</th>
								<th className="px-6 py-3 text-left">ID</th>
								<th className="px-6 py-3 text-left">Age</th>
							</tr>
						</thead>
						<tbody className="bg-white">
							{[...data.clients]
								.sort((a, b) => {
									if (sortBy === "name")
										return a.name.localeCompare(b.name);
									else return a.age - b.age;
								})
								.map(
									({
										id,
										name,
										age,
									}: {
										id: string;
										name: string;
										age: number;
									}) => (
										<tr
											onClick={() => {
												navigate(`/${id}`);
											}}
											className="border-b"
											key={id}
										>
											<td className="px-6 py-4 text-left">{name}</td>
											<td className="px-6 py-4 text-left">{id}</td>
											<td className="px-6 py-4 text-left">{age}</td>
										</tr>
									)
								)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Listing;
