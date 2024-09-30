// 100-createIteratorObject.js

export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees); // Get all employee arrays
  let index = 0; // Initialize an index to track the position

  // Flatten the employee arrays into a single array
  const flattenedEmployees = employees.flat();

  // Create an iterator using a generator function
  return {
    [Symbol.iterator]: function* () {
      while (index < flattenedEmployees.length) {
        yield flattenedEmployees[index++]; // Yield each employee
      }
    },
  };
}

