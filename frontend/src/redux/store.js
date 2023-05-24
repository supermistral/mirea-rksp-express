import { configureStore } from "@reduxjs/toolkit";
import cookieAgreementReducer from './slices/cookieAgreement';


const store = configureStore({
    reducer: {
        cookieAgreement: cookieAgreementReducer,
    },
});

export default store;