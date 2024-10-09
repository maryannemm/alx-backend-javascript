// task_0/js/main.ts

// Step 1: Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Step 2: Create two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Step 3: Create an array of students
const studentsList: Student[] = [student1, student2];

// Step 4: Render the student data in a table
function renderStudentsTable(students: Student[]): void {
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    
    const headerFirstName = headerRow.insertCell();
    headerFirstName.textContent = "First Name";
    
    const headerLocation = headerRow.insertCell();
    headerLocation.textContent = "Location";

    students.forEach(student => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell();
        firstNameCell.textContent = student.firstName;
        
        const locationCell = row.insertCell();
        locationCell.textContent = student.location;
    });

    document.body.appendChild(table);
}

// Call the function to render the table
renderStudentsTable(studentsList);

