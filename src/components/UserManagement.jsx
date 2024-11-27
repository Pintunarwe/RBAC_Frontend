


import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers, addUser, deleteUser } from '../redux/slices/userSlice';
import { fetchUsers } from '../api/mockApi';
import '../styles/UserManagement.css'

const UserManagement = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    name: '',
    role: '',
    status: 'active'
  });

  // Fetch users from mock API when the component mounts
  useEffect(() => {
    fetchUsers().then(data => dispatch(setUsers(data)));
  }, [dispatch]);

  // Handle input change for new user
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle adding a new user
  const handleAddUser = () => {
    if (newUser.name && newUser.role) {
      dispatch(addUser(newUser));
      setNewUser({ name: '', role: '', status: 'active' }); // Reset input fields after adding
    }
  };

  // Handle deleting a user
  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div className="user-management">
      <h1>User Management</h1>
      
      {/* Add New User Form */}
      <div className="add-user-form">
        <input
          type="text"
          name="name"
          value={newUser.name}
          placeholder="Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="role"
          value={newUser.role}
          placeholder="Role"
          onChange={handleInputChange}
        />
        <select
          name="status"
          value={newUser.status}
          onChange={handleInputChange}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button onClick={handleAddUser}>Add User</button>
      </div>

      {/* User Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
