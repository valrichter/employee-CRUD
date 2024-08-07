using System;
using System.Collections.Generic;

namespace net_employee_CRUD.Models;

public partial class Employee
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Email { get; set; }

    public int? Salary { get; set; }

    public DateTime? CreatedAt { get; set; }
}
