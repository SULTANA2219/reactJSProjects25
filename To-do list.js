import React, {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    
    const addTask = () => {
        if (input.trim() == "") return;
        const newTask = { id: Date.now(), text: input, completed: false };
        setTasks([...tasks, newTask]);
        setInput("");
        };
        
        const toggleTask = (id) => {
            setTasks(
                tasks.map((task) =>
                task.id === id?{...task, completed: !task.completed }:task
                )
            );
        };
        
        const deletTask = (id) => {
            setTasks(tasks.filter((task) => task.id !== id));
        };
        
        return (
            <div style={styles.container}>
                <h1 style={styles.title}> To-Do List</h1>
                
            <div style={ styles.inputContainer}>
                 <input
                 type="text"
                 placeholder="Add a new task..."
                 value={input}
                 onCharge={(e) =>
                     setInput(e.target.value)}
                     style={styles.input}
                     />
                     <button onClick={addTask} style={styles.addButton}>
                         Add 
                         </button>
                         </div>
                         
                         <ul style={styles.list}> {tasks.map((task) => (
                         <li key={task.id}
                         style={styles.listItem}>
                             <span
                             onClick={() => toggleTask(task.id)}
                             style={{
                                 ...styles.taskText,
                                 textDecoration: task.completed ? "line-through" : "none",
                                 color: task.completed?"gray":"black",
                             }}
                             >
                                 {task.text}
                             </span>
                             <button onClick={()
                                 => deletTask(task.id)}
                                style={styles.deleteBtn}>
                                 cross
                                 </button>
                                 </li>
                                 ))}
                                </ul>
                            </div>
                     );
    }
    
    //Inline CSS 
    const styles = {
        container: {
            maxWidth: "400px",
            margin: "50px auto",
            padding; "20px",
            background: "#fdfdfd",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            fontFamily: "Poppins, sans-serif",
        },
        title: {
            textAlign: "center",
            marginBottom: "20px",
        },
        inputContainer: {
            display: "flex",
            gap: "10px",
        },
        input: {
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "10px",
        },
        addButton: {
            
        }
}
