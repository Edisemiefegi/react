import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  const changecolor = (color) => {
    setColor(color)
  }
 
  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
<div className='fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2'>
<div className='fixed flex flex-wrap gap-2 justify-center  shadow-lg bg-white px-3 py-2 rounded-3xl'>
  <button onClick={() => changecolor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-500' >red</button>
  <button onClick={() => changecolor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-blue-500' >blue</button>
  <button onClick={() => changecolor('pink')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-pink-500' >pink</button>

</div>
</div>
    </div>
  )
}

export default App
