import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import TableRow from '../Components/TableRow'
import AddNewStudent from './AddNewStudent'
import './Home.css'

function Student() {
    const data = useSelector((state)=>state.student)
    console.log(data)
    const navigate = useNavigate()
    function AddNewStu(){
        navigate("/AddNewStudent")
    }

  return (
    <div>
        <Navbar/>
        <div className='stdiv1'>
            <p className='stuh2'>Student Details</p>
            <button onClick={AddNewStu} className='stubtn1' >Add New Button</button>
        </div>
        <table className='stutab'>
            <thead>
                <tr>
                    <td className='name'>Name</td>
                    <td className='name'>Age</td>
                    <td className='name'>Course</td>
                    <td className='name'>Batch</td>
                    <td className='name'>Change</td>
                </tr>
            </thead>
            <tbody>
                {
                data.map((student)=>{
                    return(
                        <tr key={student.id}>
                            <TableRow student={student}/>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Student