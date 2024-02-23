import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionListproductAsyn } from "../redux/actions/actionsProduct";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productsStore);
  useEffect(() => {
    dispatch(actionListproductAsyn());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src="https://res.cloudinary.com/dbwgsrqgm/image/upload/v1708568321/TIENDA/banner_bfvvrh.png" className="img-fluid" alt="Banner" />
          <h1 className="text-center">¡Adquiere todos tus productos favoritos al mejor precio!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Ofertas</h1>
          <div className="row-products">
            {products?.map((product, index) => (
              <div className="col-md-3" key={index}>
                <div className="card mb-3">
                  <img src={product.foto} className="card-img-top" alt="IMAGEN PRODUCTO" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-success">Comprar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
