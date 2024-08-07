import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { List } from "./components/Lista";
import { NuevoEmpleado } from "./components/NewEmployee";
import { UpdateEmployee } from "./components/UpdateEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/new-employee" element={<NuevoEmpleado />} />
        <Route path="/update-employee/:id" element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
