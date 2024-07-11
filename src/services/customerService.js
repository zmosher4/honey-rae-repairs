export const getCustomerByUserId = async (userId) => {
  const response = await fetch(
    `http://localhost:8088/customers?id=${userId}&_expand=user`
  );
  const customer = await response.json();
  return customer;
};
