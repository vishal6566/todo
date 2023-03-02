import React, { useEffect, useState } from 'react'
import "../styles/user.css"
import { Heading,Text } from '@chakra-ui/react'
const UserDetails = () => {
    const user=JSON.parse(localStorage.getItem("userDetails00"))
    const [userDetail,setUserDetail]=useState({})
    const fetchData=async()=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${user.userId}`)
    const data=await res.json()
  setUserDetail(data)
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='container'>
        <div>
        <Heading as='h4' size='md'>User Detail</Heading>
        </div>
        <div className='body'>
            <div className='subBody'>
            <Text as='h4' size='md'className='text'>ToDo ID  </Text>
        <Text as='h4' size='md' className='detail'>{user.id}</Text>
            </div>
            <div className='subBody'>
            <Text as='h4' size='md' className='text'>ToDo Title</Text>
        <Text as='h4' size='md' className='detail'> {user.title.length<=30? <Text as='h4' size='md'>{user.title}</Text>: <Text as='h4' size='md'>delectus aut autem</Text>}</Text>
            </div>
            <div className='subBody'>
            <Text as='h4' size='md' className='text'>User ID</Text>
        <Text as='h4' size='md' className='detail'>{user.userId}</Text>
            </div>
            <div className='subBody'>
            <Text as='h4' size='md' className='text'>Name</Text>
        <Text as='h4' size='md' className='detail'>{userDetail.name}</Text>
            </div>
            <div className='subBody'>
            <Text as='h4' size='md' className='text'>Email</Text>
        <Text as='h4' size='md' className='detail'>{userDetail.email}</Text>
            </div>
        
        </div>
    </div>
  )
}

export default UserDetails