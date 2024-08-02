import styles from "./css/Todo.module.css";

export default function Todo({todo, task, taskList, setTask, setTaskList,setEdit}){
    function handleDelete(){
        setTaskList(taskList.filter(t=>t.name!=todo.name));
    }
    function handleEdit(){
        if(task.name!=""){
            alert("A task is already editing or adding!");
        } else{
            handleDelete();
            setTask(todo);
            setEdit(taskList.find(t=>t.name==todo.name));
        }
    }
    function handleStrike(){
        let sorted = [...taskList.filter(t=>t.name!=todo.name), {...todo, done: !todo.done}];
        setTaskList(sorted.sort((a,b)=>a.done-b.done));
    }
    let style = todo.done? styles.todo2 : styles.todo1;
    return (
        <div className={styles.contain}>
            <span className={style} onClick={handleStrike}>{todo.name}</span>
            <button className={styles.delete} onClick={handleDelete}>delete</button>
            <button className={styles.delete} onClick={handleEdit}>edit</button>
        </div>
    )
}