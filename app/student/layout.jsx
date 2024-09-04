import Link from 'next/link'
import React from 'react'

const layout = ({children}) => {
    const role = 'studentt'
    if(role !== 'student'){
        return <Link href={'/'}>Home</Link>
    }
  return (
    <div>
        <h1>Student Layout</h1>
        {role === 'student' && children}
    </div>
  )
}

export default layout