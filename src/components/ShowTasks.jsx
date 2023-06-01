import React from 'react'

const ShowTasks = ({tasklist, setTasklist, task, setTask}) => {

    const handelEdit = (id) => {
        const editTask = tasklist.find(todo => todo.id === id)
        setTask(editTask)
    }

    const handleDelete = (id) => {
        const updateTask = tasklist.filter(todo => todo.id !== id)
        setTasklist(updateTask)
   }
    
  return (
    <section className='showTask'>
    <p className="head">
        <span>
            <span className="title">Todo</span>
            <span className="count">{tasklist.length}</span>
        </span>
        <span onClick={() => setTasklist([])} className="clearAll">Clear All</span>
    </p>
    <ul>
        {tasklist.map((todo) => (
            <li key={todo.id}>
                <p>
                    <span className="name">{todo.name}</span>
                    <span className="time">{todo.time}</span>
                </p>                
                <i onClick={() => handelEdit(todo.id)} className="bi bi-pencil-square"></i>
                <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
            </li>
        ))}
    </ul>
</section>
  )
}

export default ShowTasks