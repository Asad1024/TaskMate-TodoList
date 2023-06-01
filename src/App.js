import { useState, useEffect } from 'react';
import AddTasks from './components/AddTasks';
import Header from './components/Header';
import ShowTasks from './components/ShowTasks';


function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('tasklist')) || [])
  const [task, setTask] = useState({})
  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
     <Header/>
    <AddTasks tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask} />
    <ShowTasks tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask} />
    </div>
  );
}

export default App;
