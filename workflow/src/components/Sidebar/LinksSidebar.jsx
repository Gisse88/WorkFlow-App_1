import React from 'react'
import { Link } from 'react-router-dom';

const LinksSidebar = ({texto,url}) => {
  return (
    <Link to={url} className='flex justify-between items-center px-3 py-2 focus:bg-gradient-to-r hover:bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg hover:text-white'>
                <span className='text-sm font-medium'>{texto}</span>
                {/*<span className='text-xs font-semibold'>Hola</span>*/}
    </Link>
  )
}

export default LinksSidebar