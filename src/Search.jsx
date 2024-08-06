import styles from "./css/Search.module.css"

export default function Search({task, setTask, setTaskList, taskList, edit, setEdit}){
    let date = new Date();
    date = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
    function handleInput(e){
        if(edit!=null){
            setTask({name: e.target.value, done: edit.done, date:date});
        } else{
            setTask({name: e.target.value, done: false, date:date});
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        if(task.name==""){
            alert("Please enter something!");
        } else if(taskList.some(t=>t.name==task.name.trim())){
            alert("Task is already present!");
        }
         else{
            if(edit!=null){
                setEdit(null);
            }
            const sorted = [...taskList, task];
            setTaskList(sorted.sort((a,b)=>a.done-b.done));
        }
        setTask({name: "", done: false, date:""});
    }
    return (
        <div className={styles.contain}>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" placeholder="Add your task..." className={styles.input} onChange={(e)=>handleInput(e)} value={task.name}/>
                <input type="submit" value="Add" className={styles.add}/>
            </form>
        </div>
    )
}
