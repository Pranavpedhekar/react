import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, } from '../features/todo/todoSlice'



export const Todo = () => {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
 
  return (
    <>
    <h1>Todo</h1>
    <ul>
        {/* <li>Hello world
            <button className='btn'>DEL</button>
        </li>
        <li>Hello world
            <button className='btn'>DEL</button>
        </li> */}

        {
          todos.map((todo)=>(
            <li key={todo.id}>{todo.text}
            <button className='btn'  onClick={()=> dispatch(removeTodo(todo.id))}>DEL</button>
            </li>
          ))
        }
    </ul>
    </>
  )
}
