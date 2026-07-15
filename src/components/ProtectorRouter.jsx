import { useUser } from '@clerk/react'
import React, { Children } from 'react'
import {Navigate} from 'react-router'

export default function ProtectorRouter({children}) {
  const {user} = useUser()
  
  
  return (
    <div>
      {
        user ? children: <Navigate to='/'/>
      }
    </div>
  )
}
