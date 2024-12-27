namespace Backend.Models;
public class Employee
{
    public int Id { get; set; }
    public required string FirstName { get; set; }  // Required property
    public required string LastName { get; set; }  // Required property
    public required string Address { get; set; }  // Required property
    public required string Mobile { get; set; }  // Required property
    public required string Email { get; set; }  // Required property
    public required string Department { get; set; }  // Required property
    public required string Designation { get; set; }  // Required property
    public DateTime Updated { get; set; }
    public required int Number { get; set; }  // Required property
}
