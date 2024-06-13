import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Listing from "./pages/listing.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientInfo from "./pages/client-info.tsx";

const client = new ApolloClient({
	uri: "http://localhost:5004",
	cache: new InMemoryCache(),
});

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Listing />,
			},
			{
				path: ":clientId",
				element: <ClientInfo />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			{/* <App /> */}
			<RouterProvider router={router} />
		</ApolloProvider>
	</React.StrictMode>
);
