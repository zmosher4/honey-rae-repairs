import './App.css';
import { CustomerList } from './components/customers/CustomersList';
import { Employees } from './components/Employees/Employees';
import { Routes, Route, Outlet } from 'react-router-dom';
import { TicketList } from './components/tickets/TicketList';
import { NavBar } from './components/nav/NavBar';
import { Welcome } from './components/welcome/Welcome';
import { CustomerDetails } from './components/customers/CustomerDetails';
import { EmployeeDetails } from './components/Employees/EmployeeDetails';
export const App = () => {
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
