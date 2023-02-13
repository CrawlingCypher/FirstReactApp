import Task from './Task'

function Tasks({tasks, onDelete, onToggle}) {
   
    return (
        <>
        
           {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
           //<h3 key={car.id}>{car.color}</h3>
           ))}
        </>
        )
}

export default Tasks