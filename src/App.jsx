import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('yellow')

  useEffect(()=>{
    const timerId = setTimeout(()=>{
      if(color==='red')
        setColor('yellow')
      else if(color==='yellow')
        setColor('green')
      else
        setColor('red')
    },2000)

    return ()=>clearTimeout(timerId)

  })
  return (
      <>
        <div className='flex flex-col items-center w-24 h-56 justify-around bg-black rounded-lg ml-56'>
            <div className={`w-10 h-10 rounded-full  ${color === 'red' ? 'bg-red-600' : 'bg-gray-500'}`}></div>
            <div className={`w-10 h-10 rounded-full  ${color === 'yellow' ? 'bg-yellow-400' : 'bg-gray-500'}`}></div>
            <div className={`w-10 h-10 rounded-full  ${color === 'green' ? 'bg-green-700' : 'bg-gray-500'}`}></div>
        </div> 
      </>
  )
}

export default App
