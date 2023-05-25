import { configureStore } from "@reduxjs/toolkit";
import cookieAgreementReducer from "./slices/cookieAgreement";
import authReducer from "./slices/auth";

 
const store = configureStore({
    reducer: {
        cookieAgreement: cookieAgreementReducer,
        auth: authReducer,
    },
});

export default store;