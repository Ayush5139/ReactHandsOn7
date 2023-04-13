import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Home.css'

function TableRow({student,student:{id,Name,Age,Course,Batch},CaptureEdit}) {
  return (
    <>
            <td className='sub'>{Name}</td>
            <td className='sub'>{Age}</td>
            <td className='sub'>{Course}</td>
            <td className='sub'>{Batch}</td>
            <td className='input'>
                <Link to='/EditDetails' state={{id}} className = 'edit'>Edit</Link>
            </td>
      </>
  )
}

export default TableRow