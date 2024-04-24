import { FC } from "react";
import Header from "./components/common/header";
import { Routes, Route } from "react-router-dom";

import StartPage from "./components/pages/start-page";
import LoginPage from "./components/pages/login-page";
import SignUpPage from "./components/pages/sign-up-page";
import NotFoundPage from "./components/pages/not-found-page";

const App: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
