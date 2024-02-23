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
  const [productsFuction , set_Products] = useState()
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <img src={productsFuction?.foto} alt="IMAGEN MODAL"></img>
          <Modal.Title>{productsFuction?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
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
    </div>
  );
};

export default Home;
