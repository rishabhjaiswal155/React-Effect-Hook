import React,{useState,useEffect} from 'react'

function HookCounterOne() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log('useEffect- Updating Document title')
        document.title=`You Clicked ${count} times`
    },[count])
  return (
    <div>HookCounterOne<br/>
    <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
    <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterOne