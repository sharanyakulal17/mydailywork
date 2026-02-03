import React, { useState } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";

function Project({ project }) {
  const [tasks, setTasks] = useState(project.tasks || []);

  const updateStatus = async (taskId, newStatus) => {
    try {
      await axios.put(
        `http://localhost:5000/projects/${project._id}/tasks/${taskId}`,
        { status: newStatus }
      );
      setTasks(
        tasks.map((task) =>
          task._id === taskId ? { ...task, status: newStatus } : task
        )
      );
    } catch (err) {
      alert("Error updating status");
    }
  };

  const handleTaskAdded = (updatedProject) => setTasks(updatedProject.tasks);

  return (
    <div style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
      <h2>{project.name}</h2>
      <TaskForm projectId={project._id} onTaskAdded={handleTaskAdded} />
      {tasks.map((task) => (
        <div
          key={task._id}
          style={{ border: "1px solid gray", padding: "5px", margin: "5px 0" }}
        >
          <h4>{task.title}</h4>
          <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
          <select
            value={task.status}
            onChange={(e) => updateStatus(task._id, e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default Project;