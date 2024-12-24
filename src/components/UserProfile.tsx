// components/UserProfile.tsx

import React, { useState } from "react";
import { useUser } from "../context/UserContext"; // Import the custom hook

const UserProfile: React.FC = () => {
  const { user, setUser } = useUser(); // Destructure user and setUser from context
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleUpdate = () => {
    setUser({ name, email }); // Update user info in the context
  };

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>No user information available.</p>
      )}

      <div>
        <h3>Update User Info</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default UserProfile;
