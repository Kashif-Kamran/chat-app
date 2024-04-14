import { ThemeProvider } from "./theme/ThemeProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./utils/routes";
import { Provider } from "react-redux";
import { TooltipProvider } from "./components/ui/tooltip";
import store from "./store";
function App() {
  const router = createBrowserRouter(routes);
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TooltipProvider>
          <RouterProvider router={router} />
        </TooltipProvider>
      </ThemeProvider>
    </Provider>
  );
}
export default App;
