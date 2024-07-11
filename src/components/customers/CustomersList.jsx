import { useEffect, useState } from 'react';
import { getNonStaffUsers } from '../../services/userService';
import './Customers.css';
import { User } from '../users/User';
import { Link } from 'react-router-dom';

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const customerArray = await getNonStaffUsers();
      setCustomers(customerArray);
    };
    fetchCustomers();
  }, []);
  return (
    <div className="customers">
      {customers.map((customer) => {
        return (
          <Link key={customer.id} to={`/customers/${customer.id}`}>
            <User user={customer} />
          </Link>
        );
      })}
    </div>
  );
};
