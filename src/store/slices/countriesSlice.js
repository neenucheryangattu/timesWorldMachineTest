import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountries=createAsyncThunk("countries/fetch",async()=>{
    const res=await fetch("https://restcountries.com/v2/all?fields=name,region,flag");
    const data=await res.json();
    return data;
});

const countriesSlice=createSlice({
    name:"countries",
    initialState:{
        countries:[],
        visibleCount:10,
        loading:false,
        error:"",
    },
    reducers:{
        loadMore:(state)=>{
            state.visibleCount+=10;
        },
    },
     extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch countries";
      });
  },
})
export const {loadMore}=countriesSlice.actions;
export default countriesSlice.reducer;