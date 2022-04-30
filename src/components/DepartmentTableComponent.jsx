import { useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from '@headlessui/react'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteDepartment, getDepartments } from "../features/department/departmentSlice";
import { useState } from "react";

const DepartmentTableComponent = () => {
    const { departments } = useSelector((state) => state.department);
    const dispatch = useDispatch();

    let [isOpen, setIsOpen] = useState(false);

    const onChange = (e) => { }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(getDepartments());

        setIsOpen(false);
    }

    return (
        <>
            <Transition
                show={isOpen}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
                    <Dialog.Panel className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Title>Edit Department Details</Dialog.Title>

                        <section className="form">
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="deptId">Department ID</label>
                                    <input type="text" className="form-control" id="deptId" name="deptId" placeholder="Enter department id" onChange={onChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">Name of the Department</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter department name" onChange={onChange} />
                                </div>


                                <div className="form-group">
                                    <button type="submit" className="btn btn-block">Submit</button>
                                    <button className="btn btn-block" onClick={() => setIsOpen(false)}>Cancel</button>
                                </div>
                            </form>
                        </section>
                    </Dialog.Panel>
                </Dialog>
            </Transition>
            <div className="table__container">
                {departments.length > 0 ? (
                    <table className="table" cellPadding={5} cellSpacing={30}>
                        <thead>
                            <tr>
                                <th>Dept ID</th>
                                <th>Department Name</th>
                                <th>Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departments.map((department, index) => (
                                <tr key={index}>
                                    <td>{department.deptId}</td>
                                    <td>{department.name}</td>
                                    <td>
                                        <button className="btn-secondary btn-edit" style={{ fontSize: '12px' }} onClick={() => setIsOpen(true)}><FiEdit /></button>
                                        <button className="btn-danger btn-delete" style={{ fontSize: '12px' }} onClick={() => {
                                            dispatch(deleteDepartment(department._id));
                                            dispatch(getDepartments());
                                        }}><RiDeleteBin6Line /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (<h3>No Departments</h3>)}
            </div>
        </>
    )
}

export default DepartmentTableComponent