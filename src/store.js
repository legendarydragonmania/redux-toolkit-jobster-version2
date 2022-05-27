import { configureStore } from '@reduxjs/toolkit'
import jobSlice from './features/job/jobSlice'
import userSlice from './features/user/userSlice'
import allJobsSlice from './features/allJobs/allJobs'

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
})
