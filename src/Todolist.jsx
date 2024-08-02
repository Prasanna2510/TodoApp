import Todo from "./Todo"
import styles from "./css/Todolist.module.css"

export default function Todolist({task, taskList, setTask, setTaskList, edit, setEdit}){
    return (
        <div>
            {(taskList.length==0)? (
                <div className={styles.noAdd}>
                    <hr />
                    <p>No task added...</p>
                    <hr />
                </div>
            ) : (
                <>
                    <div className={styles.line}><hr /></div>
                    {taskList.map(todo=><Todo key={todo.name} todo={todo} task={task} taskList={taskList} setTask={setTask} setTaskList={setTaskList} edit={edit} setEdit={setEdit}/>)}
                </>
            )}
        </div>
    )
}