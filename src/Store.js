import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./Feactues/StudentSlice";

export default configureStore({
    reducer:{
        student:StudentSlice
    }
})