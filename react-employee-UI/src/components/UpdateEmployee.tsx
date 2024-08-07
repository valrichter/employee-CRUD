import { ChangeEvent, useEffect, useState } from "react";
import { appsettings } from "../setting/appsetings";
import { useNavigate, useParams } from "react-router-dom";
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
  const { id } = useParams<{ id: string }>();
  const [empleado, setEmpleado] = useState<IEmployee>(initalEmpleado);
  const navigate = useNavigate();

  useEffect(() => {
    const getEmployee = async () => {
      const response = await fetch(`${appsettings.apiUrl}employee/${id}`);

      if (response.ok) {
        const data = await response.json();
        setEmpleado(data);
      }
    };

    getEmployee();
  }, [id]);

  const inputChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setEmpleado({ ...empleado, [inputName]: inputValue });
  };

  const save = async () => {
    const response = await fetch(`${appsettings.apiUrl}employee/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(empleado),
    });

    if (response.ok) {
      navigate("/");
    } else {
      Swal.fire({
        title: "Error!",
        text: "The employee was not updated!",
        icon: "warning",
      });
    }
  };

  const back = () => {
    navigate("/");
  };

  return (
    <Container>
      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          <h4>Update Employee</h4>
          <hr />
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                onChange={inputChangeValue}
                value={empleado.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                onChange={inputChangeValue}
                value={empleado.email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="salary">Salary</Label>
              <Input
                type="number"
                name="salary"
                onChange={inputChangeValue}
                value={empleado.salary}
              />
            </FormGroup>
          </Form>
          <Button color="primary" className="me-4" onClick={save}>
            Save
          </Button>
          <Button color="secondary" onClick={back}>
            Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
