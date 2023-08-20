import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./features/user/UserSlice";
import jobSlice from "./features/user/job/jobSlice";
import allJobsSlice from "./features/allJobs/allJobsSlice";
export const store = configureStore({
    reducer: {
        user: UserSlice,
        job: jobSlice,
        allJobs: allJobsSlice,
    }
})
