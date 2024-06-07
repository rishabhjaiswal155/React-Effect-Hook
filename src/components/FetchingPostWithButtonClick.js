import React,{useState,useEffect} from 'react'
import axios from 'axios'
function FetchingPostWithButtonClick() {
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idfrombuttonclick,setIdfrombuttonclick]=useState(1)
    const handleClick = ()=>{
        setIdfrombuttonclick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombuttonclick}`)
        .then(resp=>{
            console.log(resp)
            setPost(resp.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idfrombuttonclick])
  return (
    <div>FetchingPostWithButtonClick<br/>
    <input type="text" value={id} onChange={e=>setId(e.target.value)} />
    <button onClick={handleClick}>Fetch Post</button>
    <div>{post.title}</div>
    </div>
  )
}

export default FetchingPostWithButtonClick