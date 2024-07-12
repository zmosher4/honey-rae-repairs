export const getAllTickets = async () => {
  const response = await fetch(
    'http://localhost:8088/serviceTickets?_embed=employeeTickets'
  );
  const allTickets = await response.json();
  return allTickets;
};

export const assingTicket = async (employeeTicket) => {
  return await fetch('http://localhost:8088/employeeTickets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employeeTicket),
  });
};

export const updateTicket = async (ticket) => {
  return await fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ticket),
  });
};
