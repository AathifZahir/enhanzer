using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;
using Backend.Models;

[Route("api/[controller]")]
[ApiController]
public class EmployeesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public EmployeesController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/employees
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
    {

        var totalEmployees = await _context.Employees.CountAsync();


        var employees = await _context.Employees
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();


        var response = new
        {
            TotalEmployees = totalEmployees,
            Page = page,
            PageSize = pageSize,
            TotalPages = (int)Math.Ceiling((double)totalEmployees / pageSize),
            Employees = employees
        };

        return Ok(response);
    }

    // GET: api/employees/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Employee>> GetEmployee(int id)
    {
        var employee = await _context.Employees.FindAsync(id);

        if (employee == null)
        {
            return NotFound();
        }

        return employee;
    }

    // POST: api/employees
    [HttpPost]
    public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
    {
        _context.Employees.Add(employee);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetEmployee), new { id = employee.Id }, employee);
    }

    // POST: api/employees/bulk
    [HttpPost("bulk")]
    public async Task<ActionResult> PostEmployeesBulk(List<Employee> employees)
    {
        if (employees == null || employees.Count == 0)
        {
            return BadRequest("The employee list is empty or invalid.");
        }

        await _context.Employees.AddRangeAsync(employees);
        await _context.SaveChangesAsync();

        return Ok(new { message = $"{employees.Count} employees were successfully added." });
    }

    // PUT: api/employees/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutEmployee(int id, Employee employee)
    {
        if (id != employee.Id)
        {
            return BadRequest();
        }

        _context.Entry(employee).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: api/employees/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteEmployee(int id)
    {
        var employee = await _context.Employees.FindAsync(id);
        if (employee == null)
        {
            return NotFound();
        }

        _context.Employees.Remove(employee);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
