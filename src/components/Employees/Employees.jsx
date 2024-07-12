import { useEffect, useState } from 'react';
import './Employees.css';
import { getAllEmplyoees } from '../../services/employeeService';
import { User } from '../users/User';
import { Link } from 'react-router-dom';

export const Employees = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const employeeArr = await getAllEmplyoees();
    setEmployees(employeeArr);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="employees">
      {employees.map((employee) => {
        return (
          <Link key={employee.id} to={`/employees/${employee.userId}`}>
            <User user={employee.user} />
          </Link>
        );
      })}
    </div>
  );
};
