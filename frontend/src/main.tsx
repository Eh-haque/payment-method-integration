import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import OpenLayout from "./components/layouts/OpenLayout.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import AuthLayout from "./components/layouts/AuthLayout.tsx";
import Order from "./pages/Order.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route element={<OpenLayout />}>
              <Route index element={<App />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="order" element={<Order />} />
            </Route>

            {/* <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route> */}
          </Routes>
        </BrowserRouter>
        <Toaster />
      </PersistGate>
    </Provider>
  </StrictMode>
);
