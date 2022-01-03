import React from "react";
import { useAuthProvider } from "../Context/authContext";
const Home = () => {
  const data = useAuthProvider();
  console.log(data);
  return <div>home</div>;
};

export default Home;
