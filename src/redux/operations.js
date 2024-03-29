import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks =createAsyncThunk(
    'tasks/fetchAll',
    async(_, thunkAPI) =>{
        try {
            const response = await axios.get('/tasks');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message); 
        }
    }
);


export const addTask = createAsyncThunk(
    'tasks/thunkAPI',
    async(text, thunkAPI) =>{
        try {
            const responce =await axios.post('/tasks', {text});
            return responce.data;
        } catch (e) {
           return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const deleteTask = createAsyncThunk(
    'tasks/thunkAPI',
    async(taskId, thunkAPI) =>{
        try {
            const responce =await axios.delete(`/tasks/${taskId}`);
            return responce.data;
        } catch (e) {
           return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const toggleCompleted = createAsyncThunk(
    "tasks/toggleCompleted",
    async (task, thunkAPI) => {
      try {
        const response = await axios.put(`/tasks/${task.id}`, {
          completed: !task.completed,
        });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );