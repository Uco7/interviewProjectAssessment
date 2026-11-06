import { createSlice } from "@reduxjs/toolkit";
import { whyChooseUs } from "./whyChooseUsData";
const initialState=whyChooseUs;
const whyChooseUsSlice=createSlice({
    name:"whyChooseUs",
    initialState,
    reducers:{}
})
export default whyChooseUsSlice.reducer;