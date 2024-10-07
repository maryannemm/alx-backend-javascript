// 4-update_grade_by_city.js
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)  // Filter students by the specified city
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,  // Spread operator to keep the existing properties
        grade: gradeObj ? gradeObj.grade : 'N/A',  // Assign the grade if found, otherwise 'N/A'
      };
    });
}

