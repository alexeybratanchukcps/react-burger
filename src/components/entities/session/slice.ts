import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ICrendentials, ITokens, IUser} from "./models";


const initialState = {
    isAuthed: false,
    isLoading: false,

    credentials: {
        accessToken: "",
        refreshToken: "",
        user: {
            email: "",
            name: ""
        } as IUser

    } as ICrendentials,
};


export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = true
        },
        login: (state, payload:PayloadAction<ICrendentials>) => {
            state.credentials = payload.payload
            state.isAuthed = true
            state.isLoading = false
        },
        logout: () => initialState,

        refresh: (state, payload:PayloadAction<ITokens>) => {
            state.credentials = {
                ...state.credentials,
                ...payload.payload
            }
        }
    },
    // extraReducers: (builder) =>
    //     builder
    //         .addCase(logoutAction.type, () => initialState)
    //         .addCase(setCredentialsAction(null).type, (state, payload:PayloadAction<ITokens>) => {
    //             state.credentials = {
    //                 ...state.credentials,
    //                 ...payload.payload
    //             }
    //         }),
})

export const { actions: sessionActions } = sessionSlice;