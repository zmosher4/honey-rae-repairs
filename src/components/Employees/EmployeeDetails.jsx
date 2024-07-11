import { useEffect, useState } from 'react';
import { getEmployeeById } from '../../services/employeeService';
import { useParams } from 'react-router-dom';

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { employeeId } = useParams();

  const fetchEmployee = async () => {
    const fetchedEmployee = await getEmployeeById(employeeId);
    setEmployee(fetchedEmployee[0]);
  };
  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email: </span>
        {employee.user?.email}
      </div>
      <div>
        <span className="employee-info">Specialty: </span>
        {employee.specialty}
      </div>
      <div>
        <span className="employee-info">Hourly Rate: </span>${employee.rate}
      </div>
    </section>
  );
};
