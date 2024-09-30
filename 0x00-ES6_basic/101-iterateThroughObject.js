// 101-iterateThroughObject.js

export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = []; // Initialize an array to hold employee names

  // Iterate through the reportWithIterator
  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Add each employee name to the array
  }

  // Join the names with ' | ' and return the resulting string
  return employeeNames.join(' | ');
}

