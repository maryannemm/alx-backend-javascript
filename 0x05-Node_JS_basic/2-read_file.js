const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const lines = data.trim().split('\n').slice(1);
        const students = lines.map(line => line.split(','));

        const fields = {};
        students.forEach(([firstName, , , field]) => {
            if (!fields[field]) fields[field] = [];
            fields[field].push(firstName);
        });

        console.log(`Number of students: ${students.length}`);
        for (const [field, names] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;

