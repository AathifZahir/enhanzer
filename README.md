# Employee Management System

This project is an Employee Management System that consists of a **backend** API and a **frontend** Angular application. The backend is built using **ASP.NET Core** and **Entity Framework Core** with MySQL, while the frontend is developed with **Angular**.

## Project Structure

The project is structured into two main directories:

### Backend (ASP.NET Core API)
- **Controllers**: Contains controllers that handle API requests for employees.
  - `EmployeesController.cs`: Manages employee data, including CRUD operations (Create, Read, Update, Delete).
  
- **Data**: Contains data access logic for the application.
  - `ApplicationDbContext.cs`: Defines the database context for the Employee model using Entity Framework Core.
  
- **Models**: Contains the models for the application.
  - `Employee.cs`: Represents the employee entity with properties like `FirstName`, `LastName`, `Email`, `Department`, etc.
  
- **Program.cs**: Configures services and middleware for the application, including database connection and CORS settings.

### Frontend (Angular Application)
- **App Module**: Contains the main app component and routing configuration.
  - `home.component.ts`: Displays the list of employees and handles pagination and modal interactions for employee management.
  - `home.component.html`: Contains the HTML structure for the home page, including a sidebar and table for displaying employee data.
  - `home.component.spec.ts`: Test file for the home component.
  - `employee.service.ts`: Provides methods to interact with the backend API for fetching and managing employee data.
  - `app.config.ts`: Configuration file for application-wide settings.
  
- **Main.ts and Index.html**: The entry point of the Angular application.

## Features

- **CRUD Operations**: Allows the creation, reading, updating, and deletion of employee data.
- **Pagination**: Employee data is fetched with pagination to handle large datasets.
- **Bulk Insertion**: Supports bulk uploading of employee data via a POST API endpoint.
- **Responsive UI**: The frontend provides an easy-to-use UI for viewing and editing employee information.
- **Edit Modal**: Allows editing employee details directly within a modal window.

## Technologies Used

### Backend
- **ASP.NET Core**: A cross-platform framework for building web APIs.
- **Entity Framework Core**: ORM for interacting with a MySQL database.
- **MySQL**: Database for storing employee data.

### Frontend
- **Angular**: Framework for building the single-page frontend application.
- **Bootstrap/FontAwesome**: For UI components and icons.
- **TypeScript**: Superset of JavaScript for better tooling and type safety.

## Setup Instructions

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/employee-management-system.git
   ```

2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Install dependencies and set up the database:
   - Make sure you have **MySQL** installed and running.
   - Update the connection string in `appsettings.json` to match your MySQL database configuration.

4. Run the application:
   ```bash
   dotnet run
   ```

5. The API will be running at `https://localhost:5001`. You can access it through Swagger UI or directly through the provided endpoints.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the Angular application:
   ```bash
   ng serve
   ```

4. The frontend application will be available at `http://localhost:4200`.

## API Endpoints

### Employee Endpoints

- **GET /api/employees**: Retrieves a list of employees with pagination support.
  - Query Parameters: `page` (default: 1), `pageSize` (default: 10)

- **GET /api/employees/{id}**: Retrieves a specific employee by their ID.

- **POST /api/employees**: Creates a new employee record.

- **POST /api/employees/bulk**: Adds multiple employees in bulk.

- **PUT /api/employees/{id}**: Updates an existing employee record.

- **DELETE /api/employees/{id}**: Deletes an employee by their ID.

## Running Tests

The frontend uses **Jasmine** and **Karma** for unit testing. To run tests:

1. In the frontend directory, run:
   ```bash
   ng test
   ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
