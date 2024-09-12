import React from 'react';

const DashGrade = () => {
  const data = [
    { firstname: "John", lastname: "Doe", state: "California", email: "john@example.com" },
    { firstname: "Jane", lastname: "Smith", state: "New York", email: "jane@example.com" },
    { firstname: "Chris", lastname: "Johnson", state: "Texas", email: "chris@example.com" },
  ];

  return (
    <>
      <div className="text-center my-4">
        <h1 className="font-bold text-xl">ADMITTED STUDENTS</h1>
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
              </tr>
            </thead>
            <tbody>
              {data.map((person, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="p-4">{person.firstname}</td>
                  <td className="p-4">{person.lastname}</td>
                  <td className="p-4">{person.state}</td>
                  <td className="p-4">{person.email}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Responsive View */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {data.map((person, index) => (
              <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md p-4">
                <p className="font-bold text-gray-700">Firstname: <span className="font-normal">{person.firstname}</span></p>
                <p className="font-bold text-gray-700">Lastname: <span className="font-normal">{person.lastname}</span></p>
                <p className="font-bold text-gray-700">State: <span className="font-normal">{person.state}</span></p>
                <p className="font-bold text-gray-700">Email: <span className="font-normal">{person.email}</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashGrade;
