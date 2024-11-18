import React, { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";
function DisplayUser() {
  // Access the user data using useContext
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setUser({ name: "Vinay", age: 50 });
  }, []);

  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default DisplayUser;
