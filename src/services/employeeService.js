export const getAllEmplyoees = async () => {
  const response = await fetch('http://localhost:8088/employees?_expand=user');
  const employees = await response.json();

  return employees;
};

export const getEmployeeById = async (userId) => {
  const response = await fetch(
    `http://localhost:8088/employees?id=${userId}&_expand=user`
  );
  const employee = await response.json();
  return employee;
};
