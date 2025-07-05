import { ThemeProvider } from "@/hooks/use-theme"
import { AppRoutes } from "@/routes/route"
import { HelmetProvider } from "react-helmet-async"
import { store } from "./store/store"
import { Provider } from "react-redux"
 
export function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AppRoutes />
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  )
}