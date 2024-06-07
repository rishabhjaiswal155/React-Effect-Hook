import React, {useState,useEffect} from 'react'
import axios from 'axios'
function FetchingIndidvidualPost() {
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp=>{
            console.log(resp)
            setPost(resp.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])
  return (
    <div>FetchingIndidvidualPost<br/>
    <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
    <div>{post.title}</div>
    </div>
  )
}

export default FetchingIndidvidualPost