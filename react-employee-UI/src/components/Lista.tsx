import { useEffect, useState } from "react";
import { appsettings } from "../setting/appsetings";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { IEmployee } from "../Interfaces/IEmployee";
import { Container, Row, Col, Table, Button } from "reactstrap";

export function List() {
  const [empleados, setEmpleados] = useState<IEmployee[]>([]);

  const getAllEmployee = async () => {
    const response = await fetch(`${appsettings.apiUrl}employee/all`);

    if (response.ok) {
      const data = await response.json();
      setEmpleados(data);
    }
  };

  useEffect(() => {
    getAllEmployee();
  }, []);

  const Delete = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await fetch(`${appsettings.apiUrl}employee/delete/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          await getAllEmployee();
        }
      }
    });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          <h4>Employee List</h4>
          <hr />
          <Link className="btn btn-success mb-3" to="/new-employee">
            New Employee
          </Link>
          <Table bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((e) => (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.salary}</td>
                  <td>
                    <Link
                      className="btn btn-primary me-2"
                      to={`/update-employee/${e.id}`}
                    >
                      Update
                    </Link>
                    <Button
                      color="danger"
                      onClick={() => {
                        Delete(e.id!);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
