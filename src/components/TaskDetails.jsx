import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

const TaskDetails = () => {
  const [task, setTask] = useState({});
  const params = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // define loading state

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await response.json();
      if (response.status === 404) {
        setError("Task not Found");
      }
      setTask(data);
      setLoading(false);
    };
    fetchTask();
  }, [params.id]); // add params.id to dependency array to avoid infinite loop

  if (error) {
    return <Navigate to="/" />;
  }

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
    </div>
  );
};

export default TaskDetails;
