import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addEmployee } from "../features/employee/employeeSlice";
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const EmployeeAdd = () => {
  const { employees } = useSelector((state) => state.employee);

  const [formData, setFormData] = useState({
    empid: "",
    title: {value: "Mr."},
    fullname: "",
    email: "",
    dob: "",
    doj: "",
    address: "",
    phone: "",
    city: "",
    state: "",
    pincode: "",
    panNo: "",
    panImage: "",
  });

  const { empid, title, fullname, email, dob, doj, address, phone, city, state, pincode, panNo, panImage } = formData;

  console.log(formData);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      empid,
      title,
      fullname,
      email,
      dob,
      doj,
      address,
      phone,
      city,
      state,
      pincode,
      panNo,
      panImage,
    }

    dispatch(addEmployee(userData));

  }

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
        <Link to="/"><FaArrowLeft /> Back to Dashboard</Link>
        <div className="page__heading" >
          <h1>Add New<br />Employee</h1>
        </div>
    </div>
    <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="empid">Employee ID</label>
            <input type="text" className="form-control" id="empid" name="empid" placeholder="Enter employee id" onChange={onChange} />
          </div>
          <div className="form-group">
          <label htmlFor="fullname">Title</label>
          <select className="form-control" id="title" name="title" value={formData.title.value} onChange={onChange}>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Miss.">Miss.</option>
          </select>
          </div>

          <div className="form-group">
            <label htmlFor="fullname">Name of the Employee</label>
            <input type="text" className="form-control" id="fullname" name="fullname" placeholder="Enter employee name" onChange={onChange} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Employee Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Enter employee email" onChange={onChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" className="form-control" id="dob" name="dob" onChange={onChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="doj">Date of Joining</label>
            <input type="date" className="form-control" id="doj" name="doj" onChange={onChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" id="address" name="address" placeholder="Enter address of employee" onChange={onChange} />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone No.</label>
            <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter phone no. of employee" onChange={onChange} />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" className="form-control" id="city" name="city" placeholder="Enter city of the employee" onChange={onChange} />
          </div>

          <div className="form-group">
            <label htmlFor="state">State</label>
            <input type="text" className="form-control" id="state" name="state" placeholder="Enter state of the employee" onChange={onChange} />
          </div>

          <div className="form-group">
            <label htmlFor="pincode">Pincode</label>
            <input type="number" className="form-control" id="pincode" name="pincode" placeholder="Enter pincode of the employee" onChange={onChange} />
          </div>

          <div className="form-group">
            <label htmlFor="panNo">Pan No.</label>
            <input type="text" className="form-control" id="panNo" name="panNo" placeholder="Enter Pan No. of the employee" onChange={onChange} />
          </div>

          <div className="form-group">
            <label htmlFor="panImage">Pan Card Image</label>
            <input type="text" className="form-control" id="panImage" name="panImage" placeholder="Paste image url" onChange={onChange} />
          </div>

          <div className="form-group">
          <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>

      <div className="table__container">
        {employees.length > 0 ? (
          <table className="table" cellPadding={5} cellSpacing={30}>
            <thead>
              <tr>
                <th>Emp ID</th>
                {/* <th>Title</th> */}
                <th>Name</th>
                <th>Email</th>
                {/* <th>Date of Birth</th> */}
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
                  {/* <td>{employee.dob}</td> */}
                  {/* <td>{employee.doj}</td> */}
                  <td>{employee.address}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.city}</td>
                  <td>{employee.state}</td>
                  <td>{employee.pincode}</td>
                  <td>{employee.panNo}</td>
                  <td><img src={employee.panImage} alt="panCard" style={{ height: 50 }} /></td>
                  <td>
                    <button className="btn-secondary btn-edit" style={{ fontSize: '12px' }}><FiEdit /></button>
                    <button className="btn-danger btn-delete" style={{ fontSize: '12px' }}><RiDeleteBin6Line /></button>
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

export default EmployeeAdd