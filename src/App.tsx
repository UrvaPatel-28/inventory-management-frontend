import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RootLayout from "./routes/layout";
import RootIndexPage from "./routes/page";
import SignUp from "./routes/SignUp/SignUp";
import SignIn from "./routes/SignIn/SignIn";
import { useSelector } from "react-redux";
import type { RootState } from "./Store/store";
import AddMachineForm from "./routes/procurement/component/add-machine-form";
import ImportMachine from "./routes/procurement/component/import-machine.form";
import ImportRawMaterialForm from "./routes/procurement/component/import-rawmaterial.form";
import AddProductForm from "./routes/manufacturing/component/add-product-form";
import ManufactureProductForm from "./routes/manufacturing/component/manufacture-product-form";
import AddSales from "./routes/sales/components/add-sales.form";
import NotFoundPage from "./routes/__404/page";

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
              <Route path="/machine" element={<AddMachineForm />} />
              <Route path="/machine-imports" element={<ImportMachine />} />
              <Route
                path="/raw-material-imports"
                element={<ImportRawMaterialForm />}
              />

              {/* MANUFACTURING */}
              <Route path="/products" element={<AddProductForm />} />
              <Route
                path="/product-manufacturing"
                element={<ManufactureProductForm />}
              />

              {/* SALES */}
              <Route path="/sales" element={<AddSales />} />

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
