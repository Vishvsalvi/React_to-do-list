import React, { useState, useEffect } from 'react'

const Input = () => {


  const [text, setText] = useState("");
  let tasks = [];

  const add = (e)=>{
    e.preventDefault();
    tasks.push(text);
    setText("")
  }
  
  
  return (
    <div>


<div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
  <div className="max-w-lg mx-auto">


    <form action="" className="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4">
      <p className="text-lg font-medium">To do list</p>

      <div>
        <div className="relative mt-1">
          <input
            type="Text"
            id="Text"
            className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter task"
            autoComplete='off'
            value={text}
            onChange = {((e)=>{
              setText(e.target.value)
            })}

          />

          
        </div>
      </div>

      

      <button onSubmit={add} type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-black hover:bg-neutral-800 rounded-lg">
        Add 
      </button>

      
    </form>
  </div>
</div>

    </div>
  )
}

export default Input