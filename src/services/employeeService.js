export const getAllEmplyoees = async () => {
  const response = await fetch('http://localhost:8088/employees?_expand=user');
  const employees = await response.json();

  return employees;
};

export const getEmployeeById = async (userId) => {
  const response = await fetch(
    `http://localhost:8088/employees?_expand=user&_embed=employeeTickets&userId=${userId}`
  );
  const employee = await response.json();
  return employee;
};

export const updateEmployee = async (employee) => {
  return await fetch(`http://localhost:8088/employees/${employee.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  });
};
