import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Define una función asincrónica para obtener los datos del servidor
export const fetchAlimentosDta = createAsyncThunk('data/alimentos', 
    async() =>{
        const respuesta = await axios.get('http://localhost:4000/api/alimentos')
        console.log(respuesta.data)
        return respuesta.data
    })

// Define el slice de datos 

const AlimentosSlice = createSlice({
    name: 'data',
    initialState: { data: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAlimentosDta.pending, (state)=>{
            state.status = 'loading';
        })

        .addCase(fetchAlimentosDta.fulfilled, (state, action)=>{
            state.status = 'succeeded'
            state.data = action.payload
        })

        .addCase(fetchAlimentosDta.rejected, (state, action)=>{
            state.status = 'failed'
            state.error = action.error.message;
        })
    }
})

export default AlimentosSlice.reducer;