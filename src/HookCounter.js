import React from 'react'
import { useState } from 'react'

function HookCounter() {
    const [count,incrementCounter] = useState(0);


    return (
        <div>
            <button type="submit" onClick={ () => incrementCounter(count+1)}>Count - {count}</button>         
        </div>
    )
}


export default HookCounter
// implementation show useState Hook

// Rules of hook

// 1) Call hooks only  at top level

// 2) it should only called by react functional components 