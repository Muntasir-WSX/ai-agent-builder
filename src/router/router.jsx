import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../components/layouts/MainLayout/MainLayout';
import BotLayout from '../components/layouts/BotLayout/BotLayout';
import Builder from '../pages/Builder/Builder';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // এখানে Nav + Footer থাকবে
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/builder",
    element: <BotLayout />, // এখানে কোনো Nav/Footer নেই, শুধু বিল্ডার
    children: [
      {
        path: "/builder",
        element: <Builder />,
      },
    ],
  },
]);

export default router;