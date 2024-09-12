import React, { useState } from 'react';
import TaskList from './TaskList';

function App() {
  const [task, setTask] = useState('');
  const [email, setEmail] = useState('');
  const [schedule, setSchedule] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send task to the backend
    try {
      const response = await fetch('https://nodecronjob-backend.onrender.com/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          task,
          email,
          schedule,
        }),
      });

      if (response.ok) {
        alert('Task added successfully');
        // setTask('');
        // setEmail('');
        // setSchedule('');
      } else {
        const errorText = await response.text();
        alert(`Error adding task: ${errorText}`);
      }
    } catch (error) {
      alert('Network error');
      console.error('Network error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Enter the Task</h1>
      <form onSubmit={handleSubmit}>
        <div className='inputF'>
          <label>Task:</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
            placeholder='send notification'
          />
        </div>
        <div className='inputF'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='abc@gmail.com'
          />
        </div>
        <div className='inputF'>
          <label>Cron:</label>
          <input
            type="text"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            placeholder="cron expression"
            required
          />
        </div>
        <div className='button'>
        <button type="submit">Add Task</button>
        </div>
       
      </form>
      <TaskList/>
    </div>
  );
}

export default App;
