// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import RootLayout from "./routes/layout";
// import RootIndexPage from "./routes/page";

import { ManufactureProductForm } from "./routes/manufacturing/component/manufacture-product-form"

function App() {
  return (
    <ManufactureProductForm />
    // <BrowserRouter> 
    //   <Routes>
    //     <Route path="/" element={ <RootLayout /> }>
    //       <Route index element={ <RootIndexPage /> }/>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
