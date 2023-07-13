import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ id: '', name: '', age: '' });
  const [editedUser, setEditedUser] = useState({ id: '', name: '', age: '' });
  const [selectedUserId, setSelectedUserId] = useState('');

  // Create operation
  const createUser = () => {
    setUsers(prevUsers => [...prevUsers, newUser]);
    setNewUser({ id: '', name: '', age: '' });
  };

  // Read operation
  const getUserById = id => {
    return users.find(user => user.id === id);
  };

  // Update operation
  const updateUser = () => {
    setUsers(prevUsers => {
      return prevUsers.map(user =>
        user.id === editedUser.id ? editedUser : user
      );
    });
    setEditedUser({ id: '', name: '', age: '' });
    setSelectedUserId('');
  };

  // Delete operation
  const deleteUser = id => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    setSelectedUserId('');
  };

  return (
    <div>
      <h1>CRUD Operations in ReactJS</h1>

      <h2>Create User</h2>
      <input
        type="text"
        placeholder="ID"
        value={newUser.id}
        onChange={e => setNewUser({ ...newUser, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={e => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Age"
        value={newUser.age}
        onChange={e => setNewUser({ ...newUser, age: e.target.value })}
      />
      <button onClick={createUser}>Create</button>

      <h2>Update User</h2>
      <select
        value={selectedUserId}
        onChange={e => setSelectedUserId(e.target.value)}
      >
        <option value="">Select User</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      {selectedUserId && (
        <div>
          <input
            type="text"
            placeholder="Name"
            value={editedUser.name}
            onChange={e =>
              setEditedUser({ ...editedUser, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Age"
            value={editedUser.age}
            onChange={e =>
              setEditedUser({ ...editedUser, age: e.target.value })
            }
          />
          <button onClick={updateUser}>Update</button>
          <button onClick={() => setSelectedUserId('')}>Cancel</button>
        </div>
      )}

      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.age})
            <button onClick={() => setSelectedUserId(user.id)}>Edit Profile</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
