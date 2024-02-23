import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';

const Banner = styled.img`
  width: 100%;
  height: auto;
  height: 220px;
  @media (max-width: 390px) {
    height: 150px;
    object-fit: cover;
  }
`;

const ContentBanner = styled.div`
  position: relative;
`;

const TitleBanner = styled.h1`
  position: absolute;
  bottom: 100px;
  text-align: center;
  left: 22%;
  color: white;
  font-size: 30px;
  @media (max-width: 390px) {
    font-size: 18px;
    bottom: 40px; 
  }
`;

const Home = () => {
  const user = useSelector((state) => state.loginStore);
  console.log(user);
  
  const productosPRO = localStorage.getItem("productosPRO")
  console.log(productosPRO);
  
  return (
    <div className="divLogin">
      <ContentBanner>
        <Banner src="https://res.cloudinary.com/dbwgsrqgm/image/upload/v1708568321/TIENDA/banner_bfvvrh.png" alt="Banner" />
        <TitleBanner>¡Adquiere todos tus productos favoritos al mejor precio!</TitleBanner>
      </ContentBanner>
    </div>
  );
};

export default Home;
