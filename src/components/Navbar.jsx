import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <strong>KINCHIN INSTITUTE</strong>
      <Link to="dashboard">Dashboard</Link>
      <Link to="submit">Submit</Link>
      <Link to="requests">Requests</Link>
    </div>
  );
}

export default Navbar;
