import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRoles } from '../redux/slices/roleSlice';
import '../styles/PermissionManagement.css'

const PermissionManagement = () => {
  const roles = useSelector(state => state.roles);
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState(null);
  const [newPermission, setNewPermission] = useState('');

  const handleAddPermission = () => {
    if (newPermission.trim() && selectedRole) {
      const updatedRoles = roles.map(role =>
        role.id === selectedRole.id
          ? { ...role, permissions: [...role.permissions, newPermission] }
          : role
      );
      dispatch(setRoles(updatedRoles));
      setNewPermission('');
    }
  };

  const handleDeletePermission = (roleId, permission) => {
    const updatedRoles = roles.map(role =>
      role.id === roleId
        ? { ...role, permissions: role.permissions.filter(p => p !== permission) }
        : role
    );
    dispatch(setRoles(updatedRoles));
  };

  return (
    <div>
      <h1>Permission Management</h1>
      <div>
        <select
          onChange={(e) =>
            setSelectedRole(roles.find(role => role.id === parseInt(e.target.value, 10)))
          }
        >
          <option value="">Select Role</option>
          {roles.map(role => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
        {selectedRole && (
          <div>
            <input
              type="text"
              placeholder="Enter new permission"
              value={newPermission}
              onChange={(e) => setNewPermission(e.target.value)}
            />
            <button onClick={handleAddPermission}>Add Permission</button>
          </div>
        )}
      </div>
      {selectedRole && (
        <div>
          <h2>Permissions for {selectedRole.name}</h2>
          <ul>
            {selectedRole.permissions.map(permission => (
              <li key={permission}>
                {permission}
                <button onClick={() => handleDeletePermission(selectedRole.id, permission)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PermissionManagement;
