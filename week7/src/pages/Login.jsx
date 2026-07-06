import { replace, useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  return (
    <div
      className="card border-3 rounded-5 mx-auto mt-5"
      style={{ width: "18rem", height: "25rem", border: "3px solid black" }}
    >
      <h1 className="text-center">Signup</h1>
      <div className="d-grid w-75 mx-auto mt-3">
        <label htmlFor="username">username</label>
        <input
          className="rounded-3 p-1 mt-1"
          style={{ border: "3px solid black" }}
          type="text"
          placeholder="Enter your username"
        />
        <label className="mt-2" htmlFor="email">
          email
        </label>
        <input
          className="rounded-3 p-1 mt-1"
          style={{ border: "3px solid black" }}
          type="email"
          placeholder="Enter your email"
        />
        <label className="mt-2" htmlFor="password">
          password
        </label>
        <input
          className="rounded-3 p-1 mt-1"
          style={{ border: "3px solid black" }}
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <button
        className="btn btn-primary mt-5 w-75 mx-auto fw-bold"
        onClick={() => {
          setIsLoggedIn(true);
          localStorage.setItem('auth' , 'true')
            navigate("/dashboard/home");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
