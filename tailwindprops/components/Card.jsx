import React from 'react'

function Card({username = "lorem"}) {
    // console.log(props);
    
    
  return (
    <div className=''>
 <div className='w-full rounded-md  md:flex gap-4 bg-slate-100 '>
    <img src="/me.jpg" alt="" className='w-32 h-32 rounded-md ' />
    <div className='text-start p-2'>
    <p className='text-sky-500'>{username }</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, harum.</p>
    </div>
</div>
    </div>
  )
}

export default Card