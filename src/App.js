import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/Home";
import RootLayout from './pages/Root';
import HackathonDetail from './pages/HackathonDetail';
import ChallengeForm from './pages/ChallengeForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, element: <HomePage />
      },
      {
        path: 'challengeForm',
        element: <ChallengeForm />
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
