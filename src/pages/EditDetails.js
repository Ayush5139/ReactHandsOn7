import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {studentUpdated} from '../Feactues/StudentSlice'
import './Home.css'

function EditDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useLocation();
  const dataid = data.state.id;
  const StdDetail =  useSelector((state)=>state.student.filter((item)=>item.id==dataid))
  const StdName = StdDetail[0].Name
  const StdAge = StdDetail[0].Age
  const StdCourse = StdDetail[0].Course
  const StdBatch = StdDetail[0].Batch
    const [Name,setName] = useState(StdName);
    const [Age,setAge] = useState(StdAge);
    const [Course,setCourse] = useState(StdCourse);
    const [Batch,setBatch] = useState(StdBatch);
    
    function SubmitHandler(){
      if(Name && Age && Course && Batch){
      dispatch(studentUpdated({
      
        "id":dataid,
        "Name":Name,
        "Age":Age,
        "Course":Course,
        "Batch":Batch
      }))
      navigate("/Student")
    }
  }
  return (
    <div>
          <div className='adddiv'>
                <input type='text' name = 'Name' placeholder='Name' value={Name} onChange={(e)=>setName(e.target.value)} className='input'/>
                <input type='text' name = 'Age' placeholder='Age' value={Age} onChange={(e)=>setAge(e.target.value)} className='input'/>
                <input type='text' name = 'Course' placeholder='Course' value={Course} onChange={(e)=>setCourse(e.target.value)} className='input'/>
                <input type='text' name = 'Batch' placeholder='Batch' value={Batch} onChange={(e)=>setBatch(e.target.value)} className='input'/>
            </div>
            <div>
                <button onClick={SubmitHandler} className='addbut'> Submit</button>
            </div>

    </div>
  )
}

export default EditDetails