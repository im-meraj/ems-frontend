import { useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const EmployeeTableComponent = () => {
  const employees = useSelector((state) => state.employee.employees);

  
  return (
    <>
    <div className="table__container">
    {employees.length > 0 ? (
      <table className="table" cellPadding={5} cellSpacing={30}>
        <thead>
          <tr>
            <th>Emp ID</th>
            {/* <th>Title</th> */}
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            {/* <th>Date of Joining</th> */}
            <th>Address</th>
            <th>Phone No.</th>
            <th>City</th>
            <th>State</th>
            <th>Pincode</th>
            <th>PAN No.</th>
            <th>PAN Image</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.empid}</td>
              {/* <td>{employee.title}</td> */}
              <td>{employee.title + employee.fullname}</td>
              <td>{employee.email}</td>
              <td>{new Date(employee.dob).toLocaleDateString()}</td>
              {/* <td>{employee.doj}</td> */}
              <td>{employee.address}</td>
              <td>{employee.phone}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.pincode}</td>
              <td>{employee.panNo}</td>
              <td><img src={employee.panImage} alt="panCard" style={{height: 50}} /></td>
              <td>
                <button className="btn-secondary btn-edit" style={{ fontSize: '12px' }}><FiEdit/></button>
                <button className="btn-danger btn-delete" style={{ fontSize: '12px' }}><RiDeleteBin6Line/></button>
              </td>
            </tr>
          )).reverse()}
        </tbody>
      </table>
    ) : (<h3>No Employees</h3>)}
      </div>
    </>
  )
}

export default EmployeeTableComponent