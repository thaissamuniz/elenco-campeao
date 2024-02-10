import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Card from './pages/Card';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/card/:index",
        element: <Card />
    }
])


export default router;