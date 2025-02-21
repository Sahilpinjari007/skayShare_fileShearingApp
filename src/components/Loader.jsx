import React from 'react'
import { PacmanLoader } from 'react-spinners'

const Loader = () => {
  return (
   <div className='h-screen w-full flex items-center justify-center'>
     <PacmanLoader color='#007dfc' />
   </div>
  )
}

export default Loader