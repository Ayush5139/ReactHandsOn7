import { createSlice } from "@reduxjs/toolkit";
import Student from "../Data";

export const StudentSlice = createSlice({
    name:'StudenData',
    initialState:Student,
    reducers:{
        StudentAdded:(state,action)=>{
            state.push(action.payload);
        },
        studentUpdated:(state,action) =>{
            const { id, Name, Age, Course, Batch } = action.payload;

            const exiStudent = state.find(student => student.id == id);
            exiStudent.Name = Name;
            exiStudent.Age = Age;
            exiStudent.Course = Course;
            exiStudent.Batch = Batch;

        }
    }
})

export const {StudentAdded,studentUpdated} = StudentSlice.actions
export default StudentSlice.reducer;