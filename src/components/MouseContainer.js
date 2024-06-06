import React,{useState,useEffect} from 'react'
import HookMouseMove from './HookMouseMove'
function MouseContainer() {
    const [display,setDisplay]=useState(true)
  return (
    <div>MouseContainer<br/>
    <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
    {display && <HookMouseMove/>}
    </div>
  )
}

export default MouseContainer