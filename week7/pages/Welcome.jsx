import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Welcome() {
  const Navigate = useNavigate();
  return (
    <div className="card border-3 rounded-5 mx-auto mt-5" style={{ width: "18rem", height: "22rem", border: '3px solid black' }}>
      <h1 className="text-center">Welcome</h1>
      <p className="text-center fs-5 w-75 mx-auto mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        laboriosam adipisci sequi!
      </p>
      <button
        className="btn btn-primary w-75 mx-auto fw-bold mt-5"
        onClick={() => {
          Navigate("/login");
        }}
      >
        Let's Strat
      </button>
    </div>
  );
}

export default Welcome;
