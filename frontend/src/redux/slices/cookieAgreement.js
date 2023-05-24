import { createSlice } from '@reduxjs/toolkit';


export const cookieAgreementSlice = createSlice({
    name: 'cookieAgreement',
    initialState: {
        checkbox: false,
        agree: false,
    },
    reducers: {
        checkboxClicked: (state, action) => {
            state.checkbox = action.payload;
        },
        agreementClicked: (state) => {
            state.agree = true;
        },
    },
});

export const { checkboxClicked, agreementClicked } = cookieAgreementSlice.actions;

export const selectCheckbox = (state) => state.cookieAgreement.checkbox;
export const selectAgree = (state) => state.cookieAgreement.agree;

export default cookieAgreementSlice.reducer;