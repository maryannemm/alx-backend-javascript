// task_1/js/main.ts

// Step 1: Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Optional property
    location: string;
    [key: string]: any; // This allows any additional property to be added dynamically
}

// Step 2: Create a teacher object
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false, // Extra property
};

console.log(teacher3);

// Expected output:
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
// Step 2: Define the Directors interface that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number; // Additional attribute required for Directors
}

// Step 3: Create a director object
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
    };
  console.log(director1);

// Expected output:
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
// Step 1: Define the interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Step 2: Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Step 3: Example usage
console.log(printTeacher("John", "Doe")); // Expected output: "J. Doe"
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Step 2: Define the interface for the StudentClass
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Step 3: Implement the StudentClass
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method to simulate working on homework
    workOnHomework(): string {
        return 'Currently working';
    }

    // Method to display the first name
    displayName(): string {
        return this.firstName;
    }
}

// Step 4: Example usage
const student = new StudentClass('John', 'Doe');
console.log(student.displayName()); // Expected output: "John"
console.log(student.workOnHomework()); // Expected output: "Currently working"
