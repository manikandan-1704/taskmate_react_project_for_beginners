export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {

  const handleSubmit = (e) => {

    e.preventDefault();

    if(task.id){
      const date = new Date();
      const updatedTaskList = tasklist.map((todo) => (
        todo.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` } : todo 

      ));
      setTasklist(updatedTaskList);
      setTask({});
    }else{
      const date = new Date();

      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
      }
      setTasklist([...tasklist, newTask]);
      setTask({});
    }

  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" value={task.name || ''} name="task" placeholder="Add Task" autoComplete="off" onChange={(e) =>setTask({...task, name: e.target.value})} />
        <button type="submit">{ task.id ? "Update" : "Add" }</button>
      </form>
    </section>
  )
}
