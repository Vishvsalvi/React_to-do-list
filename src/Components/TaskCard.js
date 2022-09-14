import React from 'react'

const TaskCard = ({task, deleteTask, id}) => {


  return (
    <div>
        <article className="block py-5 px-2 text-center shadow-xl bg-gray-50 rounded-xl">
  <h5 className="text-xl font-semibold ">{task}</h5>

  <button
    className="inline-block px-4 py-2 mt-4 text-sm font-medium text-white bg-red-600 rounded transition hover:bg-red-700 hover:shadow-xl active:bg-red-500 focus:outline-none focus:ring"
    onClick={()=> deleteTask(id)}
  >
    Remove
  </button>
</article>

    </div>
  )
}

export default TaskCard