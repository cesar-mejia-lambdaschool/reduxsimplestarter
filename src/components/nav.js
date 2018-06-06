import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='text-xs-right'>
      <Link className='btn btn-success' to='/'>
        View Posts
      </Link>
      <Link className='btn btn-primary m-l-1' to='/new'>
        Add a Post
      </Link>
    </div>
  )
}

export default Nav
