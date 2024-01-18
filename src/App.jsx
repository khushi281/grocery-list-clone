import React from 'react'
import Header from './Component/Header'
import Form from './Component/Form'
import ListGroup from './Component/ListGroup'

const App = () => {
  return (
    <div className='container'>
  
    <div className='app-wrapper'>
    <div>
    <Header />
    <div>
    <Form />
    </div>
    <div>
      <ListGroup />
    </div>
    </div>
    </div>
    
    </div>

    // <>
    // <Header />
    // <Form />
    // <ListGroup />
    // </>
  )
}

export default App
