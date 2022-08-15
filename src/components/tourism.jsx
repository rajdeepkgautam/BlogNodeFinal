import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
const Tourism = () => {
    const [blog , setBlog] = useState([]);


 useEffect(()=>{
    axios.get(`https://newapprkg.herokuapp.com/details`).then(response=>{console.log(response);setBlog(response.data)});
 },[])
  return (
    
    <div className='bloglist-wrap'>
      
        {blog.filter((item)=>item.category==="tourism").map(item=>{
            return(
            <div className='blogItem-wrap'>
            <Link to={`/category/${item.id}/${item.category}`}><img src={item.cover} alt="cover" className='blogItem-cover' />
            <h3>{item.title}</h3>
            <p className='blogItem-desc'>{item.description}</p>
            <p className='blogItem-publish'>{item.published}</p></Link>
            </div>
            )
        })}
        
    </div>
  )
}

export default Tourism