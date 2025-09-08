import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    data: []
}
const userSlice = createSlice({ // slice is small component where stored data
    name: "user", // name of the slice
    initialState, // data of slice
    reducers: { // reducres help to store the data in the slice. It is a sync action
        loadUser: (state, action) => {
            state.data = action.payload;
            
        }, // state: is the present state, ans action taking the upcomming data from the outside.
    },
});

export const {loadUser} = userSlice.actions;
export default userSlice.reducer;