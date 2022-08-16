import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "AuthUser",
    initialState: {
        user: null,
        selectedTestList: []
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },

        logout: (state) => {
            state.user = null;
        },

        selectTest: (state, action) => {
            state.selectedTestList.push(action.payload)
        },
        removeTest: (state, action) => {
            // state.selectedTestList.pop()
            state.selectedTestList = state.selectedTestList.filter((value) => value.Name !== action.payload.Name)
        }



    }
})

export const { login, logout, selectTest, removeTest } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const getSelectedTestList = (state) => state.user.selectedTestList;

export default userSlice.reducer;