"use client"

import { useState } from "react";


export default function Home() {

  const [todos,setTodos] = useState([{
    Task: "React", id: 1
  },
{Task: " Next Js", id: 2}]);

  const [inputVal,setInput] = useState("")
  const [id,setId] = useState(0)

  const addItem = ()=>{
    let obj:any = todos.find(item => item.id == id)

    if (obj){
      let newArray = todos.filter(item => item.id !== obj.id)
      setTodos([...newArray,{Task:inputVal,id:id}])
    setInput("")
    setId(0)
    return
    }
 
    setTodos([...todos,{Task:inputVal,id:id}])
    setInput("")
    setId(0)
  }

  const editItem = (id:any)=>{
    let obj:any = todos.find(item => item.id == id)
    setInput(obj.Task);
    setId(obj.id);
  }

  const delItem = (id:any)=>{
    let newArray = todos.filter(item => item.id !== id)
      setTodos([...newArray])
  }

  return (
    <div className="max-w-4xl  max-auto p-5">
      <h1 className="text-center text-[40px] underline italic text-blue-600" >Todo App By Adil Raza</h1>

      {/* start input div */}
      <div className="flex justify-between gap-4 mt-5">
        <input type="text"
        value={inputVal}
        onChange={(e) => setInput(e.target.value)} className="w-[60%] p-2 ml-3 textr-lg border-b focus:outline-none" placeholder="Add in your list" 
        />
        <input type="number"
        value={id}
        onChange={(e:any) => setId(e.target.value)} className="w-[20%] p-2 ml-3 textr-lg border-b focus:outline-none" placeholder="Write id" 
        />
        <button onClick={addItem} className="bg-blue-500 w-[20% text-white p-2 rounded-md hover:bg-blue-200]">Add Item</button>
      </div>
      {/* end input div */}
      <h1 className="text-center text-[40px] underline mt-6 italic text-blue-600" >Task List</h1>

      <div className="grid grid-cols-2 gap-5 mt-5">
        {
          todos.map((item:any, i:any) => {
            return (<div className="shadow p-4" key={i}>
            <div className="flex justify-between text-lg">
              <span className="shadow rounded-full h-8 w-8 text-center my-auto">
                {i + 1}</span>
              <span onClick={()=>delItem(item.id)} className="shadow rounded-full h-8 w-8 text-center my-auto cursor-pointer text-red-600">
                X</span>
            </div>
    
            <div className="mt-5 text-[30px] text-gray-600">{item.Task}</div>
            <div>
            <h2 onClick={()=>editItem(item.id)} className="text-right cursor-pointer">Edit</h2>
          
            </div>
          </div>
            )
          })
        }
     
              
</div>
      </div>
  
  );
}
