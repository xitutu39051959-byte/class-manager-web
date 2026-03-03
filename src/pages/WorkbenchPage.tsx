function WorkbenchPage() {
  return (
    <section>
      <h2>Workbench</h2>

      <div className="kpi-grid">
        <article className="kpi-card">
          <span>Active Classes</span>
          <strong>6</strong>
        </article>
        <article className="kpi-card">
          <span>Attendance Today</span>
          <strong>92%</strong>
        </article>
        <article className="kpi-card">
          <span>Pending Tasks</span>
          <strong>3</strong>
        </article>
      </div>

      <div className="panel">
        <h3>Today</h3>
        <ul>
          <li>Review attendance exceptions before 10:00.</li>
          <li>Prepare week 4 assignment feedback.</li>
          <li>Notify homeroom for missing submissions.</li>
        </ul>
      </div>
    </section>
  )
}

export default WorkbenchPage
