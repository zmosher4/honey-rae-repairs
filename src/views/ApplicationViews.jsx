import { Outlet, Route, Routes, useSearchParams } from 'react-router-dom';
import { TicketList } from '../components/tickets/TicketList';
import { Welcome } from '../components/welcome/Welcome';
import { Employees } from '../components/Employees/Employees';
import { EmployeeDetails } from '../components/Employees/EmployeeDetails';
import { CustomerList } from '../components/customers/CustomersList';
import { CustomerDetails } from '../components/customers/CustomerDetails';
import { NavBar } from '../components/nav/NavBar';
import { useEffect, useState } from 'react';

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem('honey_user');
    const honeyUserObject = JSON.parse(localHoneyUser);
    setCurrentUser(honeyUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees">
          <Route index element={<Employees />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
