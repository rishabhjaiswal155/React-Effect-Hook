import React, {useState,useEffect} from 'react'

function HookMoseMove() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const logMousePosition=e=>{
        console.log('updating MouseMove')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('updating useEffect')
        window.addEventListener('mousemove',logMousePosition)
        },[])
  return (
    <div>HookMoseMove<br/>
    X:{x}<br/>
    Y:{y}
    </div>
  )
}

export default HookMoseMove