import React, { useState } from "react";
import { FaHome, FaBook, FaUser, FaClipboard, FaSignOutAlt } from "react-icons/fa";
import DashHome from "./DashHome";
import DashCourses from "./DashCourses";
import DashProfile from './DashProfile'
import DashGrade from "./DashGrade";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false); // To control sidebar visibility on mobile

  const renderContent = () => {
    switch (activePage) {
      case "Home":
        return <DashHome />;
      case "Pending Admission":
        return <DashCourses />;
      case "Admitted Student":
        return <DashGrade />;
      case "Students Assessment":
        return <DashProfile />;
      default:
        return <DashHome />;
    }
  };

  const handleLogout = () => {
    // Logic for logout (e.g., clear authentication tokens, redirect to login page)
    console.log("Logout clicked");
    // You can add a redirect or state clearing here
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Overlay for mobile sidebar */}
      <div
        className={`fixed z-20 inset-0 bg-gray-800 bg-opacity-75 lg:hidden transition-opacity duration-300 ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)} // Close sidebar when clicking outside
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed lg:static z-30 inset-y-0 left-0 w-64 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-blue-900 lg:translate-x-0`}
      >
        <div className="h-full flex flex-col justify-between p-4">
          <div>
            <h2 className="text-white text-xl font-bold mb-6">Admin Dashboard</h2>
            <nav>
              <ul>
                <li className="mb-2">
                  <button
                    onClick={() => {
                      setActivePage("Home");
                      setSidebarOpen(false); // Close sidebar on mobile after clicking
                    }}
                    className="flex items-center text-white py-2 px-4 rounded hover:bg-blue-700 w-full text-left"
                  >
                    <FaHome className="mr-2" /> Home
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    onClick={() => {
                      setActivePage("Pending Admission");
                      setSidebarOpen(false); // Close sidebar on mobile after clicking
                    }}
                    className="flex items-center text-white py-2 px-4 rounded hover:bg-blue-700 w-full text-left"
                  >
                    <FaBook className="mr-2" /> Pending Admission
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    onClick={() => {
                      setActivePage("Admitted Student");
                      setSidebarOpen(false); // Close sidebar on mobile after clicking
                    }}
                    className="flex items-center text-white py-2 px-4 rounded hover:bg-blue-700 w-full text-left"
                  >
                    <FaClipboard className="mr-2" /> Admitted Student
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    onClick={() => {
                      setActivePage("Students Assessment");
                      setSidebarOpen(false); // Close sidebar on mobile after clicking
                    }}
                    className="flex items-center text-white py-2 px-4 rounded hover:bg-blue-700 w-full text-left"
                  >
                    <FaUser className="mr-2" /> Students Assessment
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Logout Button */}
          <div>
            <button
              onClick={handleLogout}
              className="flex items-center text-white py-2 px-4 rounded hover:bg-blue-700 w-full text-left"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 shadow">
          <button
            className="lg:hidden text-blue-900"
            onClick={() => setSidebarOpen(!sidebarOpen)} // Toggle sidebar visibility on mobile
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-xl font-bold uppercase text-blue-900">{activePage}</h1>
        </div>

        {/* Display Area */}
        <div className="flex-1 p-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
