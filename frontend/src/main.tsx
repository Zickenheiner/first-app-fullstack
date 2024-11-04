import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Budget from "./pages/Budget.tsx";
import Home from "./pages/Home.tsx";
import "./styles/index.css";

const rooter = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/Dashboard",
				element: <Home />,
			},
			{
				path: "/Budget",
				element: <Budget />,
			},
		],
	},
]);

const root = document.getElementById("root");
root && createRoot(root).render(<RouterProvider router={rooter} />);
