import React from 'react'
import { useDispatch } from 'react-redux'

import { edit, remove } from '../features/grocery/grocerySlice'


const ListItem = ({allGrocery}) => {

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(remove(id))
       }

    const handleEdit = (allGrocery) => {
       dispatch(edit(allGrocery))
    }
    
  return (
   <>
    <div >
        <li className='list-item'> <input  type='text' value={allGrocery.text} style={{backgroundColor: "rgba(80, 79, 79, 0.1)"}}  className='list'  />
        <div>
            <button className='button-edit task-button' onClick={()=> handleEdit(allGrocery)}>
                <i className='fa fa-edit'></i>
            </button>
            <button className='button-delete task-button' onClick={() => handleDelete(allGrocery.id)}>
                <i className='fa fa-trash'></i>
            </button>
        </div>
       </li>

   
    </div>
   </>
  )
}

export default ListItem
