import React, { useState } from 'react'

import classes from  './counter.module.scss'

export const Counter = () => {

    const [counter, setCounter] = useState(0)

  return (
    <div>
        <h1>
            {counter}
        </h1>
        <button className={classes.btn} onClick={()=> setCounter(counter + 1)}>
            Add
        </button>
    </div>
  )
}
