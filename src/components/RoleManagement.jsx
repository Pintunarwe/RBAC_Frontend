


import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRoles, addRole, deleteRole } from '../redux/slices/roleSlice';
import { fetchRoles } from '../api/mockApi';
import '../styles/RoleManagement.css';

const RoleManagement = () => {
  const roles = useSelector(state => state.roles);
  const dispatch = useDispatch();
  const [newRole, setNewRole] = useState('');

  // Fetch roles from the API when the component mounts
  useEffect(() => {
    fetchRoles().then(data => dispatch(setRoles(data)));
  }, [dispatch]);

  // Handle adding a new role
  const handleAddRole = () => {
    if (newRole.trim()) {
      const newRoleData = { id: Date.now(), name: newRole, permissions: [] };
      dispatch(addRole(newRoleData));
      setNewRole(''); // Reset the input field after adding
    }
  };

  // Handle deleting a role
  const handleDeleteRole = (id) => {
    dispatch(deleteRole(id));
  };

  return (
    <div className="role-management">
      <h1>Role Management</h1>
      
      {/* Add New Role Form */}
      <div className="add-role-form">
        <input
          type="text"
          placeholder="Enter new role"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
        />
        <button onClick={handleAddRole}>Add Role</button>
      </div>

      {/* Roles Table */}
      <table>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>
                <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
