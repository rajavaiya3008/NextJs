'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const menCategory = '/products/category/menclothing'
const jeweleryCategory = '/products/category/jewelery'
const electronicsCategory = '/products/category/electronics'
const womenCategory = '/products/category/womenclothing'


const CategoryTab = () => {
    const pathname = usePathname()
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <ul className="flex space-x-4">
        <li className="flex-1">
          <Link href={menCategory} className={`block py-2 px-4 text-center text-gray-700 bg-white rounded-md hover:bg-gray-200 ${pathname === menCategory ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>Men Clothing</Link>
        </li>
        <li className="flex-1">
        <Link href={jeweleryCategory} className={`block py-2 px-4 text-center text-gray-700 bg-white rounded-md hover:bg-gray-200 ${pathname === jeweleryCategory ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>Jewelery</Link>
        </li>
        <li className="flex-1">
        <Link href={electronicsCategory} className={`block py-2 px-4 text-center text-gray-700 bg-white rounded-md hover:bg-gray-200 ${pathname === electronicsCategory ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>Electronics</Link>
        </li>
        <li className="flex-1">
        <Link href={womenCategory} className={`block py-2 px-4 text-center text-gray-700 bg-white rounded-md hover:bg-gray-200 ${pathname === womenCategory ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>Women Clothing</Link>
        </li>
      </ul>
    </div>
  )
}

export default CategoryTab