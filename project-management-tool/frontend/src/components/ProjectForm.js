import React, { useState } from "react";
import axios from "axios";

function ProjectForm({ onProjectAdded }) {
  const [name, setName] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!name) return;
    const res = await axios.post("http://localhost:5000/projects", { name });
    onProjectAdded(res.data);
    setName("");
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;