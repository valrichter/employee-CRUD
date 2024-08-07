using System;
using System.Collections.Generic;

namespace net_employee_CRUD.Models;

public partial class Employee
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public int Salary { get; set; }

    public DateTime CreatedAt { get; set; }
}
