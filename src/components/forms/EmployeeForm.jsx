import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import {
  getEmployeeById,
  updateEmployee,
} from '../../services/employeeService';

export const EmployeeForm = ({ currentUser }) => {
  const [employee, setEmployee] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAndSetEmployee = async () => {
      const data = await getEmployeeById(currentUser.id);
      const employeeObj = data[0];
      setEmployee(employeeObj);
    };

    fetchAndSetEmployee();
  }, [currentUser]);

  const handleSave = async (e) => {
    e.preventDefault();
    console.log('clicked');

    const editedEmploye = {
      id: employee.id,
      specialty: employee.specialty,
      rate: employee.rate,
      userId: employee.userId,
    };

    await updateEmployee(editedEmploye);
    navigate(`/employees/${currentUser.id}`);
  };
  const handleInputChange = (event) => {
    const stateCopy = { ...employee };
    stateCopy[event.target.name] = event.target.value;
    setEmployee(stateCopy);
  };

  return (
    <form className="profile">
      <h2>Update Profile</h2>
      <fieldset>
        <div className="form-group">
          <label>Specialty: </label>
          <input
            type="text"
            value={employee.specialty ? employee.specialty : ''}
            name="specialty"
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Hourly Rate: </label>
          <input
            type="number"
            name="rate"
            value={employee.rate ? employee.rate : 0}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button onClick={handleSave} className="form-btn btn-primary">
            Save Profile
          </button>
        </div>
      </fieldset>
    </form>
  );
};
