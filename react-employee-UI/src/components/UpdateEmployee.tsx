import { ChangeEvent, useEffect, useState } from "react";
import { appsettings } from "../setting/appsetings";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { IEmployee } from "../Interfaces/IEmployee";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const initalEmpleado = {
  id: 0,
  name: "",
  email: "",
  salary: 0,
};

export function UpdateEmployee() {

  const {id} = useParams<{id: string}>();
  const [empleado, setEmpleado] = useState<IEmployee>(initalEmpleado);
  const navigate = useNavigate();

  useEffect(() => {
    const getEmployee = async () => {
      const response = await fetch(`${appsettings.apiUrl}employee/${id}`);
      const data = await response.json();
      setEmpleado(data);
    };
    getEmployee();
  }, []);

  return <h1>Componente UpdateEmployee</h1>;
}
