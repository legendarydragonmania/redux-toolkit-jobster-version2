import { showLoading, hideLoading, getAllJobs } from '../allJobs/allJobsSlice'
import customFetch from '../../utils/axios'
import { clearValues } from './jobSlice'
import { logoutUser } from '../user/userSlice'

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const response = await customFetch.post('/jobs', job)
    thunkAPI.dispatch(clearValues())
    return response.data
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser())
      return
    }
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
export const deleteJobThunk = async (jobID, thunkAPI) => {
  thunkAPI.dispatch(showLoading())
  console.log(jobID)
  try {
    const response = await customFetch.delete(`/jobs/${jobID}`)
    thunkAPI.dispatch(getAllJobs())
    return response.data
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const response = await customFetch.patch(`/jobs/${jobId}`, job)
    thunkAPI.dispatch(clearValues())
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
