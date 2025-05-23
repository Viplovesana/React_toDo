
import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    task:[{id:1,text:"hello todo"}]
}

export const TodoSlice=createSlice({
     name:"todo",
     initialState,
     reducers:{
        addtodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.task.push(todo)
        },
        removetodo:(state,action)=>{
            state.task=state.task.filter((todo)=todo.id!==action.payload)
        }
     }
})
export const {addtodo,removetodo}=TodoSlice.actions;
export default TodoSlice.reducer;
   


 
