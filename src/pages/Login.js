// Login Page
// Secure login form for students. (Student ID and PIN)
// Authentication simulation (no real backend, just a mock-up)
import { useNavigate } from "react-router-dom"
const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/dashboard')
    }


    return (
        <div className="login-container">
          <h2>Login</h2>
          <p>Please enter your student ID and PIN.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="student-id">Student ID</label>
            <input type="text" id="student-id" />
            <label htmlFor="student-pin">PIN</label>
            <input type="password" id="student-pin" />
            <button type="submit">Login</button>
          </form>
        </div>
    )
}

export default Login