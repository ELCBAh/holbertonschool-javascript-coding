const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        const message = 'This is the list of our students\n';
        response.status(200).send(message + data.join('\n'));
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    readDatabase(process.argv[2])
      .then((data) => {
        const message = `List: ${data.filter((student) => student.includes(major)).join(', ')}`;
        response.status(200).send(message);
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }
}

export default StudentsController;
