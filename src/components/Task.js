
function Task({task, onDelete, onToggle}) {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)} >
            <h3>{task.text}</h3>
            <p>{task.date}</p>
            <button className="btn" style={{backgroundColor: 'red'}} onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    )
}

export default Task