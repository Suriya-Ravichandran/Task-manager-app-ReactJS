function TaskList({ tasks ,deleteTask,toggleComplete}) {
  return (
    <div className="container">
        <div class="card">
            <div class="card-body">
                <h4 className="text-success">Your Tasks here</h4>
                <ul className="list-group">
                    {tasks.map((task) => (
                    <li key={task.id} className="list-group-item justify-content-between d-flex">
                        <div>
                            <input
                            type="checkbox"
                            className="form-check-input me-2"
                            checked={task.complete}
                            onChange={() => toggleComplete(task.id)}
                            />
                            <span style={{ textDecoration: task.complete ? "line-through" : "none" }}>{task.text}</span>
                        </div>
                        <div><button className="btn btn-danger" onClick={()=>deleteTask(task.id)}>Delete</button></div> 
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default TaskList;
