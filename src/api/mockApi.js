export const users = [
  { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', role: 'Editor', status: 'Inactive' },
];

export const roles = [
  { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
  { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
];

export const fetchUsers = () => Promise.resolve(users);
export const fetchRoles = () => Promise.resolve(roles);
