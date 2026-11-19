import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Footer from "./components/Footer";
import Users from "./Pages/Users";
import ErrorPage from "./Pages/ErrorPage";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          <Outlet />
          <Footer />
        </>
      ),
      
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/users',
          element: <Users />,
          loader: async() => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            return res.json(); //Devuelve la respuesta en modo JSON.
          }
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/products/:id',
          element: <ProductDetail />
        }
      ],
      errorElement: <ErrorPage/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
