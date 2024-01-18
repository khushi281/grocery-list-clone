import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListItem from './ListItem'
import { clearAll } from '../features/grocery/grocerySlice'


const ListGroup = () => {

    const dispatch = useDispatch()
    
   const {allGrocerys} = useSelector(state => state.grocerys)

   const handleClearAll = () => {
    dispatch(clearAll())
  }

  
  return (
    <div className='new'>
        {
        allGrocerys.map((allGrocery) => <ListItem key={allGrocery.id} allGrocery={allGrocery} />)
        }

    <button className='clear' onClick={handleClearAll}>Clear All</button>
    </div>
  )
}

export default ListGroup
