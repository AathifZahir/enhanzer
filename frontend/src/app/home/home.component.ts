import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],  // Include FormsModule
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employees: Employee[] = [];
  employee: Employee | null = null; // Change to nullable to handle undefined/null
  isModalOpen: boolean = false;
  isSaving: boolean = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }

  openEditModal(employee: Employee): void {
    this.employee = { ...employee }; // Create a copy of the employee data
    setTimeout(() => {
      this.isModalOpen = true; // Open the modal
    }, 0);
    console.log(this.employee);
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  onSave(): void {
    if (this.employee) {  // Ensure this.employee is not null or undefined
      this.isSaving = true;
  
      // Call the updateEmployee method from the EmployeeService to update the employee in the database
      this.employeeService.updateEmployee(this.employee).subscribe(
        (updatedEmployee) => {
          // If update is successful, refetch the employees from the server
          this.loadEmployees(); // Refresh the employee list from the server
  
          this.isSaving = false;  // Reset the saving state
          this.closeModal();  // Close the modal after saving
        },
        (error) => {
          console.error('Error updating employee:', error);
          this.isSaving = false;  // Reset the saving state on error
        }
      );
    } else {
      console.error("No employee data to save");
    }
  }
  
  
  
  
}
