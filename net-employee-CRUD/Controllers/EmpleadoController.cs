using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using net_employee_CRUD.Models;

namespace net_employee_CRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeDataContext dbContext;
        public EmployeeController(EmployeeDataContext _dbContext)
        {
            dbContext = _dbContext;
        }

        [HttpGet]
        [Route("all")]
        public async Task<IActionResult> GetAllEmployee()
        {
            var listEmployee = await dbContext.Employees.ToListAsync();
            return StatusCode(StatusCodes.Status200OK, listEmployee);
        }

        [HttpGet]
        [Route("employee/{id:int}")]
        public async Task<IActionResult> GetEmployee(int id)
        {
            var employee = await dbContext.Employees.FirstOrDefaultAsync(e => e.Id == id);
            return StatusCode(StatusCodes.Status200OK, employee);
        }

        [HttpPost]
        [Route("new")]
        public async Task<IActionResult> newEmployee([FromBody]Employee employee)
        {
            employee.CreatedAt = DateTime.Now;
            await dbContext.Employees.AddAsync(employee);
            await dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, new {mensaje = employee});
        }

        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> updateEmployee([FromBody] Employee employee)
        {
            dbContext.Employees.Update(employee);
            await dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, new { mensaje = employee });
        }

        [HttpDelete]
        [Route("delete/{id:int}")]
        public async Task<IActionResult> deleteEmployee(int id)
        {
            var employee = await dbContext.Employees.FirstOrDefaultAsync(e => e.Id == id);
            dbContext.Employees.Remove(employee);
            return StatusCode(StatusCodes.Status200OK, new { mensaje = "Deleted: " + employee });
        }

    }
}