import React, { useEffect, useState } from 'react'
import "../styles/todo.css"
import {useDispatch, useSelector} from "react-redux"
import { setTodos } from '../redux/actions/todoActions'
import { Heading,Select,Text,Button } from '@chakra-ui/react'
import {AiOutlineSearch} from "react-icons/ai"
const Todo = () => {
    const todos=useSelector((state)=>state.Todos.todos)
const dispatch=useDispatch()
const [todo,setTodo]=useState([])
const [sort,setSort]=useState("")
const [search,setSearch]=useState("")
const [loading,setLoading]=useState(false)
const [page,setPage]=useState(1)

const fetchTodos=async()=>{
    setLoading(true)
    const res=await fetch(`https://jsonplaceholder.typicode.com/todos\?${sort && `_sort=id&_order=${sort}`}&${search && `q=${search}`}&_limit=10&_page=${page}`)
    const data=await res.json()
   dispatch(setTodos(data))
   setLoading(false)
   setTodo(data)
}
const handleUser=(el)=>{
   localStorage.setItem("userDetails00",JSON.stringify(el))
   window.location.reload()
}

useEffect(()=>{
    fetchTodos()
},[sort,search,page])

  return (
   
        <div className='todoContainer'>
            <div>
              <Heading as='h4' size='md'>Todos</Heading>
             <div> <Select placeholder='Sort By ID' onChange={(e)=>setSort(e.target.value)}>
    
    <option value="asc">low to high</option>
    <option value="desc">high to low</option>
  </Select></div>
            <div style={{display:"flex",border:"1px solid black",borderRadius:"20px",padding:'2px'}} >
                <AiOutlineSearch style={{marginTop:"7px",marginRight:"5px"}} size={20}/>
                <input type="text" placeholder='Search...' style={{margin:"2px 8px",outline:"none"}} onChange={(e)=>setSearch(e.target.value)} />
            </div>
            </div>
            <div style={{border:"1px solid black"}}>
                <div className='heading'>
                <Heading as='h4' size='md'>ToDo ID</Heading>
                <Heading as='h4' size='md'>Title</Heading>
                <Heading as='h4' size='md'>Status</Heading>
                <Heading as='h4' size='md'>Action</Heading> 
                </div>
                {loading? <div>loading.....</div>:todo && todo.map((el)=>(
                    <div className='heading' key={el.id}>
                     <Text as='h4' size='md'>{el.id}</Text>
                     {el.title.length<=30? <Text as='h4' size='md'>{el.title}</Text>: <Text as='h4' size='md'>delectus aut autem</Text>}
                    
                     <Text as='h4' size='md'>{el.completed?"completed":"Incomplete"}</Text>
                     <Button onClick={()=>handleUser(el)}>View User</Button>
                     </div>
                ))}
            </div>
            <div className='page'>
            <button onClick={()=>setPage(page-1)} disabled={page===1} style={{backgroundColor:"blue",color:"white",padding:"10px",borderRadius:"10px"}}>prev</button>
            <Text className='text'>{page}</Text>
            <button onClick={()=>setPage(page+1)} disabled={page===20} style={{backgroundColor:"blue",color:"white",padding:"10px",borderRadius:"10px"}}>next</button>
            </div>
         
        </div>
   
  )
}

export default Todo