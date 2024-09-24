import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  // Fetch data when the component is loaded
  useEffect(() => {
    axios
      .get('http://localhost:4000/api/all-user')
      .then((response) => {
        setUsers(response.data.data); //'data' array in the response
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className='m-10 pb-10 '>
      <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 my-8">
        User List
      </h2>

      {/* Table for displaying user data */}
      <table className="min-w-full bg-gray-300 border border-green-500">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">DOB</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">City</th>
            <th className="py-2 px-4 border-b">Pin</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td className="py-2 px-4 border-b">{user._id}</td>
                <td className="py-2 px-4 border-b">{user.firstName}</td>
                <td className="py-2 px-4 border-b">{user.lastName}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.phone}</td>
                <td className="py-2 px-4 border-b">{user.dob}</td>
                <td className="py-2 px-4 border-b">{user.address}</td>
                <td className="py-2 px-4 border-b">{user.city}</td>
                <td className="py-2 px-4 border-b">{user.pin}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="py-4 text-center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
