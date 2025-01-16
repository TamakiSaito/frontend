
const Login: React.FC = () => {
 
  return (
    <>
      <h2>Login</h2>
      <input 
        type="text"
        placeholder="Username"
        className="px-4 py-2 border rounded"
      />
      <input 
        type="password"
        placeholder="Password"
        className="px-4 py-2 border rounded"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </button>
    </>
  )
}

export default Login
