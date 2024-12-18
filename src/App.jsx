import { useState } from "react";
import createRoutes from "./routes/Routes";
import { RouterProvider } from "react-router-dom";

const App = () => {ß
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const router = createRoutes(isLoggedIn, loginHandler);
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};

export default App;
