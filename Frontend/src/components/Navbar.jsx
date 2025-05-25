import { Link } from 'react-router-dom';

export default function Navbar({ user, logout }) {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div className="font-bold text-lg">AuthApp</div>
      <div className="space-x-4">
        <Link to="/">Dashboard</Link>
        {user?.role === 'admin' && <Link to="/admin">Admin Panel</Link>}
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
