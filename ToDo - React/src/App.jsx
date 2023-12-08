import React from 'react'

// Making todo app from react
function App() {
  const [todoHeading, setTodoHeading] = React.useState('')
  const [todoStatus, setTodoStatus] = React.useState('pending')
  
  // Defining the Todo array which will contain todo Headings
  let Todos = []

  // Defining a function to push Todo heading from input component to Todo array 
  function addTodo(){
    let todoHeading = document.getElementById('todoInput').value
    if (todoHeading === '' || null) return 
    Todos.push(
      todoHeading
    )
    console.log(Todos);
  }

  function showTodos(){
    Todos.map((todo, key)=>{
      console.log(todo);
      document.getElementById('todoContainer').innerHTML += `<div className="bg-red-700 p-10 rounded-lg border-4 border-white">
      <h1>${todo}</h1>
    </div>`
    })
  }
  

  return (
    <>
      {/* Component to add TodoHeading into the todo arrays */}
      <div className='bg-slate-900 pt-10 h-screen px-10'>
        {/* Input box */}
        <div className='m-auto px-12 py-8 bg-blue-800 rounded-md w-fit'>
          <input id='todoInput' type="text" placeholder='Enter your todo' className='pr-36 bg-gray-950 border-none outline-none px-5 h-20 py-1 rounded-md text-xl text-gray-500 font-semibold' onChange={(e)=> e.target.value}/>
          <button onClick={()=>{addTodo(); showTodos()}} className='outline-none px-5 py-2 font-bold absolute right-[32rem] top-[5.7rem] text-gray-200 bg-blue-600 rounded-md'>Add ToDo</button>
        </div>

        {/* Todo Card Component */}
        <div id='todoContainer' className= {`px-10 py-8 rounded-md border-black border-4 bg-slate-600 h-auto w-fit mt-20 `} >
          {/* Todo card will come from another funciton */}
        </div>  
      </div>
    </>
  )
  }

export default App

