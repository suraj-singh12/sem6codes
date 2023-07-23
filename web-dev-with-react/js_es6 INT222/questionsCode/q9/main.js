const mongoose = require('mongoose');
const studentSchema = require('./studentSchema');
const Student = mongoose.model('Student', studentSchema);

async function connectToDatabase() {
  mongoose.connect('mongodb://127.0.0.1/mydb');
  db = mongoose.connection;
  db.on('error', console.error.bind(console, 'error connection to db'));
  db.once('open', () => {
    console.log('Successfully Connected to the DB');
  });
  return db;
}


async function createDatabaseAndCollection(db) {
  try {
    await db;
    // Create the students collection
    await Student.init();
    console.log('Students collection created');
  } catch (err) {
    console.error('Error creating collection:', err);
  }
}


async function insertStudentData(db) {
  try {
    await db;
    const studentsData = [
      {
        SID: '1001',
        name: 'John Doe',
        subject: 'Math',
        branch: 'Science',
        marks: 85,
      },
      {
        SID: '1002',
        name: 'Jane Smith',
        subject: 'History',
        branch: 'Arts',
        marks: 92,
      },
    ];
    const result = await Student.insertMany(studentsData);
    console.log(`${result.length} documents inserted`);
  } catch (err) {
    console.error('Error inserting data:', err);
  }
}


async function displayStudentData(db) {
  const studentsCollection = db.collection('students');
  try {
    const cursor = studentsCollection.find().sort({ marks: 1 }); // Sorting by marks in ascending order
    const sortedStudents = await cursor.toArray();

    console.log('Sorted Student Data (Ascending Order - Marks):');
    sortedStudents.forEach((student) => {
      console.log(student);
    });
  } catch (err) {
    console.error('Error displaying data:', err);
  }
}

async function main() {
  const db = await connectToDatabase();
  await createDatabaseAndCollection(db);
  await insertStudentData(db);
  await displayStudentData(db);
  await db.close();
}

main().catch((err) => {
  console.error('An error occurred:', err);
});
