import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RootLayout from "./routes/layout";
import RootIndexPage from "./routes/page";
import SignUp from "./routes/SignUp/SignUp";
import SignIn from "./routes/SignIn/SignIn";
import { useSelector } from "react-redux";
import type { RootState } from "./Store/store";

function App() {
  const user = useSelector((state: RootState) => state.auth.value);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<RootIndexPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/signin"
            element={user ? <Navigate to="/" /> : <SignIn />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
