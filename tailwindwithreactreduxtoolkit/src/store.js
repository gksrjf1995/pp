import { configureStore } from"@reduxjs/toolkit"
import user from "./reducer/userslice"

export const store = configureStore({
    reducer : {
        user,
    }
});