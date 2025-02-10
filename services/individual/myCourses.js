// import { axiosInstance } from '../api_manager/Axios'

// const baseURL = import.meta.env.VITE_BACKEND_BASE_URL
const baseURL = "http://localhost:8000/ar"

export const getStudentCourses = async (status) => {
  try {
    const response =  await fetch(`${baseURL}/individuals/user_courses_list/?status=${status}`);
    return response.json()
  } catch (error) {
    console.error('Error fetching beneficiaries:', error)
    throw error
  }
}