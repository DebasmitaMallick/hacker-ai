import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CreateChallenge from './pages/CreateChallenge';
import ExploreChallenges from './pages/ExploreChallenges';
import HomePage from "./pages/Home";
import RootLayout from './pages/Root';

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
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
