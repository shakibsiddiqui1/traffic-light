import { useEffect, useState } from 'react'
import './App.css'
import {trafficLight} from '../utils/constants.js'

function App() {

  const [activeSignal, setActiveSignal] = useState('green')
  const light = trafficLight.find((lig)=>lig.color===activeSignal)

  useEffect(()=>{
    const timerId = setTimeout(()=>{
      setActiveSignal(light.next);
    }, light.wait)

    return ()=>{
      clearTimeout(timerId)
    }
  })
  return (
      <>
        <div className='flex h-screen w-full justify-center items-center'>
          <div className='flex flex-col items-center w-32 h-96 justify-around bg-black rounded-xl '>
              {
                trafficLight.map((light)=><div key={light.color} className="w-20 h-20 rounded-full" style={{backgroundColor : activeSignal === light.color ? light.color : 'gray'}}></div>)
              }
          </div> 
        </div>
      </>
  )
}

export default App
