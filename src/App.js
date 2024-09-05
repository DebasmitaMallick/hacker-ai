import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CreateChallenge from './pages/CreateChallenge';
import HomePage from "./pages/Home";
import RootLayout from './pages/Root';
import HackathonDetail from './pages/HackathonDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, element: <HomePage />
      },
      {
        path: 'createChallenge',
        element: <CreateChallenge />
      },
      {
        path: 'details',
        element: <HackathonDetail />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
