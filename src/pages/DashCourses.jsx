import React, { useState, useEffect } from 'react';
import axios from 'axios'

const DashCourses = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://tadbackend.onrender.com/admission/find');
        const data = await response.data;

        if (Array.isArray(data)) {
          setStudents(data);
        } else {
          alert('Not Students yet')
          // console.error('Expected an array but got', data);
        }
      } catch (error) {
        // console.error('Error fetching data:', error);
        alert('Server could not fetch details right now')
      }
    }
    fetchStudents();
  }, []);

  const handleAccept = async () => {
    try {
      const response = await axios.put("https://tadbackend.onrender.com/admission/candidate/:id/accept")
      if (response.status === 200) {
        alert('Candidate has been successfully accepted');
      }
    } catch (error) {
      alert('Server error, please try again')
    }
  }
  const handleReject = async () => {
    try {
      const response = await axios.delete("https://tadbackend.onrender.com/admission/delete/:id")
      if (response.status === 200) {
        alert('Candidate has been deleted successfully')
      }
    } catch (error) {
      alert('Server error, please try again')
    }
  }

  return (
    <>
      <div className="text-center my-4">
        <h1 className="font-bold text-xl">PENDING ADMISSION STUDENTS</h1>
      </div>
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md hidden md:table">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
                <th className="p-4">Firstname</th>
                <th className="p-4">Lastname</th>
                <th className="p-4">State</th>
                <th className="p-4">Email</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="p-4">{student.firstname}</td>
                  <td className="p-4">{student.lastname}</td>
                  <td className="p-4">{student.state}</td>
                  <td className="p-4">{student.email}</td>
                  <td className="p-4 space-x-2">
                    <button onClick={handleAccept} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                      Accept
                    </button>
                    <button onClick={handleReject} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Responsive View */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {students.map((student, index) => (
              <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md p-4">
                <p className="font-bold text-gray-700">Firstname: <span className="font-normal">{student.firstname}</span></p>
                <p className="font-bold text-gray-700">Lastname: <span className="font-normal">{student.lastname}</span></p>
                <p className="font-bold text-gray-700">State: <span className="font-normal">{student.state}</span></p>
                <p className="font-bold text-gray-700">Email: <span className="font-normal">{student.email}</span></p>
                <div className="mt-4 space-x-2">
                  <button onClick={handleAccept} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                    Accept
                  </button>
                  <button onClick={handleReject} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCourses;
