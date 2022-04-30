import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUserTie } from "react-icons/fa";
// import { AiFillEdit } from "react-icons/ai";
import { MdPersonAdd } from "react-icons/md";

const Dashboard = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className="container">
      <header><h1>Welcome {user ? user.fullname : ""}<br />Admin Dashboard</h1></header>
      <div className="dashboard__container">
        <ul className="menu__list">
          <h3 className="menu__heading">Employee</h3>
          <li className="menu__list-item"><Link to="/addEmployee"><MdPersonAdd /> Add Employee</Link></li>
          {/* <li className="menu__list-item"><Link to="/editEmployee"><AiFillEdit /> Edit Employee</Link></li> */}
          <li className="menu__list-item"><Link to="/showEmployees"><FaUserTie /> Display all Employees</Link></li>
        </ul>

        <ul className="menu__list">
          <h3 className="menu__heading">Department</h3>
          <li className="menu__list-item"><Link to="/addDepartment"><MdPersonAdd /> Add Department</Link></li>
          {/* <li className="menu__list-item"><Link to="/editDepartment"><AiFillEdit /> Edit Department</Link></li> */}
          <li className="menu__list-item"><Link to="/showDepartments"><FaUserTie /> Display all Departments</Link></li>
        </ul>

        <ul className="menu__list">
          <h3 className="menu__heading">Designation</h3>
          <li className="menu__list-item"><Link to="/addDesignation"><MdPersonAdd /> Add Designation</Link></li>
          {/* <li className="menu__list-item"><Link to="/editDesignation"><AiFillEdit /> Edit Designation</Link></li> */}
          <li className="menu__list-item"><Link to="/showDesignations"><FaUserTie /> Display all Designations</Link></li>
        </ul>

      </div>
    </div>
  )
}

export default Dashboard