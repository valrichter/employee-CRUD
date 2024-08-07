import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Lista } from "./components/Lista";
import { NuevoEmpleado } from "./components/NuevoEmpleado";
import { EditarEmpleado } from "./components/EditarEmpleado";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/new-employee" element={<NuevoEmpleado />} />
        <Route path="/update-employee/:id" element={<EditarEmpleado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
