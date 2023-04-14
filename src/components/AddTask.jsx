import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState("false");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please add a task");
      return;
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder("");
  };

  return (
    <div className="add-form ">
      <form action="" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="">Text</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="dayTime">Day and TIme</label>
          <input
            type="text"
            placeholder="Add Day & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label htmlFor="reminder">Set Reminder</label>
          <input
            type="checkbox"
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddTask;
