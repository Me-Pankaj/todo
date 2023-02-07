import {React,useState,useEffect} from 'react'
import Task from './Task';


const Home = () => {

    const initialarray=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[] ;
    const [tasks,setTasks]=useState(initialarray)
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    // console.log(title,description)

    const submitHandler=(e)=>{
        e.preventDefault();

       setTasks([...tasks,{title,description}])
       setDescription("");
       setTitle("");
    };


    const deleteTask=(index)=>{
        const filteredarray=tasks.filter((val,i)=>{
            return i!==index;
        })
        // console.log(filteredarray);
        setTasks(filteredarray);
    }

    useEffect(() => {
        localStorage.setItem("tasks",JSON.stringify(tasks))
    }, [tasks])
    

  return (
    <div className='container'>
        <h1>Daily Goals</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <textarea placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            <button type='submit'>ADD</button>
        </form>

        {tasks.map((item,idx)=>(
            <Task key={idx} title={item.title} description={item.description} deleteTask={deleteTask} index={idx}/>
        ))}

    </div>
  )
}

export default Home;