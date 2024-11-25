const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

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
            resolve();
        });
    });
}

module.exports = countStudents;

