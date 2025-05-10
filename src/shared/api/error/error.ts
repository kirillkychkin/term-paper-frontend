import axios, { AxiosError } from 'axios'

export const handleAxiosError = (error: AxiosError | Error) => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status
    const message = error.response?.data?.message || error.message

    if (status === 400) {
      console.error('Invalid request. Please check your data.')
    } else if (status === 401) {
      console.error('Please login to continue.')
    } else if (status === 403) {
      console.error("You don't have permission to access this resource.")
    } else if (status === 404) {
      console.error('The requested resource was not found.')
    } else if (status === 500) {
      console.error('An internal server error occurred. Please try again later.')
    } else {
      console.error(`An error occurred: ${message}`)
    }
  } else {
    console.error(`An unexpected error occurred: ${error.message}`)
  }
  return Promise.reject(error)
}
