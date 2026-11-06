import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { fetchCaseStudies } from "./caseStudiesApi";
const initialState={
    items:[],
    status:"idle",
    error:null,
    filters:{
        category:"All",
        query:""
    }
}
export const getCaseStudies=createAsyncThunk(
    "caseStudies/getCaseStudies",async(_,{rejectWithValue})=>{
        try {
            const data=await fetchCaseStudies();
            return data;
            
        } catch (error) {
            return rejectWithValue(
                error.message||"something went wrong"
            )
            
        }
    }
    
    );
const caseStudiesSlice=createSlice({
    name:"caseStudies",
    initialState,
    reducers:{
        setCategory:(state,action)=>{
            state.filters.category=action.payload
        },
        setSearchQuery:(state,action)=>{
            state.filters.query=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getCaseStudies.pending,(state)=>{
            state.status="loading";
            state.error=null
        });
        builder.addCase(getCaseStudies.fulfilled,(state,action)=>{
            state.status="succeeded";
            // state.error=null;
            state.items=action.payload

        });
        builder.addCase(getCaseStudies.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.payload||action.error.message||"something went wrong"
        })
    }
})
export const {setCategory,setSearchQuery}=caseStudiesSlice.actions
export default caseStudiesSlice.reducer;