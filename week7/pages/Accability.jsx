import { Link } from "react-router-dom";

function Accability() {
  return (
    <div>
      <h1 className="ms-3 mt-3">Welcome to Accability Page</h1>
      <Link to="/dashboard/settings" className="fs-5 ms-3">Go Back</Link>
    </div>
  );
}

export default Accability;