import React from 'react'
import { useState,useEffect } from 'react'
function Displaytodo() {
    const [display,setDisplay]=useState([])
    const email=localStorage.getItem("email")
    useEffect(() => {
        fetch('http://localhost:3000/gettodos', requestOptions)
        .then(response => response.json())
        .then(res=>{
             console.log(res)
             setDisplay(res.data)
         })
        
            
      }, []);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email:email
        })
      };
   
   
  return (
    <div className='flex justify-center py-4'>
        <table className='border border-4 border-black w-full border-4 '>
      {
        display.map((todo,index)=>{
            return(
                <tr className='border border-blue-600 border-4'>
                   <td className='p-4 border border-yellow-400 border-4 text-gray-200  bg-neutral-800' >  {todo.name}</td>
                    <td className='p-4 text-gray-200  bg-neutral-800 border border-yellow-400 border-4'>{todo.description}</td>
                    {
                        todo.comapleted ?(
                            <td>true</td>
                        ):(
                            <td className='text-gray-200 text-xs border border-4 bg-neutral-800 border-yellow-400'>false</td>
                        )
                    }
                </tr>
            )
        })
      }
      </table>
    </div>
  )
}

export default Displaytodo
