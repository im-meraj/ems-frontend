import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import DepartmentsTable from './pages/Department/DepartmentsTable';
import DepartmentAdd from './pages/Department/DepartmentAdd';
import EmployeesTable from './pages/Employee/EmployeesTable';
import EmployeeAdd from './pages/EmployeeAdd';
import EmployeeDashboard from './pages/EmployeeDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import DepartmentEdit from './pages/Department/DepartmentEdit';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<EmployeeDashboard />} />
            <Route path="/addEmployee" element={<EmployeeAdd />} />
            <Route path="/showEmployees" element={<EmployeesTable />} />
            <Route path="/addDepartment" element={<DepartmentAdd />} />
            <Route path="/showDepartments" element={<DepartmentsTable />} />
            <Route path="/editDepartment/:id" element={<DepartmentEdit />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
