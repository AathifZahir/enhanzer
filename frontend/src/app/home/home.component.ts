import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employees: Employee[] = [];
  employee: Employee | null = null; 
  isModalOpen: boolean = false;
  isSaving: boolean = false;
  page: number = 1; 
  pageSize: number = 10; 
  totalPages: number = 1; 

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  // Modify loadEmployees method to handle pagination
  loadEmployees(): void {
    this.employeeService.getEmployees(this.page, this.pageSize).subscribe(
      (data) => {
        this.employees = data.employees;  
        this.totalPages = data.totalPages; 
      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }

  // Method to go to specific page
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.page = page;
      this.loadEmployees();
    }
  }

  openEditModal(employee: Employee): void {
    this.employee = { ...employee }; 
    setTimeout(() => {
      this.isModalOpen = true; 
    }, 0);
    console.log(this.employee);
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  onSave(): void {
    if (this.employee) {  
      this.isSaving = true;
  
      // Call the updateEmployee method from the EmployeeService to update the employee in the database
      this.employeeService.updateEmployee(this.employee).subscribe(
        (updatedEmployee) => {
          
          this.loadEmployees(); 
  
          this.isSaving = false;  
          this.closeModal();  
        },
        (error) => {
          console.error('Error updating employee:', error);
          this.isSaving = false;  
        }
      );
    } else {
      console.error("No employee data to save");
    }
  }
}
