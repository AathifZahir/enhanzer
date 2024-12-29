namespace Backend.Models;
public class Employee
{
    public int Id { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public required string Address { get; set; }
    public required string Mobile { get; set; }
    public required string Email { get; set; }
    public required string Department { get; set; }
    public required string Designation { get; set; }
    public DateTime Updated { get; set; }
    public required int Number { get; set; }
}
