import React from 'react'
import { useState } from 'react'

function signup() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (

    <section class=" h-screen w-full ">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <div class="w-full backdrop-filter backdrop-blur-sm bg-opacity-100 bg-gray-700 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-yellow-500 md:text-2xl dark:text-white">
              Create Account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="confirm-password" class="block mb-2 text-sm font-medium text-white dark:text-white">Username</label>
                <input onChange={
                  (e) => {
                    setUsername(e.target.value)
                  }
                }
                  type="confirm-password" name="confirm-password" id="confirm-password" placeholder="username" class="bg-yellow-500 border placeholder:text-black border-white text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                <input onChange={
                  (e) => {
                    setEmail(e.target.value)
                  }
                }
                  type="email" name="email" id="email" class="bg-yellow-500 border placeholder:text-black border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required="" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-">Password</label>
                <input onChange={
                  (e) => {
                    setPassword(e.target.value)
                  }

                } type="password" name="password" id="password" placeholder="••••••••" class="bg-yellow-500 border placeholder:text-black border-white text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>

              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-white rounded bg-yellow-500 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms" class="font-light text-gray-200 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>
              <button onClick={
                (e) => {
                  e.preventDefault()

                  // const postData = {
                  //   username: username,
                  //   email: email,
                  //   password: password
                  // };
                  // const url = 'localhost:3000/signup';

                  // // Define options for the fetch request
                  // const options = {
                  //   method: 'POST',
                  //   headers: {
                  //     'Content-Type': 'application/json' // Specify the content type as JSON
                  //   },
                  //   body: JSON.stringify(postData) // Convert the data to JSON format
                  // };

                  // // Perform the fetch request
                  // fetch(url, options)
                  //   .then(response => {
                  //     if (!response.ok) {
                  //       throw new Error('Network response was not ok');
                  //     }
                  //     return response.json(); // Parse the JSON response
                  //   })
                  //   .then(data => {
                  //     console.log('Response data:', data); // Handle the response data
                  //   })
                  //   .catch(error => {
                  //     console.error('There was a problem with the fetch operation:', error); // Handle errors
                  //   });

                  // console.log(username)
                  // console.log(email)
                  // console.log(password)

                  const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      username: username,
                      email: email,
                      password: password
                    })
                  };
                fetch('http://localhost:3000/signup', requestOptions)
                    .then(response => response.json())
                    .then(res=> console.log(res))
                    
                  //   const request = {
                  //     method: 'GET',
                  //     headers: { 'Content-Type': 'application/json' },
                  //     body: JSON.stringify({
                  //       username: username,
                  //       email: email,
                  //       password: password
                  //     })
                  //   };
                  // fetch('http://localhost:3000/signup', request)
                  //     .then(response => response.json())
                  //     .then(res=> console.log(res))
                }
              } type="submit" className="w-[50%] border rounded-lg bg-yellow-700 text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up </button>
              <p class="text-sm font-light text-gray-300 dark:text-gray-400">
                Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default signup
