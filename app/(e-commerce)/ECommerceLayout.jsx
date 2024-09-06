'use client'
import { getCurrUser } from '@/utils/getUser'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const ECommerceLayout = ({children}) => {
    const user = getCurrUser()
    const router = useRouter()

    useEffect(() => {
        if(!user){
            router.push('/login')
        }
    },[])
  return (
    <div>{children}</div>
  )
}

export default ECommerceLayout