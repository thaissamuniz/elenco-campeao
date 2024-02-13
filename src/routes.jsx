import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Card from './pages/Card';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/jogador/:name",
        element: <Card />
    },
    {
        path: "*",
        element: <App />
    }
])


export default router;