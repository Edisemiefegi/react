import { useState , useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumallowed] = useState(false)
  const [charAllowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
let pass = ''
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

if(numAllowed) str += '0123456789'
if(charAllowed) str += '!@#$%^&*()_+'

for (let i = 1; i < length; i++) {
const char = Math.floor(Math.random() * str.length + 1  )
pass += str.charAt(char)
}

setpassword(pass)
  }, [length, numAllowed, charAllowed])

  useEffect(() => {
generatePassword()
  }, [length, numAllowed, charAllowed])

const copyPassword = () => {
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
}

  return (
    <div className='bg-gray-800 w-full h-screen flex flex-col items-center ' >
      <h1 className='mt-10 text-white mb-2'> Password Generator </h1>
      <div className='flex rounded-lg overflow-hidden'>
      <input type="text " value={password} ref={passwordRef}  readOnly  name="" id="" placeholder='password ' className='outline-none p-2 w-96 ' />
<button className='text-white bg-blue-600 p-2' onClick={copyPassword}>copy</button>
      </div>

      <div className='flex gap-4 mt-3'>
      <div className=''>
        <input type="range" min={6} max={12} value={length} onChange={(e) => setLength(e.target.value)} name="" id="" />
        <label htmlFor="length" className='text-orange-500'>Length {length}</label>
      </div>
      <div className=''>
        <input type="checkbox" defaultChecked={numAllowed} onChange={() => setNumallowed((prev) => !prev )}  name="" id="" />
        <label htmlFor="number" className='text-orange-500'>Numbers</label>
      </div>
      <div className=''>
        <input type="checkbox" defaultChecked={charAllowed} onChange={() => setcharallowed((prev) => !prev )}  name="" id="" />
        <label htmlFor="character" className='text-orange-500'>Characters</label>
      </div>
      </div>
    </div>
  )
}

export default App
