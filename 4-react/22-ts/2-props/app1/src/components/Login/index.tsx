interface LoginProps {
  onSubmit: () => void
}

// function Login({ onSubmit }) {}
const Login: React.FC<LoginProps> = ({ onSubmit }:LoginProps) => {
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
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
      </form>
    </>
  )
}

export default Login
