import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./routes/layout";
import RootIndexPage from "./routes/page";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={ <RootLayout /> }>
          <Route index element={ <RootIndexPage /> }/>
          <Route path="sidebar" element={ <Sidebar /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
