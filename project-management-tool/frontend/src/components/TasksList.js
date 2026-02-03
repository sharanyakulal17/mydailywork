import React from "react";
import axios from "axios";
import Task from "./Task";

function TasksList({ tasks, projectId, setTasks }) {

  // 🔥 THIS IS WHERE updateStatus GOES
  const updateStatus = async (taskId, status) => {
    const res = await axios.put(
      `http://localhost:5000/projects/${projectId}/tasks/${taskId}`,
      { status }
    );

    setTasks(prev =>
      prev.map(task =>
        task._id === taskId ? { ...task, status: res.data.status } : task
      )
    );
  };

  return (
    <div>
      {tasks.map(task => (
        <Task
          key={task._id}
          task={task}
          updateStatus={updateStatus}
        />
      ))}
    </div>
  );
}

export default TasksList;