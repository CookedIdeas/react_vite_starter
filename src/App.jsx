import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import Error from './pages/Error';
import Landing from './pages/Landing';
import ErrorElement from './components/1_global/ErrorElement';
// === LOADERS === //

// === ACTIONS === //

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <HomeLayout outlet={<Error />} />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        // loader: LandingLoader,
      },
      // {
      //   path: 'products',
      //   element: <Products />,
      //   errorElement: <ErrorElement />,
      //   loader: ProductsLoader,
      // },
      // {
      //   path: 'products/:id',
      //   element: <SingleProduct />,
      //   errorElement: <ErrorElement />,
      //   loader: SingleProductLoader,
      // },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
