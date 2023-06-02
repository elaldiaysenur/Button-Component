import React from 'react'
import './app.css'
import { Button } from 'buttonarts'
import 'buttonarts/dist/index.css'

const App = () => {
  return (
    <>
      <div className='flex-container'>
        <div>
        <div className='flex-container' >
            <div><Button text="small" type="small" color="fuchsia" /></div>
            <div> <Button text="default" color="orange" /></div>
            <div><Button text="large" type="large" color="turquoise" /></div>

          </div>
          <div className='flex-container' >
          <div> <Button text="dotted" type="dotted"  color="pome-flo" /></div>
            <div><Button text="dashed" type="dashed" /></div>
            <div><Button text="radius" type="radius-colorful" color="pome-flo" /></div>
          </div>
          <div className='flex-container'>
            <div><Button text="default" color="baby-blue" /></div>
            <div><Button text="large" type="large" color="lilac" /></div>
            <div> <Button text="shadow" type="shadow" color="mint-green" /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
