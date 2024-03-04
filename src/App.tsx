import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./routes/layout";
import RootIndexPage from "./routes/page";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={ <RootLayout /> }>
          <Route index element={ <RootIndexPage /> }/>
          <Route path="/register" element={ <Register /> }/>
          <Route path="/login" element={ <Login /> }/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
