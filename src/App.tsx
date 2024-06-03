import { BrowserRouter } from "react-router-dom";

import { SystemProvider } from "./contexts/SystemContext/SystemProvider";
import { ErrorBoundary } from "react-error-boundary";
import FallbackPage from "./components/FallbackPage/FallbackPage";
import RouterProvider from "./router/router";
import Header from "./components/Elements/Header/Header";
import Footer from "./components/Elements/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<FallbackPage />}>
        <SystemProvider>
          <Header />
          <RouterProvider />
          <Footer />
        </SystemProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
export default App;
