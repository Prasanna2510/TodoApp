import { useState } from "react"
import Header from "./Header"
import Search from "./Search"
import Todolist from "./Todolist"
import Footer from "./Footer"
import styles from "./css/App.module.css"

function App() {
  const [task, setTask] = useState({name:"", done:false, date:""});
  const [taskList, setTaskList] = useState([]);
  const [edit, setEdit] = useState(null);
  return (
    <div className={styles.body}>
      <Header/>
      <Search task={task} setTask={setTask} setTaskList={setTaskList} taskList={taskList} edit={edit} setEdit={setEdit}/>
      <Todolist task={task} taskList={taskList} setTask={setTask} setTaskList={setTaskList} edit={edit} setEdit={setEdit}/>
      <Footer taskList={taskList}/>
    </div>
  )
}

export default App
