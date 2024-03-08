import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RootLayout from "./routes/layout";
import RootIndexPage from "./routes/page";
import SignUp from "./routes/SignUp/SignUp";
import SignIn from "./routes/SignIn/SignIn";
import { useSelector } from "react-redux";
import type { RootState } from "./Store/store";
import NotFoundPage from "./routes/__404/page";
import MachinePage from "./routes/machine/page";
import MachineImportPage from "./routes/machine-imports/page";
import ImportRawMaterialPage from "./routes/raw-material-import/page";
import AddProductPage from "./routes/products/page";
import ManufactureProductPage from "./routes/products-manufacturing/page";
import AddSalesPage from "./routes/sales/page";

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
          {user ? (
            <>
              {/* PROCUREMENT */}
              <Route path="/machine" element={<MachinePage />} />
              <Route path="/machine-imports" element={<MachineImportPage />} />
              <Route
                path="/raw-material-imports"
                element={<ImportRawMaterialPage />}
              />

              {/* MANUFACTURING */}
              <Route path="/products" element={<AddProductPage />} />
              <Route
                path="/product-manufacturing"
                element={<ManufactureProductPage />}
              />

              {/* SALES */}
              <Route path="/sales" element={<AddSalesPage />} />

              {/* 404 Not Found */}
              <Route path="*" element={ <NotFoundPage /> } />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/signin" />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
