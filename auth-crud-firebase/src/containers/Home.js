import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';

const Logo = styled.img`
  width: auto;
  height: 40px;
`;

const ContentNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  h1 {
    font-size: 30px;
  }
  @media (max-width: 390px) {
    h1 {
      font-size: 20px;
    }
  }
`;

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

const BtnCarrito = styled.button`
  background-color: #58d68d;
  border: none;
  border-radius: 5px;
  margin-left: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  float: left;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
`;

// Estilos para la imagen del producto
const ProductImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 10px;
`;

// Estilos para el precio del producto
const ProductPrice = styled.b`
  font-size: 18px;
`;

// Estilos para el nombre del producto
const ProductName = styled.span`
  font-size: 16px;
`;

const Home = () => {
  const user = useSelector((state) => state.loginStore);
  console.log(user);
  return (
    <div className="divLogin">
      <ContentNav>
        <Logo src="https://res.cloudinary.com/dbwgsrqgm/image/upload/v1708566287/TIENDA/Tiendita_nderwo.png" alt="Imagen Logo" />
        <h1>Colombia Capital</h1>
        <BtnCarrito>Carrito</BtnCarrito>
      </ContentNav>
      <ContentBanner>
        <Banner src="https://res.cloudinary.com/dbwgsrqgm/image/upload/v1708568321/TIENDA/banner_bfvvrh.png" alt="Banner" />
        <TitleBanner>¡Adquiere todos tus productos favoritos al mejor precio!</TitleBanner>
      </ContentBanner>
      <ProductContainer>
      <ProductImage src="#" alt="IMAGEN" />
      <ProductPrice>2'0000</ProductPrice>
      <ProductName>JABON</ProductName>
    </ProductContainer>
    <ProductContainer>
      <ProductImage src="#" alt="IMAGEN" />
      <ProductPrice>2'0000</ProductPrice>
      <ProductName>JABON</ProductName>
    </ProductContainer>
    <ProductContainer>
      <ProductImage src="#" alt="IMAGEN" />
      <ProductPrice>2'0000</ProductPrice>
      <ProductName>JABON</ProductName>
    </ProductContainer>
    <ProductContainer>
      <ProductImage src="#" alt="IMAGEN" />
      <ProductPrice>2'0000</ProductPrice>
      <ProductName>JABON</ProductName>
    </ProductContainer>

    </div>
  );
};

export default Home;
