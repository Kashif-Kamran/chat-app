import { ThemeProvider } from "./theme/ThemeProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./utils/routes";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  const router = createBrowserRouter(routes);
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}
export default App;
