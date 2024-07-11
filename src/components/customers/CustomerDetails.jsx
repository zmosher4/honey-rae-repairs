import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerByUserId } from '../../services/customerService';
import './Customers.css';

export const CustomerDetails = () => {
  const [customer, setCustomer] = useState({});
  const { customerId } = useParams();

  const fetchCustomer = async () => {
    const fetchedCustomer = await getCustomerByUserId(customerId);
    setCustomer(fetchedCustomer[0]);
  };

  useEffect(() => {
    fetchCustomer();
  }, []);

  return (
    <section className="customer">
      <header className="customer-header">{customer.user?.fullName}</header>
      <div>
        <span className="customer-info">Email: </span>
        {customer.user?.email}
      </div>
      <div>
        <span className="customer-info">Address: </span>
        {customer.address}
      </div>
      <div>
        <span className="customer-info">Phone Number: </span>
        {customer.phoneNumber}
      </div>
    </section>
  );
};
