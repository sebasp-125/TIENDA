import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionListproductAsyn } from "../redux/actions/actionsProduct";
import { Button, Modal } from "react-bootstrap";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productsStore);
  const [productsFuction, set_Products] = useState([]);
  useEffect(() => {
    dispatch(actionListproductAsyn());
  }, []);

  // const user = useSelector((state) => state.loginStore);
  // const productosPRO = localStorage.getItem("productosPRO");
  const Nodal = (products) => {
    set_Products(products);
    handleShow()
  };


  return (
    <div className="container">

      <Modal show={show} onHide={handleClose} >
        <div className="custom-modal-content">
          <Modal.Header className="custom-modal-header" closeButton>
            <img className="img_Nodal" src={productsFuction?.foto} alt="IMAGEN DE LA NODAL, NO EXISTE"/>
            <div>
              <h1>{productsFuction?.name}</h1>
              <p>{productsFuction?.price}</p>
              <p>Precio con IVA incluido</p>
              <h5 className="h5_Peso">Peso aproximado por pieza, puede variar de acuerdo al peso real</h5>
              <h3 className="h3_Madurez">Selecciona la Madurez que deseas</h3>
              <select>
                <option className="wrapOption_">Por elegir</option>
                <option>Maduro (Para Hoy)</option>
                <option>Normal (3-5 días)</option>
                <option>Verde (7 días)</option>
              </select>
              <h1>Productos Relacionados</h1>
            </div>
          </Modal.Header>
        </div>
        <Modal.Footer className="custom-modal-footer">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="row">
        <div className="col">
          <img src="https://res.cloudinary.com/dbwgsrqgm/image/upload/v1708568321/TIENDA/banner_bfvvrh.png" className="img-fluid" alt="Banner" />
          <h1 className="text-center mt-3">¡Adquiere todos tus productos favoritos al mejor precio!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="row-title">Ofertas</h1>
          <div className="row" style={{ boxShadow: '2px 2px 4px rgba(0.2, 0, 0, 0.2)', padding: '10px', borderRadius: "20px" }}>
            {products?.map((product, index) => (
              <div className="col-md-3" key={index}>
                <div className="card mb-3">
                  <p className="card-discount">{product.description}</p>
                  <img src={product.foto} className="card-img-top" alt="IMAGEN PRODUCTO" />
                  <p className="price">{product.price}</p>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <button className="btn-success" onClick={() => Nodal(product)}>Agregar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h1 className="row-title" style={{margin: "20px"}}>Lo mas popular</h1>
          <div className="row" style={{ boxShadow: '2px 2px 4px rgba(0.2, 0, 0, 0.2)', padding: '10px', borderRadius: "20px" }}>
            {products?.map((product, index) => (
              <div className="col-md-3" key={index}>
                <div className="card mb-3">
                  <p className="card-discount">{product.description}</p>
                  <img src={product.foto} className="card-img-top" alt="IMAGEN PRODUCTO" />
                  <p className="price">{product.price}</p>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <button className="btn-success" onClick={() => Nodal(product)}>Agregar</button>
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
