// 3-get_ids_sum.js
export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}

