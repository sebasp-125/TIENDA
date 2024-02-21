import React from "react";
import { useSelector } from "react-redux";
import RickandMorty from "../componets/extra/RickandMorty";

const Home = () => {
  const user = useSelector((state) => state.loginStore);
  console.log(user);
  return (
    <div className="divLogin">
    
    </div>
  );
};

export default Home;
