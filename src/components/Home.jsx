import React from "react";
import { useUserContext } from "../context/UserContext";

const Home = () => {
  const { user } = useUserContext();
  return (
    <div className="text-center display-4 card">
      You are now loggedin as, {user.name}
    </div>
  );
};

export default Home;
