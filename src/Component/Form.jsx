import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, update } from '../features/grocery/grocerySlice'

const Form = () => {
 
    const dispatch = useDispatch()
    const [text , setText] = useState("")

    const {edit} = useSelector(state => state.grocerys)

    const handleSubmit = (e) => {
        e.preventDefault()

       if(!edit.isEdit){
        const newText = {
            id: crypto.randomUUID(),
            text:text
        }
        dispatch(add(newText))
        setText("")

       }else{
        const updatedGrocery =  {
          id: edit.allGrocery.id,
          text: text
        }
        dispatch(update(updatedGrocery))
        setText("")
       }
    }

    useEffect(() => {
      setText(edit.allGrocery.text)
    }, [edit])
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Item Name' className='task-input' value={text} onChange={(e) => setText(e.target.value)} required/>
        <button className='button-add' type='submit'>Add</button>
    </form>
    </>
  )
}

export default Form
