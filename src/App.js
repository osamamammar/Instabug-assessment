import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, NotFoundPage, WelcomePage } from "./screens";
import "./sass/styles.scss";
import { PublicRoute } from "./Routes/PublicRoute";
import { PrivateRoute } from "./Routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route
          path="/login"
          element={
            <PublicRoute restricted={true}>
              <LoginPage />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/welcome"
          element={
            <PrivateRoute>
              <WelcomePage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/404"
          element={
            <PublicRoute restricted={false}>
              <NotFoundPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Navigate replace to="/404" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
