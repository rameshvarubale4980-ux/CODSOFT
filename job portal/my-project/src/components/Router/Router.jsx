import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/home";
import About from "../../pages/About"; // Add this import

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> }, // Add comma here
            { path: "/about", element: <About /> }
        ]
    },
]);
export default router;