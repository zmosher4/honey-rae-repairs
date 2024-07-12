import { useEffect, useState } from 'react';
import { getAllEmplyoees } from '../../services/employeeService';
import { assingTicket, updateTicket } from '../../services/ticketService';

export const Ticket = ({ ticket, currentUser, fetchTickets }) => {
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});
  useEffect(() => {
    const fetchEmplyoees = async () => {
      const employeesArr = await getAllEmplyoees();
      setEmployees(employeesArr);
    };
    fetchEmplyoees();
  }, []);

  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, ticket]);

  const handleClaim = async () => {
    const currentEmployee = employees.find(
      (employee) => employee.userId === currentUser.id
    );
    const newEmployeeTicket = {
      employeeId: currentEmployee.id,
      serviceTicketId: ticket.id,
    };
    await assingTicket(newEmployeeTicket);
    fetchTickets();
  };

  const handleClose = async () => {
    const closedTicket = {
      ...ticket,
      dateCompleted: new Date(),
    };
    await updateTicket(closedTicket);
    fetchTickets();
  };

  return (
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">assignee</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : 'None'}
          </div>
        </div>
        <div>
          <div className="ticket-info">emergency</div>
          <div>{ticket.emergency ? 'yes' : 'no'}</div>
        </div>
        <div className="btn-container">
          {currentUser.isStaff && !assignedEmployee ? (
            <button className="btn btn-secondary" onClick={handleClaim}>
              Claim
            </button>
          ) : (
            ''
          )}
          {assignedEmployee?.userId === currentUser.id &&
          !ticket.dateCompleted ? (
            <button className="btn btn-warning" onClick={handleClose}>
              Close
            </button>
          ) : (
            ''
          )}
        </div>
      </footer>
    </section>
  );
};
