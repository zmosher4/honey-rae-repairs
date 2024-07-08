export const getAllTickets = async () => {
  const response = await fetch('http://localhost:8088/serviceTickets');
  const allTickets = await response.json();
  return allTickets;
};
