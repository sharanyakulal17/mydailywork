import React, { useState } from "react";
import axios from "axios";

function TaskForm({ projectId, onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!title || !deadline) return;

    const res = await axios.post(
      `http://localhost:5000/projects/${projectId}/tasks`,
      { title, deadline }
    );
    onTaskAdded(res.data);
    setTitle("");
    setDeadline("");
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: "10px" }}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "5px", padding: "5px" }}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        style={{ marginRight: "5px", padding: "5px" }}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;