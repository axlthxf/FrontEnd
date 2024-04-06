import React from 'react'
import { useState } from 'react'

function Input() {
    const [title, setTitle] = useState("")
    const [todo, setTodo] = useState("")
    const email= localStorage.getItem("email")
    return (
        <div className="">
        <div className=" flex justify-center items-center py-10">

            <div className='flex flex-col justify-center items-center border border-yellow-400 border-4 bg-neutral-700  rounded-t-3xl rounded-b-3xl  gap-4 p-8'>
                <div className='flex gap-4  '>
                    <label for="confirm-password" class="block mb-2 text-xl font-medium text-white  ">Title:</label>
                    <input onChange={
                        (e) => {
                            setTitle(e.target.value)
                        }
                    }
                        type="confirm-password" name="confirm-password" id="confirm-password" placeholder="" class="bg-white border placeholder:text-black border-white text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>


                <div className='flex gap-4'>
                    <label for="small-input" class="block mb-2 text-xl font-medium text-white  ">Todo:</label>
                    <input onChange={
                        (e) => {
                            setTodo(e.target.value)
                        }
                    }

                        type="text" id="small-input" class="block w-80 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <button onClick={
                    (e)=>{
                    e.preventDefault()
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          name:title,
                          description:todo,
                          email:email
                        })
                      };
                      fetch('http://localhost:3000/addtodo', requestOptions)
                      .then(response => response.json())
                      .then(res=>console.log(res))
                    }
                } type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Submit</button>

            </div>
           
        </div>
        <h1 className='text-black text-4xl font-extrabold '>TODOs list</h1>
        
        </div>
    )
}

export default Input
