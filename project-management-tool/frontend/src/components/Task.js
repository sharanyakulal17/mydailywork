function Task({ task, updateStatus }) {
  return (
    <div style={{ marginTop: "8px" }}>
      <b>{task.title}</b>
      <select
        value={task.status}
        onChange={(e) => updateStatus(task._id, e.target.value)}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}

export default Task;