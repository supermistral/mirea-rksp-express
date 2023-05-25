import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        userAuthenticated: (state, payload) => {
            state.user = {
                email: payload.email,
                role: payload.role,
            };
        },
        userLogout: (state) => {
            state.user = null;
        },
    },
});

export const { userAuthenticated, userLogout } = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectUserRole = (state) => state.auth.user?.role;
export const isAuthenticated = (state) => state.auth.user !== null;
export const isAdmin = (state) => state.auth.user?.role === "admin";
export const isModerator = (state) => {
    const role = state.auth.user?.role;
    return role === "moderator" || role === "admin";
};

export default authSlice.reducer;
