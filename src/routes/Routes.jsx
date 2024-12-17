import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import List from "../pages/List/List";
import SinglePage from "../pages/SinglePage/SinglePage";
import Form from "../pages/Form/Form";

const createRoutes = (isLoggedIn, loginHandler) => {
  return createBrowserRouter(
    [
      {
        path: "/",
        element: isLoggedIn ? (
          <Root isLoggedIn={isLoggedIn} loginHandler={loginHandler} />
        ) : (
          <Login loginHandler={loginHandler} />
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <List />,
          },
          {
            path: "/employee/:id",
            element: <SinglePage />,
          },
          {
            path: "/new",
            element: <Form />,
          },
        ],
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );
};

export default createRoutes;
