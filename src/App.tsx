import { FC } from "react";
import Header from "./components/common/header";
import StartPage from "./components/pages/start-page";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/login-page";
import NotFoundPage from "./components/pages/not-found-page";

const App: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<StartPage />} />
      </Routes>
    </div>
  );
};

export default App;
