import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  // Simulate a state that tracks authentication and admin status
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Simulate fetching authentication status from localStorage, an API, or context
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')); // Fetch from localStorage or an API
    if (user) {
      setIsAuthenticated(true);
      setIsAdmin(user.isAdmin); // Assuming `isAdmin` is part of the user object
    }
  }, []);

  // Protected route component
  const ProtectedRoute = ({ element }) => {
    return isAuthenticated && isAdmin ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Login route */}
          <Route path="/login" element={<Login />} />

          {/* Dashboard route protected for admin users */}
          <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
