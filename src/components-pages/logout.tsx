import React from 'react'
import { doLogout } from '../app/actions'

const Logout = () => {
  return (
    <div>
       <form action={doLogout}>
        <button type='submit' className='bg-red-300 text-white w-full '>
            logout 
        </button>
       </form>
    </div>
  )
}

export default Logout
