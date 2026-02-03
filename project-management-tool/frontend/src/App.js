import React, { useState } from "react";

function App() {
  const [projectName, setProjectName] = useState("");
  const [step, setStep] = useState(1); // 1: project, 2: tasks
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");

  const addTask = () => {
    if (taskTitle.trim() !== "" && taskDeadline !== "") {
      setTasks([
        ...tasks,
        { title: taskTitle, deadline: taskDeadline, status: "To Do" },
      ]);
      setTaskTitle("");
      setTaskDeadline("");
    } else {
      alert("Please enter both task title and deadline");
    }
  };

  const updateStatus = (index, status) => {
    const newTasks = [...tasks];
    newTasks[index].status = status;
    setTasks(newTasks);
  };

  const handleBack = () => {
    setStep(1);
    setProjectName(""); // Clear project name
    setTasks([]);       // Clear tasks
    setTaskTitle("");
    setTaskDeadline("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      {step === 1 && (
        <div>
          <h2>Enter Project Name</h2>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Project Name"
          />
          <button
            onClick={() => {
              if (projectName.trim() !== "") setStep(2);
            }}
            style={{ marginLeft: "10px" }}
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Project: {projectName}</h2>
          <h3>Add Tasks</h3>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Task Title"
          />
          <input
            type="date"
            value={taskDeadline}
            onChange={(e) => setTaskDeadline(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
          <button onClick={addTask} style={{ marginLeft: "10px" }}>
            Add Task
          </button>

          <div style={{ marginTop: "20px" }}>
            {tasks.map((task, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  border: "1px solid gray",
                  padding: "5px",
                  alignItems: "center",
                }}
              >
                <div>
                  <strong>{task.title}</strong>
                  <br />
                  Deadline: {new Date(task.deadline).toLocaleDateString()}
                </div>
                <select
                  value={task.status}
                  onChange={(e) => updateStatus(index, e.target.value)}
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
            ))}
          </div>

          {/* Back button at the bottom */}
          <button
            onClick={handleBack}
            style={{ marginTop: "20px", backgroundColor: "#f0f0f0" }}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default App;