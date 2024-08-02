import styles from "./css/Footer.module.css"

export default function Footer({taskList}){
    let complete = taskList.reduce((a,b)=>b.done? a+1 : a, 0);
    return (
        <div className={styles.contain}>
            <div className={styles.innerContain}>Total: {taskList.length}</div>
            <div className={styles.innerContain}>Done: {complete}</div>
        </div>
    )
}