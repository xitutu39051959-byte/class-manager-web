const students = [
  { id: 'S001', name: 'Alice Zhang', grade: 'Class 7A' },
  { id: 'S002', name: 'Ben Lin', grade: 'Class 7A' },
  { id: 'S003', name: 'Chris Wu', grade: 'Class 7B' },
]

function StudentsPage() {
  return (
    <section>
      <h2>Students</h2>
      <table className="students-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default StudentsPage