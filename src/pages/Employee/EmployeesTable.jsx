import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner';
import EmployeeTableComponent from '../../components/EmployeeTableComponent';
import { reset, getEmployees } from '../../features/employee/employeeSlice';
import { FaArrowLeft } from 'react-icons/fa';

const EmployeesTable = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { employees, isLoading, isError, isSuccess, message } = useSelector((state) => state.employee);

    useEffect(() => {
        if (isError) {
            return console.log(message);
        }

        if (!user) {
            navigate('/login');
        }

        dispatch(getEmployees());

        // return () => {
        //     dispatch(reset());
        // }
    }, [user, navigate, isError, message, dispatch]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Link to="/"><FaArrowLeft /> Back to Dashboard</Link>
                    <div className="page__heading">
                        <h1>Employees<br />Details Table</h1>
                    </div>
                </div>
                <EmployeeTableComponent />
            </div>
        </>
    )
}

export default EmployeesTable