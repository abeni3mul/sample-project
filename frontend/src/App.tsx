import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
	const navigate = useNavigate();

	return (
		<>
			<div className="bg-gray-100 px-5 py-2 rounded-lg drop-shadow-md">
				<div className="gap-10 flex p-5">
					<button
						onClick={() => {
							navigate("/");
						}}
						className="cursor-pointer"
					>
						List
					</button>
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default App;
