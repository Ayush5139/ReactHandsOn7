import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StudentAdded } from '../Feactues/StudentSlice';
import './Home.css'

function AddNewStudent() {
    const data = useSelector((state)=>state.student)    
    const [Name,setName] = useState("");
    const [Age,setAge] = useState("");
    const [Course,setCourse] = useState("");
    const [Batch,setBatch] = useState("");

    const navigate= useNavigate()
    function cancelAddStudent(){
        navigate("/students")

    }

    const dispatch = useDispatch()
    function AddNewStudent(){
        if(Name && Age && Course && Batch){
            dispatch(StudentAdded({
                "id":data.length,
                "Name":Name,
                "Age":Age,
                "Course" : Course,
                "Batch":Batch
            }))
            navigate("/Student")
        }
    }

    function cancelAddStudent(){
        navigate("/Student")

    }
  return (
    <div>
        <div className='adddiv'>
    
                <input type='text' name = 'Name' placeholder='Name' value={Name} onChange={(e)=>setName(e.target.value)} className='input'/>
                <input type='text' name = 'Age' placeholder='Age' value={Age} onChange={(e)=>setAge(e.target.value)} className='input'/>
                <input type='text' name = 'Course' placeholder='Course' value={Course} onChange={(e)=>setCourse(e.target.value)} className='input'/>
                <input type='text' name = 'Batch' placeholder='Batch' value={Batch} onChange={(e)=>setBatch(e.target.value)} className='input'/>


        </div>
        <div className='box2'>
            <button onClick={cancelAddStudent} className='addbut'>Cancle</button>
            <button onClick={AddNewStudent} className='addbut'>Submit</button>
        </div>
    </div>
  )
}

export default AddNewStudent