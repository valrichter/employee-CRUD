import { ChangeEvent, useState } from "react";
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
  name: "",
  email: "",
  salary: 0,
};

export function NuevoEmpleado() {
  const [empleado, setEmpleado] = useState<IEmployee>(initalEmpleado);
  const navigate = useNavigate();

  const inputChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    console.log(inputName, ":", inputValue);

    setEmpleado({ ...empleado, [inputName]: inputValue });
  };

  const save = async () => {
    const response = await fetch(`${appsettings.apiUrl}employee/new`, {
      method: "POST",
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
          <h4>New Employee</h4>
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
