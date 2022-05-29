import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, NotFoundPage, WelcomePage } from "./screens";
import "./sass/styles.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/welcome" element={<WelcomePage />}></Route>
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
